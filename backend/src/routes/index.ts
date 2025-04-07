// src/routes/index.ts
import express from "express";
import userRoutes from "./user/userRoutes";
// import more routes as you create them...

const router = express.Router();

// Define all your routes here
const routes: { path: string; route: express.Router }[] = [
  { path: "/users", route: userRoutes },
  // Add more like:
  // { path: "/user", route: userRoutes },
  // { path: "/auth", route: authRoutes },
];

// Loop through and mount each route
routes.forEach((r) => {
  router.use(r.path, r.route);
});

export default router;
