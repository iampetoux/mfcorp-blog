import siteMetadata from '@/data/siteMetadata'

const ProfileInfos = () => {
  return (
    <div className="mb-4">
      <div className="flex items-center text-gray-700 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <a className="px-2" href={`mailto:${siteMetadata.email}`}>
          {siteMetadata.email}
        </a>
      </div>
      <div className="flex items-center text-gray-700 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <p className="flex space-x-1.5 px-2">
          <a
            target="_blank"
            href={siteMetadata.github}
            rel="noreferrer"
            className="hover:underline"
            data-umami-event="profile-card-github"
          >
            github/{siteMetadata.socialAccounts.github}
          </a>
        </p>
      </div>
      <div className="flex items-center text-gray-700 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p className="px-2">Versailles 🇫🇷</p>
      </div>
    </div>
  )
}

export default ProfileInfos
