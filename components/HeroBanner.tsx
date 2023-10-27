import ProfileCard from '@/components/ProfileCard'

const HeroBanner = () => {
  return (
    <div className="py-6 xl:py-12 text-center lg:text-left">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mt-0 mb-16 text-2xl font-bold tracking-tight md:text-6xl xl:text-4xl text-black dark:text-[hsl(218,81%,95%)]">
              <span className="mr-2 animate-wave inline-block span-wave">👋🏼</span> Bonjour, je m'appelle
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
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
