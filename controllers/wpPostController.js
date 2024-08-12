const { Op } = require("sequelize");
const WpPost = require("../models/wp-post");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await WpPost.findAll({
      where: {
        post_type: "wpbdp_listing",
        post_title: {
          [Op.ne]: "(no title)",
        },
      },
    });

    // Retorna apenas os campos necessários
    const filteredPosts = await Promise.all(
      posts.map(async (post) => {
        const postParent = await WpPost.findOne({
          where: {
            post_parent: post.ID,
            post_type: "attachment",
          },
        });

        return {
          ID: post.ID,
          post_title: post.post_title,
          post_content: post.post_content,
          _wp_attached_file: post._wp_attached_file,
          _wpbdp_fields: post._wpbdp_fields,
          image_url: postParent ? postParent.guid : null,
        };
      })
    );

    res.json(filteredPosts);
  } catch (error) {
    res.status(500).send("Error fetching posts");
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await WpPost.findByPk(req.params.id);
    if (post && post.post_title !== "(no-title)") {
      res.json(post);
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    res.status(500).send("Error fetching post by ID");
  }
};
