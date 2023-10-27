import siteMetadata from '@/data/siteMetadata'
import { Briefcase } from 'lucide'

const ProfileInfos = () => {
  return (
    <div className="mb-4 space-y-2">
      <div className="flex items-center text-gray-700 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-briefcase"
        >
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
        <span className="px-2">
          Software Engineer{' '}
          <a
            href="https://digitalrecruiters.com"
            target="_blank"
            rel="noreferrer"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            @DigitalRecruiters
          </a>
        </span>
      </div>
      <div className="flex items-center text-gray-700 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-send-horizontal"
        >
          <path d="m3 3 3 9-3 9 19-9Z" />
          <path d="M6 12h16" />
        </svg>
        <a className="px-2" href={`mailto:${siteMetadata.email}`}>
          {siteMetadata.email}
        </a>
      </div>
      <div className="flex items-center text-gray-700 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-map-pinned"
        >
          <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
          <circle cx="12" cy="8" r="2" />
          <path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835" />
        </svg>
        <p className="px-2">Versailles 🇫🇷</p>
      </div>
    </div>
  )
}

export default ProfileInfos
