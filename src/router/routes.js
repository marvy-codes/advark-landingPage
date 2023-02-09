import { routeNames } from './routeNames';
import { routes } from './routeNames';

export { routes, routeNames };

export default routes.map((route) => {
  return {
    component: () => import(`../views/${route.name}View.vue`),
    ...route,
  };
});
