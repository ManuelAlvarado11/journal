const daybookRouter = [
  {
    path: "/daybook",
    name: "daybook",
    component: () =>
      import(
        /* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
      ),
    children: [],
  },
];
export default daybookRouter;
