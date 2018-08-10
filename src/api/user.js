import resource from "../middleware/resourse";
export default ({ config, db }) => {
  return resource({
    /**
     * @swagger
     * resourcePath: /api
     * description: All about API
     */

    /**
     * @swagger
     * path: /user
     * operations:
     *   -  httpMethod: GET
     *      summary: Login with username and password
     *      notes: Returns a user based on username
     *      responseClass: User
     *      nickname: login
     *      consumes:
     *        - text/html
     *      parameters:
     *        - name: username
     *          description: Your username
     *          paramType: payload
     *          required: true
     *          dataType: string
     *        - name: password
     *          description: Your password
     *          paramType: payload
     *          required: true
     *          dataType: string
     */

    index(req, res) {
      res.json({ name: "hello world" });
    }
  });
};
