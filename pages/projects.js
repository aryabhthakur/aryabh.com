import { DefaultLayout } from "../components/Layouts/DefaultLayout"
import {FaEye, FaGithub} from "react-icons/fa"
import Link from "next/link";
import Head from "next/head";
export default function Projects(props) {
    return (<>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} Projects</title>
            </Head>
    <DefaultLayout>
        {props.notFound == true ? <>No Projects</> : <>
        <div className="flex flex-col gap-4 w-fit">
        <div className="flex flex-col gap-4">
            <div className="text-xl font-light border-b w-fit"><span className="font-semibold text-emerald-500">Personal</span> Repos</div>
            <div className="flex flex-row justify-items-stretch gap-4">
                {
                Object.entries(props.personalRepodata).map((value,index)=>{
                    if (value[1].archived != true)
                    return(<>
                        <div key={index}>
                            <div className="border mb-2 shadow-lg shadow-slate-100 hover:border-gray-300 rounded-lg p-2 hover:scale-105 hover:shadow-2xl cursor-pointer duration-100">
                                <div>
                                    <Link passHref href={value[1].homepage}>
                                        <button className="float-right duration-150 text-gray-500 hover:text-gray-700 hover:scale-110 ml-1"><FaEye></FaEye></button>
                                    </Link>
                                    <Link passHref href={value[1].html_url}>
                                        <button className="float-right duration-150 text-gray-500 hover:text-gray-700 hover:scale-110"><FaGithub></FaGithub></button>
                                    </Link>
                                    <span className="font-medium">{value[1].full_name}</span>
                                    <div className="text-sm text-gray-400">{value[1].description}</div>
                                </div>
                            </div>
                            <span className="text-gray-400 text-sm"><span className="text-blue-500 font-medium">#</span> Related Topics</span>
                            <div className="mt-1 flex flex-row gap-2">
                                {
                                    Object.entries(value[1].topics).map((Tvalue,Tindex)=>{
                                        if (Tindex < 3)
                                        return(<>
                                        <span className="bg-gray-100 text-[13px] px-2 border rounded-lg">{Tvalue[1]}</span>
                                        </>)
                                    })
                                }
                            </div>
                        </div>
                    </>)
                })
                }
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="text-xl font-light border-b w-fit"><span className="font-semibold text-pink-500">Organizational</span> Repos <span></span></div>
            <div className="flex flex-col gap-4">
                {
                Object.entries(props.coinPascalRepodata).map((value,index)=>{
                    if (value[1].archived != true)
                    return(<>
                    <div key={index}>
                        <div className="border mb-2 shadow-lg shadow-slate-100 hover:border-gray-300 rounded-lg p-2 hover:scale-105 hover:shadow-2xl cursor-pointer duration-100">
                            <div>
                                <Link passHref href={value[1].homepage}>
                                    <button className="float-right duration-150 text-gray-500 hover:text-gray-700 hover:scale-110 ml-1"><FaEye></FaEye></button>
                                </Link>
                                <Link passHref href={value[1].html_url}>
                                    <button className="float-right duration-150 text-gray-500 hover:text-gray-700 hover:scale-110"><FaGithub></FaGithub></button>
                                </Link>
                                <span className="font-medium">{value[1].full_name}</span>
                                <div className="text-sm text-gray-400">{value[1].description}</div>
                            </div>
                        </div>
                        <span className="text-gray-400 text-sm"><span className="text-blue-500 font-medium">#</span> Related Topics</span>
                            <div className="mt-1 flex flex-row gap-2">
                                {
                                    Object.entries(value[1].topics).map((Tvalue,Tindex)=>{
                                        if (Tindex < 3)
                                        return(<>
                                        <span className="bg-gray-100 text-[13px] px-2 border rounded-lg">{Tvalue[1]}</span>
                                        </>)
                                    })
                                }
                            </div>
                    </div>
                    </>)
                })
                }
            </div>
        </div>
        </div>
        </>}
        </DefaultLayout></>)
}

export async function getStaticProps() {
    const personalRepores = await fetch(`https://api.github.com/users/aryabhthakur/repos`)
    const personalRepodata = await personalRepores.json()
    const coinPascalRepores = await fetch(`https://api.github.com/orgs/coinpascal/repos`)
    const coinPascalRepodata = await coinPascalRepores.json()
    if (!personalRepodata || !coinPascalRepodata) {
      return {
        notFound: true,
      }
    }
    return {
      props: {personalRepodata,coinPascalRepodata}, // will be passed to the page component as props
    }
  }