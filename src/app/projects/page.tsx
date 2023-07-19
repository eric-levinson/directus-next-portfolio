import directus from "../../pages/api/directus";
import Image from "next/image";
import Projectslist from "../../components/projectslist";

async function getPosts() {
  const posts = await directus.items("projects").readByQuery({
    fields: ["*", "slug", "title", "*.*", "images.*"],
  });
  console.log(posts);
  return posts.data;
}

export default async function DynamicPage() {
  const posts = await getPosts();
  const postsLoaded = posts!.length > 0;
  console.log(posts);

  return (
    <div className="container mx-auto">
      {postsLoaded && (
        <Projectslist
          data={{
            posts: posts,
            blog: {
              name: "Blog title",
              description: "Really good blog description",
            },
          }}
        />
      )}
    </div>
  );
}
