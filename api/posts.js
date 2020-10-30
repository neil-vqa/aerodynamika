import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: 'e5180a2e50c56e05e61cf58980',
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    },
    { include: "authors" })
    .catch(err => {
      console.error(err);
    });
}




