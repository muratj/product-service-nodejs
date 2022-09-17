const Exception = (error, description) => {
  return {
    error,
    description
  }
}

const handleException = (err, req, res, next) => {
  res.status(err.statusCode);
  res.json(Exception("Bad Request", err.message));
}

const routeException = (req, res) => {
  res.status(404);
  res.json(Exception("Not Found", `Wrong path: ${req.baseUrl}`));
}

module.exports = {
  Exception,
  handleException,
  routeException
};