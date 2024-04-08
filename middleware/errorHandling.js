const errorResponder = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: "This is a message from the Error Handler 😞",
    error: err,
  });
};

export { errorResponder };
