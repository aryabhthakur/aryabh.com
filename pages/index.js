import Head from 'next/head'
import ApplicationLogo from '../components/ApplicationLogo'
import { BsGithub} from 'react-icons/bs'
import { HiOutlineExternalLink} from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from "framer-motion"
import {FcExternal, FcHome, FcLink } from 'react-icons/fc'
import { Disclosure } from '@headlessui/react'
import { DefaultLayout } from '../components/Layouts/DefaultLayout'
import * as MyTechStack from '../data/myTechStack.json'
import Link from 'next/link'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useState } from 'react'
export default function Home(){
    const TechStack = useState(MyTechStack)
    const [showTechStack, setShowTechStack] = useState(false)
    const variants = {
        hidden: { opacity: 0, x: 0, y: -200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0.5, x: -200, y: 0 },
    }
    return (
        <>
        <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} site</title>
            </Head>
        <DefaultLayout>
        <div className='container mx-auto -z-10 absolute w-full h-full'>
            <div className="h-10 w-14">Python</div>
        </div>
        <div className="container mx-auto dark:bg-slate-900">
                <div className="flex items-center justify-center h-screen w-full flex-col p-4 xl:mt-0 lg:mt-12 md:mt-24">
                    <div className="flex flex-row items-center gap-5 justify-center">
                        {showTechStack ? 
                        <>
                        <motion.main
                        variants={variants} // Pass the variant object into Framer Motion 
                        initial="hidden" // Set the initial state to variants.hidden
                        animate="enter" // Animated state to variants.enter
                        exit="exit" // Exit state (used later) to variants.exit
                        transition={{ type: 'linear' }} // Set the transition to linear
                        className=""
                        >
                        <button onClick={()=>{setShowTechStack(false)}} className='bg-pink-700 text-white flex flex-row rounded-b-none ml-8 gap-1 pl-1 pr-2 items-center font-medium text-sm rounded-md shadow hover:shadow-pink-300 hover:shadow-lg duration-150'><MdOutlineClose></MdOutlineClose>Close Dialog</button>
                        <div className="bg-white w-96 h-96 shadow-xl shadow-gray-100 border rounded-3xl rounded-b-lg rounded-r-lg relative">
                            <PerfectScrollbar>
                            {
                                TechStack.map(things=>{
                                    if(things.length != 0) 
                                    return(<><div className='flex flex-col gap-2 p-5'>
                                        {
                                            Object.entries(things).map((val,index)=>{
                                                if (val[0] != 'default')
                                                return(<><div className='flex flex-col gap-2 border-b pb-3'>
                                                    <div key={index} className='border-b-2 order-gray-200 w-fit'>{val[0]}</div>
                                                    <div className="flex flex-row gap-2 whitespace-nowrap flex-wrap">
                                                    {
                                                        Object.entries(val[1]).map((valu,indexu)=>{
                                                            if (valu.length != 0)
                                                            return(<>
                                                            <div>
                                                            <Disclosure>
                                                            <Disclosure.Button className="px-2 rounded-lg bg-gray-100 text-sm" key={indexu}>
                                                                {valu[0]}
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="text-gray-500 block border px-2 py-1 mt-2 rounded-lg">
                                                            <div className="flex flex-row gap-2">
                                                            {valu[1].language ? <><span className='text-xs font-medium bg-slate-700 px-1 rounded text-white'>{valu[1].language}</span></>:<></>}
                                                            {valu[1].type ? <><span className='text-xs font-medium bg-emerald-600 px-1 rounded text-white'>{valu[1].type}</span></>:<></>}
                                                            {valu[1].link ? <><a  href={valu[1].link} className='w-fit text-xs font-medium bg-teal-500 px-1 rounded text-white flex flex-row gap-2 items-center'>Link <HiOutlineExternalLink></HiOutlineExternalLink></a></>:<></>}
                                                            </div>
                                                            {valu[1].desc ? <><p className='pt-2 text-sm'>{valu[1].desc}</p></>:<></>}
                                                            </Disclosure.Panel>
                                                            </Disclosure>
                                                            </div>
                                                            </>)
                                                        })
                                                    }
                                                    </div>
                                                </div></>)
                                             })
                                        }
                                        </div></>)
                                })
                            }
                            </PerfectScrollbar>
                            </div>
                        </motion.main>
                        </>
                        :
                        <><ApplicationLogo className="w-96"></ApplicationLogo></>}
                        <div>
                        <div className='text-xl'> <span className='font-light'>I am</span> <span className='font-bold text-orange-500'>Aryabh</span></div>
                        <div className='text-sm my-2 border p-2 rounded-lg'>A <span className='bg-blue-500 font-medium  text-white rounded px-1'>full-stack</span> developer, hailing from <span className='bg-rose-500 font-medium text-white rounded px-1'>India</span></div>
                        <div className="flex flex-row items-center gap-2 w-full">
                            <button onClick={()=>{setShowTechStack(true)}} className='bg-purple-500 text-white font-medium text-sm px-2 rounded-md shadow hover:shadow-purple-300 hover:shadow-lg duration-150'>Tech Stack</button>
                            <div className="w-[1px] h-5 bg-gray-400 rotate-[18deg]"></div>
                            <Link href={'/projects'} passHref><button className='bg-gray-700 text-white font-medium text-sm px-2 rounded-md shadow hover:shadow-gray-300 hover:shadow-lg duration-150'>Code Repos</button></Link>
                            <div className="w-[1px] h-5 bg-gray-400 rotate-[18deg]"></div>
                            <Link href={'/articles'} passHref><button>Things I wrote</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
        </>
    )
}
