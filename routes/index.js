var express = require('express');
var router = express.Router();
const { createProxyMiddleware } = require("http-proxy-middleware");

/* GET home page. */
router.get('/callFatSecretAPI', createProxyMiddleware({
  target: 'https://platform.fatsecret.com/rest/server.api',
  changeOrigin: true,
  pathRewrite: {
      "^/callFatSecretAPI": "",
  },
}));

module.exports = router;
