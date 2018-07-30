/* eslint-disable global-require */


const routes = {


  path: '',
  children: [

  { path: '',
    load: () => import(/* webpackChunkName: 'introduction' */ './Introduction'), },

  { path: '/checkout',
    load: () => import(/* webpackChunkName: 'checkout' */ './Checkout'), },

  ],


async action({ next }) {
const route = await next();

route.title = `Rosa Khutor – Tickets – ${route.title || 'Untitled Page'}`;
route.description = route.description || '';


return route;


}, };


if (__DEV__) {


  routes.children.unshift(

  { path: '/error',
    action: require('./Error').default, }

  );


}


export default routes;
