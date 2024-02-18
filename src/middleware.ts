import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/marketplace(.*)",
    "/giveaways(.*)",
    "/auction(.*)",
    "/create(.*)",
    "/bar(.*)",
  ],
});
