const routeNames = {
  HOME: 'Home',
  TEAM: 'Team',
  TERMS: 'Terms',
  PRIVACY: 'Privacy',
  CAREERS: 'Careers',
};

const routes = [
  {
    name: routeNames.HOME,
    path: '/',
  },
  {
    name: routeNames.TEAM,
    path: '/Team',
  },
  {
    name: routeNames.TERMS,
    path: '/Terms',
  },
  {
    name: routeNames.PRIVACY,
    path: '/Privacy',
  },
  {
    name: routeNames.CAREERS,
    path: '/Careers',
  },
];

export { routes, routeNames };

export default routes.map((route) => {
  return {
    component: () => import(`../views/${route.name}View.vue`),
    ...route,
  };
});
