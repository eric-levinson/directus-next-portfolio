import directus from '../../../pages/api/directus';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import GithubIcon from '../../../components/icons/githubicon';
import Link from 'next/link';

async function getPost(slug) {
  //console.log(slug)
  try {
    const post = await directus.items('projects').readByQuery({
      filter: {
        slug: {
          _eq: slug
        },
      },
      fields: ['*.*', 'image.*', 'author.*'],
    })
    console.log(post)
    return post.data![0]
  } catch (error) {
    //console.log(error)
    notFound()
  }
}

export default async function DynamicPage({ params }) {

  const post = await getPost(params.slug);
  //console.log(post.image.filename_disk)
  //console.log(post)
  return (
    <div>
      <div className="md:shrink-0 relative h-96 ">
            <Image
              src={`${directus.url}assets/${post.featured_image.filename_disk}?width=2000`}
              alt=""
              className="h-48 w-full object-cover md:h-full md:w-48 "
              sizes="(max-width: 768px) 100vw, (max-width: 100vw) 50vw, 33vw"
              fill={true}
              priority={true}
            />
      </div>
      <div className='container'>          
        <div className="grid place-content-center">
        <h1 className="text-3xl font-bold underline mb-6 mt-6">{post.title}</h1>
        
        {post!.github_link ? <p className="text-xl font-bold mb-4 mt-4 text-white underline"><Link href={post!.github_link} target='_blank'><GithubIcon alt="github logo"/></Link></p> : null }
          
          
          <article
            className="prose prose-lg dark:prose-invert mt-8 mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}