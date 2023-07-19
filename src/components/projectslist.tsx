import directus from "../pages/api/directus";

export default function Projectslist(params) {
    const blog = params.data.blog;
    const posts = params.data.posts;

    return (
        <>
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
                            Projects
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center md:text-lg">
                            Welcome to the Projects page, where I present a selection of my recent works and achievements. From web development to software solutions, these projects demonstrate my dedication to delivering high-quality and user-friendly experiences. Feel free to explore and learn more about the technologies utilized and the value they bring to users and businesses alike.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                        {posts.map((post) => (
                            <div 
                                key={post.slug}
                                className="card w-96 bg-base-100 shadow-xl rounded-lg border border-slate-900/10 dark:border-slate-50/[0.06]">
                            <figure>
                                <a
                                        href={`/projects/${post.slug}`}
                                        className="group relative block h-48 overflow-hidden md:h-64"
                                    >
                                        <img
                                            src={`${directus.url}assets/${post.featured_image.filename_disk}?width=300`}
                                            loading="lazy"
                                            alt=""
                                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 group-hover:blur-sm"
                                        />
                                    </a>
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">
                                    <a
                                        href={`/projects/${post.slug}`}
                                        className="transition duration-100 hover:text-neutral-500 active:text-neutral-600"
                                    >
                                        {post.title}
                                    </a>
                                </h2>
                              <p>{post.description}</p>
                              <div className="card-actions justify-end mt-4">
                                {post.technologies.map((technology) => (
                                    <div key={technology} className="badge badge-outline">{technology}</div>
                                ))}
                              </div>
                            </div>
                          </div>
                            ))}

                        {/*posts.map((post) => (
                            <div
                                key={post.slug}
                                className="flex flex-col overflow-hidden rounded-lg border border-slate-900/10 bg-base-100 dark:border-slate-50/[0.06]"
                            >
                                <a
                                    href={`/projects/${post.slug}`}
                                    className="group relative block h-48 overflow-hidden md:h-64"
                                >
                                    <img
                                        src={`${directus.url}assets/${post.featured_image.filename_disk}?width=300`}
                                        loading="lazy"
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 group-hover:blur-sm"
                                    />
                                </a>

                                <div className="flex flex-1 flex-col p-4 sm:p-6">
                                    <h2 className="mb-2 text-lg font-semibold">
                                        <a
                                            href={`/projects/${post.slug}`}
                                            className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                        >
                                            {post.title}
                                        </a>
                                    </h2>

                                    <p className="mb-2">
                                        This is a section of some simple filler text, also known as
                                        placeholder text. It shares some characteristics of a real
                                        written text.
                                    </p>

                                    <div className="mt-auto flex items-end justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                                <img
                                                    src={`${directus.url}assets/${post.author.avatar.filename_disk}`}
                                                    loading="lazy"
                                                    alt="Photo by Brock Wegner"
                                                    className="h-full w-full object-cover object-center"
                                                   />
                                            </div>

                                            <div>
                                                <span className="block">{post.author.first_name}</span>*
                                                <span className="block text-sm">
                                                    {post.date_created}
                                                </span>
                                            </div>
                                        </div>

                                        <span className="rounded border px-2 py-1 text-sm text-gray-500">
                                            Article
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))*/}

                        {/*
                        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
                            <a
                                href="#"
                                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Photo by Minh Pham"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a
                                        href="#"
                                        className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                    >
                                        New trends in Tech
                                    </a>
                                </h2>

                                <p className="mb-8 text-gray-500">
                                    This is a section of some simple filler text, also known as
                                    placeholder text. It shares some characteristics of a real
                                    written text.
                                </p>

                                <div className="mt-auto flex items-end justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                                                loading="lazy"
                                                alt="Photo by Brock Wegner"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500">Mike Lane</span>
                                            <span className="block text-sm text-gray-400">
                                                July 19, 2021
                                            </span>
                                        </div>
                                    </div>

                                    <span className="rounded border px-2 py-1 text-sm text-gray-500">
                                        Article
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
                            <a
                                href="#"
                                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Photo by Lorenzo Herrera"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a
                                        href="#"
                                        className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                    >
                                        Working with legacy stacks
                                    </a>
                                </h2>

                                <p className="mb-8 text-gray-500">
                                    This is a section of some simple filler text, also known as
                                    placeholder text. It shares some characteristics of a real
                                    written text.
                                </p>

                                <div className="mt-auto flex items-end justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                                                loading="lazy"
                                                alt="Photo by peter bucks"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500">
                                                Jane Jackobs
                                            </span>
                                            <span className="block text-sm text-gray-400">
                                                April 07, 2021
                                            </span>
                                        </div>
                                    </div>

                                    <span className="rounded border px-2 py-1 text-sm text-gray-500">
                                        Article
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
                            <a
                                href="#"
                                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Photo by Magicle"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a
                                        href="#"
                                        className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                    >
                                        10 best smartphones for devs
                                    </a>
                                </h2>

                                <p className="mb-8 text-gray-500">
                                    This is a section of some simple filler text, also known as
                                    placeholder text. It shares some characteristics of a real
                                    written text.
                                </p>

                                <div className="mt-auto flex items-end justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"
                                                loading="lazy"
                                                alt="Photo by Jassir Jonis"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500">Tylor Grey</span>
                                            <span className="block text-sm text-gray-400">
                                                March 15, 2021
                                            </span>
                                        </div>
                                    </div>

                                    <span className="rounded border px-2 py-1 text-sm text-gray-500">
                                        Article
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
                            <a
                                href="#"
                                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                                    loading="lazy"
                                    alt="Photo by Martin Sanchez"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>

                            <div className="flex flex-1 flex-col p-4 sm:p-6">
                                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                                    <a
                                        href="#"
                                        className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                    >
                                        8 High performance Notebooks
                                    </a>
                                </h2>

                                <p className="mb-8 text-gray-500">
                                    This is a section of some simple filler text, also known as
                                    placeholder text. It shares some characteristics of a real
                                    written text.
                                </p>

                                <div className="mt-auto flex items-end justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
                                            <img
                                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"
                                                loading="lazy"
                                                alt="Photo by Aiony Haust"
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div>
                                            <span className="block text-indigo-500">Ann Park</span>
                                            <span className="block text-sm text-gray-400">
                                                January 27, 2021
                                            </span>
                                        </div>
                                    </div>

                                    <span className="rounded border px-2 py-1 text-sm text-gray-500">
                                        Article
                                    </span>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    );
}
