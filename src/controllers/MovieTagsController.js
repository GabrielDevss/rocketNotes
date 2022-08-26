const knex = require("../database/knex");

class MovieTagsController {
  async index(request, response) {
    const { user_id } = request.user.id;

    const tags = await knex("movieTags").where({ user_id }).orderBy("name");

    return response.json(tags);
  }
}

module.exports = MovieTagsController;
