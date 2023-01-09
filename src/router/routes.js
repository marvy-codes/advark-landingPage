const routeNames = {
  HOME: 'Home',
};

const routes = [
  {
    name: routeNames.HOME,
    path: '/',
  },
];

export { routes, routeNames };

export default routes.map((route) => {
  return {
    component: () => import(`../views/${route.name}View.vue`),
    ...route,
  };
});
