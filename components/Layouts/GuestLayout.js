import Head from 'next/head'
import {BsGithub, BsMoonStars, BsSunFill} from 'react-icons/bs'
import {FcGlobe} from 'react-icons/fc'
import ApplicationLogo from '../../components/ApplicationLogo'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect,useState } from 'react'
const GuestLayout = ({ children }) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])
    if (!mounted) return null
    return (
        <div>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} site</title>
            </Head>
            <div className="container mx-auto dark:bg-slate-900">
                <div className="flex sticky top-5 shadow-lg dark:shadow-2xl dark:shadow-slate-700 p-4 bg-white dark:bg-slate-800 rounded-lg border">
                    <div className="mr-auto">
                        <Link href="/">
                            <button  className='mr-2 py-1 px-2 shadow dark:hover:shadow hover:shadow-lg hover:shadow-orange-200 hover:bg-orange-300 dark:hover:text-slate-900 dark:active:text-white active:bg-orange-500 active:text-white duration-200 hover:rounded hover:border-transparent dark:border-blue-500 dark:hover:border-transparent border-b-2'>About Me</button>
                        </Link>
                        <Link href="/projects">
                            <button  className='mr-2 py-1 px-2 shadow dark:hover:shadow hover:shadow-lg hover:shadow-emerald-200 hover:bg-emerald-300 dark:hover:text-slate-900 dark:active:text-white active:bg-emerald-500 active:text-white duration-200 hover:rounded hover:border-transparent dark:border-blue-500 dark:hover:border-transparent border-b-2'>Projects</button>
                        </Link>
                        <Link href="/articles">
                            <button  className='mr-2 py-1 px-2  duration-200 rounded dark:border-transparent border-b-2' disabled>Articles -Coming Soon!</button>
                        </Link>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        {theme == 'light' ? 
                        <button onClick={() => setTheme('dark')} className="p-2 bg-slate-700 shadow-lg shadow-slate-400 active:shadow-inner active:bg-slate-500 text-white rounded-2xl duration-200 hover:shadow-slate-300"><BsMoonStars/></button> : 
                        <button onClick={() => setTheme('light')} className="p-2 bg-orange-500 active:shadow-inner active:bg-orange-400 text-white rounded-2xl duration-200 hover:shadow-md hover:shadow-orange-600"><BsSunFill/></button>  }
                        <button className='p-2 text-white bg-purple-700 shadow-lg dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-purple-600 shadow-purple-400 active:shadow-inner active:bg-purple-500 rounded-2xl duration-200 hover:shadow-purple-200'><BsGithub/></button>
                    </div>
                </div>
                <div className="flex items-center h-[90vh] p-4">
                    <div className="w-1/2">
                        {children}
                    </div>
                    <div className="w-1/2 flex items-center flex-col">
                    {theme == 'light' ? 
                        <ApplicationLogo className="block h-50 w-full fill-white" /> :
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
