module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/cocuWebhook",
      handler: "api::test.test.index",
      config: {
        auth: false,
      },
    },
  ],
};
