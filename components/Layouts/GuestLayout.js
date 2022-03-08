import Head from 'next/head'
import {BsGithub, BsMoonStars, BsSunFill} from 'react-icons/bs'
import {FcGlobe,FcFolder,FcAbout} from 'react-icons/fc'
import ApplicationLogo from '../../components/ApplicationLogo'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'

const GuestLayout = ({ children }) => {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    return (
        <div>
            <Head>
                <link rel="prefetch" href="gg_logo.png"/>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} site</title>
                <meta name="title" content="Aryabh's site" />
                <meta name="description" content="This is my (Aryabh's) personal site & portfolio of this things I worked over the years." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.aryabh.com/" />
                <meta property="og:title" content="Aryabh's site"/>
                <meta property="og:description" content="This is my (Aryabh's) personal site & portfolio of this things I worked over the years." />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.aryabh.com/" />
                <meta property="twitter:title" content="Aryabh's site">
                <meta property="twitter:description" content="This is my (Aryabh's) personal site & portfolio of this things I worked over the years." />
                <meta property="twitter:image" content="" /></meta>
            </Head>
            <div className="container mx-auto dark:bg-slate-900">
                <div className="flex sticky top-0 xl:top-5 shadow-lg dark:shadow-2xl dark:shadow-slate-700 p-4 bg-white dark:bg-slate-800 z-50 xl:rounded-lg border">
                    <div className="mr-auto flex gap-2">
                        <Link href="/">
                            <a className={'py-1 px-2 shadow dark:hover:shadow hover:shadow-lg hover:shadow-orange-200 hover:bg-orange-300 dark:hover:text-slate-900 dark:active:text-white active:bg-orange-500 active:text-white duration-200 hover:rounded hover:border-transparent dark:border-blue-500 dark:hover:border-transparent border-b-2 flex w-[fit-content] items-center gap-1'}><FcAbout/>About Me</a>
                        </Link>
                        <Link href="/projects">
                            <a className={'py-1 px-2 shadow dark:hover:shadow hover:shadow-lg hover:shadow-orange-200 hover:bg-orange-300 dark:hover:text-slate-900 dark:active:text-white active:bg-orange-500 active:text-white duration-200 hover:rounded hover:border-transparent dark:border-blue-500 dark:hover:border-transparent border-b-2 flex w-[fit-content] items-center gap-1'}><FcFolder/>Projects</a>
                        </Link>
                        <Link href="">
                            <a  className='mr-2 py-1 px-2 hidden md:inline duration-200 rounded dark:border-transparent border-b-2' disabled>Articles -Coming Soon!</a>
                        </Link>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        {theme == 'light' ? 
                        <button onClick={() => setTheme('dark')} className="p-2 bg-slate-700 shadow-lg shadow-slate-400 active:shadow-inner active:bg-slate-500 text-white rounded-2xl duration-200 hover:shadow-slate-300"><BsMoonStars/></button> : 
                        <button onClick={() => setTheme('light')} className="p-2 bg-orange-500 active:shadow-inner active:bg-orange-400 text-white rounded-2xl duration-200 hover:shadow-md hover:shadow-orange-600"><BsSunFill/></button>  }
                        <button onClick={() => window.open('https://github.com/aryabhthakur/')} className='p-2 text-white bg-purple-700 shadow-lg dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-purple-600 shadow-purple-400 active:shadow-inner active:bg-purple-500 rounded-2xl duration-200 hover:shadow-purple-200'><BsGithub/></button>
                    </div>
                </div>
                <div className="flex items-center h-[90vh] flex-col md:flex-row p-4 xl:mt-0 lg:mt-12 md:mt-24">
                    <div className="w-full md:w-1/2 order-2 md:order-1 pb-8 xl:pb-0">
                        {children}
                    </div>
                    <div className="w-full md:w-1/2 flex items-center flex-col order-1 md:order-2 mb-8 md:mb-0">
                    {theme == 'light' ? 
                        <ApplicationLogo className="block h-28 md:h-full w-full fill-white" /> :
                        <img src="/gg_logo.png" alt="" /> }
                        <div className="mt-2 flex justify-center gap-3">
                            <a href="https://github.com/aryabhthakur" target="_blank" rel="noopener noreferrer"><BsGithub className='inline text-2xl mr-1'/><span className='underline'>aryabhthakur</span></a>
                            <a href="https://www.google.com/maps/place/India/" target="_blank" rel="noopener noreferrer"><FcGlobe className='inline text-2xl mr-1'/><span className='underline'>From <b>India</b></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestLayout
