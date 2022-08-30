import '../styles/globals.scss'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    <script async src="https://zink.tips/zwc.js?rid=630bc5b9a7adfec34ded9ccf&c=gold"></script>
  </>)
}

export default MyApp
