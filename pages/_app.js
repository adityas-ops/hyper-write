import Header from '@/components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
      <div className='mt-[4.5rem]'>
      <Component {...pageProps} />
      </div>
    </>
  )
}
