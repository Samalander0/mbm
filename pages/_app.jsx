import '../styles/globals.scss'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }) {
  
  const userData = useUserData();
  
  return (
    <UserContext.Provider value={userData}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      <script async src="https://zink.tips/zwc.js?rid=630bc5b9a7adfec34ded9ccf&c=gold"></script>
    </UserContext.Provider>
  )
}

export default MyApp
