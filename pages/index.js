import Head from 'next/head'
import GuestLayout from '@/components/Layouts/GuestLayout'
export default function Home() {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} site</title>
            </Head>
            <GuestLayout>
                <div className="text-4xl font-bold mb-2">Hi<span className='text-blue-500'>!</span> there,</div>
                <div className="text-2xl font-light">I am <span className='underline font-bold text-orange-600'>Aryabh</span>👋
                <br/><span className='text-xl'>A <u>developer</u> and sometimes <u>UI designer </u> too 🙃.</span></div>
                <div className="border w-1/2 my-2"></div>
                <div className="font-light text-md mb-2">My most commonly used <b>Tech-Stack</b> :</div>
                <div className='border-l-2 mt-3'>
                    <p className='mb-2'><span className='border-2 p-1 rounded border-l-0 rounded-l-none my-2 w-[fit-content]'><span className='bg-blue-500 text-white rounded px-1'>case</span> : Backend</span></p>
                    <ul className=''>
                        <li className="before:content-[''] before:w-5 before:border before:absolute before:-ml-6 before:mt-2 ml-6 mt-4">
                            <p className='mb-2'>if <code className='border px-1 rounded mt-2 w-min'>API</code>  🦾 then:</p>
                            <span className='mx-1 border p-1 rounded'><span className='bg-teal-500 text-white rounded px-1'>FastAPI</span> - Python</span> 
                            or
                            <span className='mx-1 border p-1 rounded'><span className='bg-neutral-700 text-white rounded px-1'>Fastify</span> - NodeJS</span> 
                            or sometimes
                            <span className='mx-1 border p-1 rounded'><span className='bg-red-600 text-white rounded px-1'>Laravel</span> - PHP</span> 
                        </li>
                        <li className="before:content-[''] before:w-5 before:border before:absolute before:-ml-6 before:mt-2 ml-6 mt-4">
                            <p className='mb-2'>if <code className='border px-1 rounded mt-2 w-min'>Automation / Testing</code>  🤖 then:</p>
                            <span className='mx-1 border p-1 rounded'><span className='bg-green-600 text-white rounded px-1'>Selenium</span> - Python</span> 
                            or
                            <span className='mx-1 border p-1 rounded'><span className='bg-neutral-700 text-white rounded px-1'>Cypress</span> - NodeJS</span> 
                            and learning
                            <span className='mx-1 border p-1 rounded'><span className='bg-sky-800 text-white rounded px-1'>PHPUnit</span> - PHP</span> 
                        </li>
                        <li className="before:content-[''] before:w-5 before:border before:absolute before:-ml-6 before:mt-2 ml-6 mt-4">
                            <p className='mb-3'>for <code className='border p-1 rounded mt-2 w-min'>["Database","Caching","ORM"]</code>  🤖 :</p>
                            <ul>
                                <li className='mb-2'>
                                    <span className='mx-1 border px-1 rounded'>Database</span> : <span className='bg-green-500 text-white rounded px-1'>MongoDB</span> or <span className='bg-sky-700 text-white rounded px-1'>MariaDB(Mysql)</span>
                                </li>
                                <li className='mb-2'>
                                    <span className='mx-1 border px-1 rounded'>Caching</span> : <span className='bg-red-700 text-white rounded px-1'>Redis</span> or <span className='bg-sky-700 text-white rounded px-1'>Memcache</span>
                                </li>
                                <li className='mb-2'>
                                    <span className='mx-1 border px-1 rounded'>ORMs ?</span> : Sqlachemy if Python; Mongoose if working with Mongodb in Python or JS
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="border w-1/3 my-2"></div>
                <div className='border-l-2 mt-3'>
                    <p className='mb-2'><span className='border-2 p-1 rounded border-l-0 rounded-l-none my-2 w-[fit-content]'><span className='bg-blue-500 text-white rounded px-1'>case</span> : Frontend</span></p>
                    <ul className=''>
                        <li className="before:content-[''] before:w-5 before:border before:absolute before:-ml-6 before:mt-2 ml-6 mt-4">
                            <p className='mb-2'>for <code className='border px-1 rounded mt-2 w-min'>Framework</code>  🎩 :</p>
                            <span className='mx-1 border p-1 rounded'><span className='bg-black text-white rounded px-1'>Next.js</span> - JS</span> 
                            or
                            <span className='mx-1 border p-1 rounded'><span className='bg-cyan-500 text-white rounded px-1'>ReactJS</span> - JS</span> 
                        </li>
                        <li className="before:content-[''] before:w-5 before:border before:absolute before:-ml-6 before:mt-2 ml-6 mt-4">
                            <p className='mb-2'>for <code className='border px-1 rounded mt-2 w-min'>Styling</code>  🖌:</p>
                            <span className='mx-1 border p-1 rounded'><span className='bg-teal-600 text-white rounded px-1'>TailwindCSS</span> - CSS</span> 
                            or
                            <span className='mx-1 border p-1 rounded'><span className='bg-purple-600 text-white rounded px-1'>Bootstrap</span> - CSS</span> 
                        </li>
                        <li className="before:content-[''] before:w-5 before:border before:absolute before:-ml-6 before:mt-2 ml-6 mt-4">
                            <p className='mb-2'>for <code className='border px-1 rounded mt-2 w-min'>Bundling / Compiling / Task Automation</code>  ⚙️:</p>
                            <span className='mx-1 border p-1 rounded'><span className='bg-teal-600 text-white rounded px-1'>GulpJS</span></span> 
                            or
                            <span className='mx-1 border p-1 rounded'><span className='bg-orange-700 text-white rounded px-1'>PostCSS</span></span> 
                            or
                            <span className='mx-1 border p-1 rounded'><span className='bg-sky-600 text-white rounded px-1'>Webpack</span></span> 
                            and more...
                        </li>
                    </ul>
                </div>
            </GuestLayout>
        </>
    )
}
