import directus from "../../pages/api/directus";
import Image from "next/image";
import Bloglist from "../../components/bloglist";

async function getPosts() {
  const posts = await directus.items("articles").readByQuery({
    fields: [
      "slug",
      "title",
      "publish_date",
      "author.first_name",
      "*.*",
      "image.*",
      "author.*",
      "author.avatar.*",
    ],
    sort: ["-publish_date"],
  });
  return posts.data;
}

export default async function DynamicPage() {
  const posts = await getPosts();
  const postsLoaded = posts!.length > 0;
  //console.log(posts)

  return (
    <div className="container mx-auto">
        {postsLoaded &&
         <Bloglist data={{posts: posts, blog: {name: "Blog title", description: "Really good blog description"}}} />
        }
        </div>
  );
}

async function Posts() {
  const posts = await getPosts();
  
  //map over posts and return a list of posts in daisyui card format
  return (
    <>
      {/*postsLoaded &&
        posts!.map((post) => (
          <div key={post.slug} className="card w-96 bg-base-100 border border-slate-900/10 dark:border-slate-50/[0.06]">
            <figure className="relative h-48 md:shrink-0 ">
              <Image
                src={`${directus.url}assets/${post.image.filename_disk}?width=300`}
                alt=""
                className="h-48 w-full object-cover md:h-full md:w-48"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill={true}
                priority={true}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-gray-500">
                {post.publish_date} &bull; {post.author.first_name}
              </p>
              <div className="card-actions justify-start">
                <a href={`/blog/${post.slug}`} className="btn-primary btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))*/}

        
    </>
  );
}
