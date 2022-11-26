var express = require('express');
var router = express.Router();
const { createProxyMiddleware } = require("http-proxy-middleware");

/* GET home page. */
router.get('/getFood', createProxyMiddleware({
  target: 'https://platform.fatsecret.com/rest/server.api',
  changeOrigin: true,
  pathRewrite: {
      "^/getFood": "",
  },
}));

module.exports = router;
