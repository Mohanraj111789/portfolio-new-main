import express, { type Request, Response, NextFunction } from "express";
import http from 'http';
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Initialize express app
const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  
  // Log the error
  console.error(`[ERROR] ${status} - ${message}`, err.stack || '');
  
  // Only send error details in development
  const errorResponse = process.env.NODE_ENV === 'development' 
    ? { message, stack: err.stack }
    : { message: 'Internal Server Error' };
    
  res.status(status).json(errorResponse);
});

// Create HTTP server
const server = http.createServer(app);

// Register application routes
registerRoutes(app);

// Start the server
async function startServer() {
  try {
    // Setup Vite in development, serve static files in production
    if (app.get("env") === "development") {
      await setupVite(app, server);
    } else {
      serveStatic(app);
    }

    // Get port from environment or use 3000 as default
    const port = parseInt(process.env.PORT || '3000', 10);
    const host = process.env.HOST || '127.0.0.1';
    
    // Start listening
    server.listen(port, host, () => {
      const serverUrl = `http://${host}:${port}`;
      log(`Server is running in ${app.get('env')} mode`);
      log(`Server listening at ${serverUrl}`);
      
      // Log available routes in development
      if (app.get('env') === 'development') {
        console.log('\nAvailable Routes:');
        console.log('-----------------');
        app._router.stack
          .filter((r: any) => r.route)
          .map((r: any) => {
            const method = Object.keys(r.route.methods)[0].toUpperCase();
            console.log(`${method.padEnd(6)} ${r.route.path}`);
          });
        console.log('\n');
      }
    });

    // Handle server errors
    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Port ${port} is already in use. Please try a different port.\n`);
      } else {
        console.error('\n❌ Server error:', err);
      }
      process.exit(1);
    });

    // Handle process termination
    process.on('SIGTERM', () => {
      console.log('\nSIGTERM received. Shutting down gracefully...');
      server.close(() => {
        console.log('Server terminated');
        process.exit(0);
      });
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (err) => {
      console.error('Uncaught Exception:', err);
      server.close(() => process.exit(1));
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Start the application
startServer();
