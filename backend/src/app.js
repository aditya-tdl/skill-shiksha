import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import morgan from "morgan";

const app = express();

const allowedOrigins = [
  "https://houseofde.com",
  "https://www.houseofde.com",
  "https://house-of-de-red.vercel.app",
  "http://localhost:3000",
  "http://15.206.170.223",
  "http://15.206.170.223:3000"

];

// CORS configuration for cross-origin requests and credentials
const corsOptions = {
  origin: function (origin, callback) {
    console.log("Request Origin:", origin);

    // Check if origin is allowed OR contains houseofde/localhost (temporary debug bypass)
    const isAllowed = !origin || allowedOrigins.includes(origin) || origin.includes("houseofde") || origin.includes("localhost");

    if (isAllowed) {
      callback(null, true);
    } else {
      console.error(`CORS Blocked for origin: ${origin}`);
      // Distinct error message to confirm deployment
      callback(new Error(`CORS_BLOCK_DEBUG: Not allowed by CORS. Origin: '${origin}' not in allowed list.`));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(morgan("dev"));

app.use(cors(corsOptions));

// Explicitly handle preflight (OPTIONS) requests
app.options("*", cors(corsOptions));

// Ensure CORS headers are present on ALL responses (including errors)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && (allowedOrigins.includes(origin) || origin.includes("houseofde") || origin.includes("localhost"))) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  }
  next();
});

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

app.use(errorMiddleware);

export default app;
