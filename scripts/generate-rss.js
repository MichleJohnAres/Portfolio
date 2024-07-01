const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

exports.generate = async () => {
  const feed = new RSS({
    title: "Michle John",
    description:
      "Hey! I am Michle John, a web3 full-stack engineer from Canada",
    feed_url: "https://michlejohnares.com/feed.xml",
    site_url: "https://michlejohnares.com",
    managingEditor: "Michle John",
    webMaster: "Michle John",
    language: "en",
    copyright: `Michle John | ${new Date().getFullYear()}`,
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "blogs"));

  await Promise.all(
    posts.map(async (filename) => {
      const blogsData = await fs.readFile(
        path.join(path.join(__dirname, "..", "data", "blogs", filename))
      );

      const frontmatter = matter(blogsData);

      feed.item({
        title: frontmatter.data.title,
        description: frontmatter.data.subtitle,
        url: frontmatter.data.url,
        author: "Michle John",
        date: frontmatter.data.date,
        categories: frontmatter.data.tags.split(", "),
      });
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
};
