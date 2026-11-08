import { createTRPCRouter } from "@/trpc/init";
import { progressRouter } from "@/trpc/routers/progress";

export const appRouter = createTRPCRouter({
  progress: progressRouter,
  // Portfolio Content Administration
  //   userAdmin: userAdminRouter,
  //   projectAdmin: projectAdminRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
