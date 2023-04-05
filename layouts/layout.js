import Footer from "@/components/Footer"
import Head from "next/head"
import Navbar from "@/components/Navbar"

const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>my e-commerce app</title>
        <link rel="icon" href="/cart-shopping.svg" />
    </Head>
 
    <Navbar/>
    <main>
    {children}
    </main>
    <Footer/>
    </>
  )
}
export default Layout