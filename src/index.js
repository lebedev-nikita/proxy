const proxy = require('express-http-proxy');
const app = require('express')();

const HTTP_PORT = process.env.HTTP_PORT || 3000;

app.use('/:host/', (req, res, next) => {
  const host = req.params.host;
  delete req.params.host;
  proxy(`http://${host}`)(req, res, next);
})

app.listen(HTTP_PORT, () => {
  console.log('Server is listening on port: ' + HTTP_PORT);
});
