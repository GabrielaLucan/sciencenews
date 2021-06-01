export default function initErrorHandling(app) {
  app.all('*', (req, res) => {
    res.status(404)
      .json({
        status: 'fail',
        message: `Can't find ${req.url} on this server`,
      });
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => res.status(err.statusCode || 401)
    .json({
      status: 'error',
      messages: err?.messages || err?.inner || [],
      fields: err?.errors || {},
    }));
}
