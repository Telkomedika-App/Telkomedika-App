import studentAuthRoutes from "./domains/student-auth/student-auth.routes.js";
import forumRoutes from "./domains/forum/forum.routes.js";

const routes = [
  {
    path: "/student-auth",
    route: studentAuthRoutes,
  },
  {
    path: "/forum",
    route: forumRoutes,
  }
];

export default routes;
