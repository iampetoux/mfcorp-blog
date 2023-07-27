import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { NewsletterForm } from 'pliny/ui/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import Image from 'next/image'

const MAX_DISPLAY = 6

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="py-12 text-center lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <span className="mt-0 mb-16 text-2xl font-bold tracking-tight md:text-6xl xl:text-4xl text-black dark:text-[hsl(218,81%,95%)]">
                <span className="mr-2">👋🏼</span> Bonjour, je m'appelle
              </span>
              <h1 className="mt-0 mb-6 text-7xl font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-primary-700 to-primary-400 tracking-tight md:text-6xl xl:text-7xl">
                Maxime
              </h1>
              <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400 mb-2">
                Je suis un software engineer full stack avec une grosse préférence pour le front-end
                👀
              </p>
              <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">
                J'ai pensé ce blog comme ma maison virtuelle, j'y mets tout ce qui me passe par la
                tête 🧠
              </p>
            </div>
            <div className="hidden xl:flex justify-self-end">
              <div className="max-w-sm bg-white border overflow-hidden border-2 border-gray-200 transition-colors hover:border-primary-600 dark:hover:border-primary-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  alt="avatar"
                  loading="lazy"
                  width="550"
                  height="350"
                  decoding="async"
                  data-nimg="1"
                  style={{
                    color: 'transparent',
                    objectPosition: '50% 16%',
                    objectFit: 'cover',
                    width: '100%',
                    aspectRatio: '17/11',
                  }}
                  src="/static/images/maxime.jpg"
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Maxime FLAMENT
                  </h5>
                  <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">
                    Développeur FullStack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex justify-between space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Derniers posts
          </h1>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base font-medium leading-6">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="All posts"
              >
                Voir tous les posts &rarr;
              </Link>
            </div>
          )}
        </div>
        <div className="sm:grid gap-4 grid-cols-3 grid-rows-3 items-stretch">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title } = post
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="flex flex-col justify-between my-4 p-4 border-2 border-solid rounded-lg border-gray-200 dark:border-gray-800 transform hover:border-primary-600 dark:hover:border-primary-400"
              >
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <div className="text-gray-900 dark:text-gray-100">{title}</div>
                  </h2>
                </div>
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </dl>
              </Link>
            )
          })}
        </div>
      </div>
      {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
