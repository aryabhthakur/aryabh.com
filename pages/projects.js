import Head from 'next/head'
import { getDataCustom } from '../hooks/getData'
import {useState,useEffect} from 'react'
import {BsGithub} from 'react-icons/bs'
import GuestLayout from '../components/Layouts/GuestLayout'

export default function projects() {
    // Get All Projects
    let [project_list, setapiDataProjects] = useState([])
    getDataCustom('get_projects','projects',setapiDataProjects,true)

    useEffect(()=>{
        if (project_list.length != 0) {
            const menuLangs = [...new Set(project_list.map((project) => project.related_languages))];
            const menuFrameworks = [...new Set(project_list.map((project) => project.related_frameworks))];
        }
    },[project_list])

    const filterItem = (curcat) => {
        if (project_list.length != 0) {
            const newItem = project_list.filter((newVal) => {
                return newVal.related_languages === curcat;
              });
            setapiDataProjects(newItem);
        }
      };

    return (<>
            <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} Projects</title>
            </Head>
        <GuestLayout>
        <div className='mb-2'>Here's some of <span className='underline font-bold text-xl ml-1'>My Projects</span></div>
            {project_list.length == 0 ? 'No Projects...' : project_list.map(project=>(
                <div key={project.info.id} className={'w-full md:w-1/2 shadow-2xl shadow-gray-200 p-2 border-2 rounded-md'}>
                    <div className='flex'>
                        <div className='mr-auto'>{project.info.name}</div>
                        <div className="ml-auto"><a href={project.info.github_url} className="flex items-center gap-1 border px-1 rounded-lg hover:bg-neutral-800 hover:text-white hover:border-black duration-200 hover:shadow-lg hover:shadow-gray-300 active:shadow-inner" target="_blank" rel="noopener noreferrer"><BsGithub/>Repo</a></div>
                    </div>
                    <div className='text-gray-400'>{project.info.desc}</div>
                    {project.related_languages.length == 0 ? '' : <div className="flex mt-2">
                    {project.related_languages.map(rel_lang =>(
                        <div key={rel_lang.id} className="bg-blue-500 text-white text-sm px-2 rounded-lg">{rel_lang.text}</div>
                    ))}
                        </div>}
                    {project.related_frameworks.length == 0 ? '' : <div className="flex mt-2">
                        {project.related_languages.map(rel_framework =>(
                            <div key={rel_framework.id} className="bg-blue-500 text-white text-sm px-2 rounded-lg">{rel_framework.text}</div>
                        ))}
                            </div>}
                </div>
                ))}
        </GuestLayout>  
    </>)
}