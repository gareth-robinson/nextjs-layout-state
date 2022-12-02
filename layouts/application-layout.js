import Head from 'next/head'
import { CardDataContextProvider } from '../context/card-data'
import SidebarNav from '../components/sidebar-nav';

export default function ApplicationLayout({ children }) {
  return (
    <CardDataContextProvider>
      <Head>
        <title>Demo Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <SidebarNav/>
        {children}
      </div>
    </CardDataContextProvider>
  )
}