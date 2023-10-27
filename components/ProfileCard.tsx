import Image from 'next/image'
import NowPlayingSpotify from '@/components/NowPlayingSpotify'
import ProfileInfos from '@/components/ProfileInfos'

const ProfileCard = () => {
  return (
    <div className="max-w-sm bg-white overflow-hidden border-2 border-gray-200 transition-all hover:scale-110 duration-500 hover:border-primary-600 dark:hover:border-primary-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400 mb-4">
          Développeur FullStack
        </p>
        <ProfileInfos />
      </div>
      <NowPlayingSpotify />
    </div>
  )
}

export default ProfileCard
