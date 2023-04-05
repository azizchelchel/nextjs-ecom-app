import '@/styles/globals.css'
import layout from '@/layouts/layout'
import Layout from '@/layouts/layout'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}
