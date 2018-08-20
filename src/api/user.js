/**
 * @swagger
 * resourcePath: /api
 * description: All about API
 */

/**
 * @swagger
 * path: /api/v1/user
 * operations:
 *   -  httpMethod: GET
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: User
 *      nickname: login
 *      consumes:
 *        - text/json
 */

const getAllUser = (req, res) => {
  res.json({ name: "hello" });
};
export default { getAllUser };
