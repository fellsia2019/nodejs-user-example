const db = require("../db");
//
// ---
//
class PostController {
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.query(
      "INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *",
      [title, content, userId]
    );
    res.json(newPost.rows[0]);
  }
  //
  async getPosts(req, res) {
    const posts = await db.query("SELECT * FROM post");
    res.json(posts.rows);
  }
  //
  async getPostByUser(req, res) {
    const id = req.query.id;
    const posts = await db.query("SELECT * FROM post WHERE user_id = $1", [id]);

    res.json(posts.rows);
  }
  //
  async updatePostById(req, res) {
    const { title, content, userId, postId } = req.body;
    const post = await db.query(
      "UPDATE post SET title = $1, content = $2, user_id = $3 WHERE id = $4 RETURNING *",
      [title, content, userId, postId]
    );
    res.json(post.rows[0]);
  }
}

module.exports = new PostController();
