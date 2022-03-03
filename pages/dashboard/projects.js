import AppLayout from '../../components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '../../hooks/auth'
import {useState,Fragment} from 'react'
import Input from '../../components/Input'
import { Dialog, Transition } from '@headlessui/react'
import {useSWRConfig} from 'swr'
import {BiEditAlt} from 'react-icons/bi'
import {BsFolderPlus} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import {HiOutlineRefresh} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import { WithContext as ReactTags } from 'react-tag-input';
import { getDataCustom } from '../../hooks/getData'
import { submitFormCustom,delDataReq } from '../../hooks/submitForm'

const Projects = () => {
    const { mutate } = useSWRConfig()

    // Get Authenticated Users
    const { user } = useAuth({ middleware: 'auth' })

    // Dialog Status
    let [isOpen, setIsOpen] = useState(false)

    // Project Model Fields
    let [project_id, setProjectID] = useState('')
    let [project_name, setProject_name] = useState('')
    let [project_desc, setProject_desc] = useState('')
    let [project_github_url, setProject_github_url] = useState('')
    let [project_package_manager, setProject_package_manager] = useState('')
    let [project_package_manager_url, setProject_package_manager_url] = useState('')
    let [project_changelog, setProject_changelog] = useState('')
    let [project_version, setProject_version] = useState('')
    let [project_created_on, setProject_created_on] = useState('')
    let [project_last_updated_on,setProject_last_update_on] = useState('')

    // Get All Frameworks
    let [framework_list, setapiDataFramework] = useState([])
    getDataCustom('get_frameworks','frameworks',setapiDataFramework)

    // Get All Projects
    let [project_list, setapiDataProjects] = useState([])
    getDataCustom('get_projects','projects',setapiDataProjects,true)

    // Get All Languages
    let [language_list, setapiDataLanguage] = useState([])
    getDataCustom('get_languages','languages',setapiDataLanguage)

    // Editormode : to make Create / Update / Delete req
    let [editorMode, setEditorMode] = useState('')

    // To load List with a offset
    let [offset, setOffset] = useState(0)

    // Perform Delete Request
    const del = async project => {
        setProjectID(project.id)
        setProject_name(project.name)
        setEditorMode('delete') // Set Editormode as Delete
        setIsOpen(true) // Open Dialog
    }

    // Perform Update Request
    const update = async project => {
        setIsOpen(true)
        setProjectID(project.info.id)
        setProject_name(project.info.name)
        setProject_github_url(project.info.github_url)
        setProject_desc(project.info.desc)
        setProject_package_manager(project.info.package_manager)
        setProject_package_manager_url(project.info.package_manager_url)
        setProject_version(project.info.version)
        setProject_changelog(project.info.changelog)
        setProject_created_on(project.info.created_on)
        setProject_last_update_on(project.info.last_updated_on)
        const elang = []
        project.related_languages.map(language=>{
          var ldata = {
            rel_id:language.relation_id,
            id: String(language.id),
            text: language.text,
            className: language.classname
          };
          elang.push(ldata)
        })
        elang.forEach(lang=>{
          setLanguagesTags([...language_tags, lang])
        })

        const efang = []
        project.related_frameworks.map(framework=>{
          var fdata = {
            rel_id:framework.relation_id,
            id: String(framework.id),
            text: framework.text,
            className: framework.classname
          };
          efang.push(fdata)
        })
        efang.forEach(framework=>{
          setFrameworksTags([...framework_tags, framework])
        })
        setEditorMode('update')
    }

    // Selected Languages tags in the Editor Form
    let [language_tags, setLanguagesTags] = useState([])

    // Show languages suggestions from language_list, requested earlier
    const Languages_suggestions = language_list.map((language) => {
        return {
          id: String(language.id),
          text: language.text,
          className: language.class
        };
      });


      const languages_tags_handleDelete = i => {
        if (editorMode == 'update') {
          if (confirm("You sure you want to remove "+language_tags.at(i).text+" from "+project_name+"'s Relation?") == true) {
            delDataReq('delete',language_tags.at(i).rel_id,'relations',console.log)
            setLanguagesTags(language_tags.filter((tag, index) => index !== i));
          }
        }
      };
      const languages_tags_handleAddition = tag => {
        setLanguagesTags([...language_tags, tag]);
        if (editorMode == 'update') {
          if (confirm("You sure you want to add "+tag.text+" #"+tag.id+" from "+project_name+"'s Relation?") == true) {
            let create_req = {
              'parent': project_id,
              'parent_type': 'project',
              'child':tag.id,
              'relation_type': 'language',
              'author_id': user?.id
            }
            submitFormCustom('create',create_req,'relations',console.log)
          }
        }
      };

    let [framework_tags, setFrameworksTags] = useState([])
    const Frameworks_suggestions = framework_list.map((framework) => {
        return {
          id: String(framework.id),
          text: framework.text,
          className: framework.className
        };
      });
      const frameworks_tags_handleAddition = tag => {
        setFrameworksTags([...framework_tags, tag]);
        if (editorMode == 'update') {
          if (confirm("You sure you want to add "+tag.text+" #"+tag.id+" from "+project_name+"'s Relation?") == true) {
            let create_req = {
              'parent': project_id,
              'parent_type': 'project',
              'child':tag.id,
              'relation_type': 'framework',
              'author_id': user?.id
            }
            submitFormCustom('create',create_req,'relations',console.log)
          }
        }
      };
      const frameworks_tags_handleDelete = i => {
        if (editorMode == 'update') {
          if (confirm("You sure you want to remove "+framework_tags.at(i).text+" from "+project_name+"'s Relation?") == true) {
            delDataReq('delete',framework_tags.at(i).rel_id,'relations',console.log)
            setFrameworksTags(framework_tags.filter((tag, index) => index !== i));
          }
        }
      };

    // Prepare Form Data to send on Request
    let formdata = {
      'id': project_id,
      'name': project_name,
      'desc': project_desc,
      'github_url': project_github_url,
      'package_manager': project_package_manager,
      'package_manager_url': project_package_manager_url,
      'changelog': project_changelog,
      'version': project_version,
      'author_id': user?.id,
      'created_on': project_created_on,
      'last_updated_on': project_last_updated_on,
      'related_frameworks': framework_tags.length == 0 ? [] : framework_tags.map(c => c.id),
      'related_languages': language_tags.length == 0 ? [] :  language_tags.map(c => c.id)
    }

    function afterFinished_req() {
      setIsOpen(false)
      setTimeout(() => {
        setProjectID('')
        setProject_name('')
        setProject_changelog('')
        setProject_desc('')
        setProject_github_url('')
        setProject_created_on('')
        setProject_last_update_on('')
        setProject_package_manager('')
        setProject_package_manager_url('')
        setFrameworksTags([])
        setLanguagesTags([])
        setProject_version('')
        setProject_changelog('')
      }, 1000);
      setEditorMode('')
      mutate('get_projects')
    }
    return (
        <AppLayout
            header={
                <div className='flex items-center'>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Projects
                </h2>
                <button onClick={()=>{setIsOpen(true),setEditorMode('create')}} 
                className='ml-auto flex items-center gap-2 bg-orange-500 px-2 py-1 text-white shadow-lg 
                rounded shadow-orange-100 hover:shadow-none active:bg-orange-400 duration-150'>
                  <BsFolderPlus/> Add Project</button>
            </div>
            }>

            <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME}  - Projects</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-white border shadow-lg shadow-gray-200 sm:rounded-lg">
                        <div className="px-6 py-3 border-b flex items-center">
                        All Projects <button onClick={()=>mutate('get_projects')} 
                className='ml-2 flex items-center gap-1 bg-indigo-500 p-1 text-white shadow-lg 
                rounded-xl shadow-indigo-100 hover:shadow-none active:bg-indigo-400 duration-150'>
                  <HiOutlineRefresh/></button>
                        </div>
                        <div className="flex flex-col flex-wrap w-full p-6 md:p-5 gap-8 justify-center">
                        {project_list.length == 0 ? <div className="text-center">No Projects...</div> : project_list.map(project=>(
                          <div key={project.info.id} className={'w-full h-10 shadow flex items-center p-2 border rounded-md '}>
                              <span className={'block border px-2 bg-white shadow -ml-5 mr-2 rounded-lg '} ># {project.info.id}</span>
                              <span className=''>{project.info.name}</span>
                                <div className="ml-auto">
                                  <button onClick={()=>update(project)} className='group bg-blue-100 hover:bg-blue-200 p-1 rounded-md duration-100 mr-2'><BiEditAlt className='text-blue-500' /></button>
                                  <button onClick={()=>del(project)} className='group bg-red-100 hover:bg-red-200 p-1 rounded-md duration-100'><AiOutlineDelete className='text-red-500' /></button>
                                </div>
                          </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={()=>{
            return
          }}
          readOnly
        >
          <div className="min-h-screen px-4 bg-black/10 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <form onSubmit={(event)=>{event.preventDefault(),console.log(formdata),submitFormCustom(editorMode,formdata,'projects',afterFinished_req)}} className="inline-block w-full text-left max-w-xl p-6 my-8 align-middle transition-all transform bg-white shadow-xl shadow-gray-300 rounded-2xl">
              <button type='button' onClick={()=>{setIsOpen(false),setTimeout(() => {afterFinished_req()}, 1000);}} className='float-right bg-slate-100 p-1 rounded-xl -mt-3 -mr-3 hover:bg-slate-200 duration-200 active:bg-slate-300 active:shadow-inner active:scale-95'><MdOutlineClose className='text-2xl'/></button>
                <Dialog.Title
                  as="span"
                  className="text-md font-medium leading-6 border-b text-gray-900"
                >
                  {
                  editorMode == 'delete' ? <></>:<>Fill the Details</>}
                </Dialog.Title>
                {
                  editorMode == 'delete' ? <>
                  Are you sure, you want to delete <b>{project_name}</b> from projects? </> : 
                  <div className="mt-2 flex flex-wrap flex-row justify-around">
                    <div className='w-1/2 pr-4'>
                    <label htmlFor="framework" className='text-sm text-gray-400'>Enter Project Name</label>
                      <Input
                        id="framework"
                        type="text"
                        value={project_name}
                        className="border w-full"
                        onChange={event => setProject_name(event.target.value)}
                        required
                        autoFocus
                        placeholder="Project Name"
                    />
                    </div>
                    <div className='w-1/2'>
                      <label htmlFor="classname" className='text-sm text-gray-400'>Enter Project Github URL</label>
                      <Input
                        id="classname"
                        type="text"
                        value={project_github_url}
                        className="border w-full"
                        onChange={event => setProject_github_url(event.target.value)}
                        required
                        autoFocus
                        placeholder="https://github.com/aryabhthakur/reponame"
                    />
                    </div>
                    <div className='w-1/2 mt-3 pr-4'>
                      <span className='text-sm text-gray-400'>Related Languages</span>
                      <ReactTags
                        classNames={{
                            tags:'w-full',
                            tagInputField:'border w-full rounded-md mt-1 h-9 px-2 focus:outline-0 shadow-sm border-gray-300 focus:border-cyan-300 focus:ring focus:ring-cyan-200 focus:ring-opacity-50',
                            tag:'bg-cyan-500 text-white rounded-full px-2 py-0.5',
                            selected:'flex flex-wrap flex-row gap-1 min-w-[fit-content] max-w-[80%] rounded-lg',
                            suggestions:'w-inherit mt-2 p-1 shadow-sm rounded border duration-150 cursor-pointer',
                            activeSuggestion:'bg-gray-100 shadow-sm rounded pl-1',
                            remove:'p-1 py-0 text-cyan-500 leading-none	bg-white rounded-lg ml-1 -mr-1 hover:bg-cyan-500 hover:text-white duration-150 active:bg-cyan-700'
                        }}
                        tags={language_tags}
                        suggestions={Languages_suggestions}
                        handleDelete={languages_tags_handleDelete}
                        handleAddition={languages_tags_handleAddition}
                        handleDrag={null}
                        inputFieldPosition="bottom"
                        autocomplete
                        placeholder='Type Language Name'
                        />
                    </div>
                    <div className='w-1/2 mt-3'>
                      <span className='text-sm text-gray-400'>Related Frameworks</span>
                      <ReactTags
                        classNames={{
                            tags:'w-full',
                            tagInputField:'border w-full rounded-md mt-1 h-9 px-2 focus:outline-0 shadow-sm border-gray-300 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50',
                            tag:'bg-teal-500 text-white rounded-full px-2 py-0.5',
                            selected:'flex flex-wrap flex-row gap-1 min-w-[fit-content] max-w-[80%] rounded-lg',
                            suggestions:'w-inherit mt-2 p-1 shadow-sm rounded border duration-150 cursor-pointer',
                            activeSuggestion:'bg-gray-100 shadow-sm rounded pl-1',
                            remove:'p-1 py-0 text-teal-500 leading-none	bg-white rounded-lg ml-1 -mr-1 hover:bg-teal-500 hover:text-white duration-150 active:bg-teal-700'
                        }}
                        tags={framework_tags}
                        suggestions={Frameworks_suggestions}
                        handleDelete={frameworks_tags_handleDelete}
                        handleAddition={frameworks_tags_handleAddition}
                        handleDrag={null}
                        inputFieldPosition="inline"
                        autocomplete
                        placeholder='Type Framework Name'
                        />
                    </div>
                    <div className='w-full mt-3'>
                      <label htmlFor="project_desc" className='text-sm text-gray-400'>Enter Project Description</label>
                      <textarea onChange={event => setProject_desc(event.target.value)}
                      value={project_desc}
                       className='box-border border w-full rounded-md mt-1 h-20 px-2 focus:outline-0 shadow-sm border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50' id="">
                       </textarea>
                    </div>
                    <div className='w-1/2 pr-4 mt-3'>
                    <label htmlFor="framework" className='text-sm text-gray-400'>Select Package Manager</label>
                    <select name="package_manager" id="package_manager" className='border w-full bg-white rounded-md h-9 px-2 focus:outline-0 shadow-sm border-gray-300 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50'
                    value={project_package_manager} onChange={event => setProject_package_manager(event.target.value)}>
                        <option value="">Select Package Manager</option>
                        <option value="0">NPM</option>
                        <option value="1">Pypi</option>
                        <option value="2">Packagist</option>
                        <option value="3">Crates</option>
                        <option value="4">Github</option>
                    </select>
                    </div>
                    <div className='w-1/2 mt-3'>
                      <label htmlFor="classname" className='text-sm text-gray-400'>Enter Package Manager URL</label>
                      <Input
                        id="classname"
                        type="text"
                        value={project_package_manager_url}
                        className="border w-full"
                        onChange={event => setProject_package_manager_url(event.target.value)}
                        required
                        autoFocus
                        placeholder="https://pypi.org/project/pysolscan/"
                    />
                    </div>
                    <div className='w-1/4 pr-4 mt-3'>
                    <label htmlFor="framework" className='text-sm text-gray-400'>Current Version</label>
                      <Input
                        id="framework"
                        type="number"
                        value={project_version}
                        className="border w-full"
                        onChange={event => setProject_version(event.target.value)}
                        required
                        autoFocus
                        placeholder="Project Name"
                    />
                    </div>
                    <div className='w-3/4 mt-3'>
                      <label htmlFor="classname" className='text-sm text-gray-400'>Enter Project Changelog URL</label>
                      <Input
                        id="classname"
                        type="text"
                        value={project_changelog}
                        className="border w-full"
                        onChange={event => setProject_changelog(event.target.value)}
                        required
                        autoFocus
                        placeholder=":/reponame/changelog"
                    />
                    </div>
                    <div className='w-1/2 pr-4 mt-3'>
                    <label htmlFor="framework" className='text-sm text-gray-400'>Project Started on?</label>
                      <Input
                        id="framework"
                        type="text"
                        value={project_created_on}
                        className="border w-full"
                        onChange={event => setProject_created_on(event.target.value)}
                        required
                        autoFocus
                        placeholder="2013-07-04"
                    />
                    </div>
                    <div className='w-1/2 mt-3'>
                      <label htmlFor="classname" className='text-sm text-gray-400'>Project Last Updated on?</label>
                      <Input
                        id="classname"
                        type="text"
                        value={project_last_updated_on}
                        className="border w-full"
                        onChange={event => setProject_last_update_on(event.target.value)}
                        required
                        autoFocus
                        placeholder="2013-07-04"
                    />
                    </div>
                  </div>
                }
                <div className="mt-4">
                {editorMode == 'delete' ? 
                <button
                type="button"
                onClick={()=>delDataReq(editorMode,project_id,'projects',afterFinished_req)}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Yes, delete.
              </button>
                  :
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  >
                    Save
                  </button>
              }
                </div>
              </form>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
        </AppLayout>
    )
}

export default Projects
