import { Figtree } from '@next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const figtree = Figtree({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SectionContainer>
        <div className={`${figtree.className} flex flex-col justify-between`}>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
