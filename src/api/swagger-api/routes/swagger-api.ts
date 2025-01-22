export default {
  routes: [
    {
      method: "GET",
      path: "/swagger-api",
      handler: "swagger-api.exampleAction",
      config: {
        auth: false,
      },
    },
  ],
};
