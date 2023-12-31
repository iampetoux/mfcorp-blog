import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import HeroBanner from '@/components/HeroBanner'
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
      <PageSEO
        title={`${siteMetadata.title} - Le blog de ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <HeroBanner />
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
                aria-label="Voir tous les posts"
              >
                Voir tout &rarr;
              </Link>
            </div>
          )}
        </div>
        <div className="sm:grid gap-4 grid-cols-3 grid-rows-3 items-stretch">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, images } = post
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="flex flex-col my-4 p-4 border-2 border-solid rounded-lg border-gray-200 dark:border-gray-800 transform hover:border-primary-600 dark:hover:border-primary-400"
              >
                <Image
                  loading="lazy"
                  className="rounded-lg mb-2 object-cover w-full h-[200px]"
                  width="300"
                  height="200"
                  src={images ? images[0] : '/static/images/twitter-card.png'}
                  alt={title}
                />
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </dl>
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <div className="text-gray-900 dark:text-gray-100">{title}</div>
                  </h2>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
