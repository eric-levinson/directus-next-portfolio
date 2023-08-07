import directus from "../../../pages/api/directus";
import { notFound } from "next/navigation";
import Image from "next/image";
import GithubIcon from "../../../components/icons/githubicon";
import LinkIcon from "../../../components/icons/linkicon";
import Link from "next/link";

async function getPost(slug) {
  //console.log(slug)
  try {
    const post = await directus.items("projects").readByQuery({
      filter: {
        slug: {
          _eq: slug,
        },
      },
      fields: ["*.*", "image.*", "author.*"],
    });
    //console.log(post)
    return post.data![0];
  } catch (error) {
    //console.log(error)
    notFound();
  }
}

export default async function DynamicPage({ params }) {
  const post = await getPost(params.slug);
  //console.log(post.image.filename_disk)
  //console.log(post)
  return (
    <div>
      <div className="relative h-96 md:shrink-0 ">
        <Image
          src={`${directus.url}assets/${post.featured_image.filename_disk}?width=2000`}
          alt=""
          className="h-48 w-full object-cover md:h-full md:w-48 "
          sizes="(max-width: 768px) 100vw, (max-width: 100vw) 50vw, 33vw"
          fill={true}
          priority={true}
        />
      </div>
      <div className="container mx-auto">
        <div className="grid place-content-center">
          <div>
            <h1 className="mb-6 mt-6 text-3xl font-bold underline">
              {post.title}
            </h1>

            {post!.github_link ? (
              <button className="btn-outline btn-primary btn">
                <Link href={post!.github_link} target="_blank">
                  <GithubIcon alt="github logo" />
                </Link>
              </button>
            ) : null}

            {post!.live_link ? (
              <button className="btn-outline btn-primary btn ml-2">
                <Link href={post!.live_link} target="_blank">
                  <LinkIcon alt="link icon" />
                </Link>
              </button>
            ) : null}
            
          </div>

          <article
            className="prose-lg prose mt-8 mb-8 dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
