export default type => {
  return function(req, res, next) {
    next();
  };
};
