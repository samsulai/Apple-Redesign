import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux"
import {store} from '../redux/store'
//import { useImmer } from "use-immer";
import {Toaster} from "react-hot-toast"
function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return(
<SessionProvider session={session}>
      <Provider store={store}>
  
  <Toaster />
<Component {...pageProps} />
  </Provider>
  
    </SessionProvider>
  
)}

export default MyApp
