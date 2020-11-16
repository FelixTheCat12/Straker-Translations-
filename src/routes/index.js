export default [
  {
    path: "/",
    name: "home",
    component: () => import(/*webpackChunckName: 'home'*/ "@/views/home")
  }
];
