const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000/api", // Removed `/api` from here
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '/api', // This keeps the `/api` path while rewriting
      },
    })
  );
};
