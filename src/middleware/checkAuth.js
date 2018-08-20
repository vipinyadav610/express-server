export default ({ config, db }) => {
  return (req, res, next) => {
    db.query("SELECT * from users").then(result => {
      console.log("hello", result);
      next();
    });
  };
};
