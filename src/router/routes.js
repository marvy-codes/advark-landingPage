const routeNames = {
  HOME: 'Home',
  TEAM: 'Team'
};

const routes = [
  {
    name: routeNames.HOME,
    path: '/',
  },
  {
    name: routeNames.TEAM,
    path: '/Team'
  }
];

export { routes, routeNames };

export default routes.map((route) => {
  return {
    component: () => import(`../views/${route.name}View.vue`),
    ...route,
  };
});
