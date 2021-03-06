import React, { ReactNode } from 'react'
import { Container } from 'react-bootstrap'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'CardShop' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content='Buy the hottest sports cards!' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://cardshop.vercel.app/' />
      <meta
        property='og:image'
        content='https://cardshop.vercel.app/images/cardshop.png'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
      />
    </Head>
    <Navbar />
    <main className='py-3'>
      <Container>{children}</Container>
    </main>
    <Footer />
  </div>
)

export default Layout
