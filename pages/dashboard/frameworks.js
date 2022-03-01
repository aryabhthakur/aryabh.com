import AppLayout from '../../components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '../../hooks/auth'
import {useState,Fragment} from 'react'
import Input from '../../components/Input'
import { Dialog, Transition,Listbox } from '@headlessui/react'
import {useSWRConfig} from 'swr'
import {BiEditAlt,BiLayerPlus} from 'react-icons/bi'
import {AiOutlineDelete,AiFillCheckCircle} from 'react-icons/ai'
import {HiSelector,HiOutlineRefresh} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import { getDataCustom } from '../../hooks/getData'
import { submitFormCustom,delDataReq } from '../../hooks/submitForm'

const Frameworks = () => {
    const { mutate } = useSWRConfig()

    // Get Authenticated Users
    const { user } = useAuth({ middleware: 'auth' })

    // Dialog Status
    let [isOpen, setIsOpen] = useState(false)

    // Editormode : to make Create / Update / Delete req
    let [editorMode, setEditorMode] = useState('')

    // Framework Model Fields
    let [framework_id, setFrameworkID] = useState('')
    let [framework_name, setFrameworkName] = useState('')
    let [framework_classname, setFrameworkClassname] = useState('')
    let [framework_main_lang, setFrameworkMainLang] = useState('')

    // To load List with a offset
    let [offset, setOffset] = useState(0)

    // Perform Delete Request
    const del = async framework =>{
      setIsOpen(true)
      setFrameworkID(framework.id)
      setFrameworkName(framework.text)
      setEditorMode('delete')
    }

    // Perform Update Request
    const update = async framework =>{
      setFrameworkID(framework.info.id)
      setFrameworkName(framework.info.text)      
      setFrameworkClassname(framework.info.classname)   
      setFrameworkMainLang(framework.related_language)   
      setIsOpen(true)
      setEditorMode('update')
    }

    // Get All Frameworks
    let [framework_list, setapiDataFramework] = useState([])
    getDataCustom('get_frameworks','frameworks',setapiDataFramework,true)

    // Get All Languages
    let [language_list, setapiDataLanguage] = useState([])
    getDataCustom('get_languages','languages',setapiDataLanguage)

    // Prepare Form Data to send on Request
    let formdata = {
      'id': framework_id,
      'text': framework_name,
      'classname': framework_classname,
      'main_language': framework_main_lang.id,
      'author_id': user?.id
    }

    function afterFinished_req() {
      setIsOpen(false)
      setTimeout(() => {
        setFrameworkID('')
        setFrameworkClassname('')
        setFrameworkName('')
        setFrameworkMainLang('')
      }, 1000);
      setEditorMode('')
      mutate('get_frameworks')
    }
    return (
        <AppLayout
        header={
            <div className='flex items-center'>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                  Frameworks
                </h2>
                <button onClick={()=>{setIsOpen(true),setEditorMode('create')}} 
                className='ml-auto flex items-center gap-1 bg-teal-400 px-2 py-1 text-white shadow-lg 
                rounded shadow-teal-100 hover:shadow-none active:bg-teal-500 duration-150'>
                  <BiLayerPlus/> Add Framework</button>
            </div>
        }>

            <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} - Frameworks</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="bg-white border shadow-lg shadow-gray-200 sm:rounded-lg">
                        <div className="px-6 py-3 border-b flex items-center">
                        All Frameworks <button onClick={()=>mutate('get_frameworks')} 
                className='ml-2 flex items-center gap-1 bg-yellow-500 p-1 text-white shadow-lg 
                rounded-xl shadow-yellow-100 hover:shadow-none active:bg-yellow-400 duration-150'>
                  <HiOutlineRefresh/></button>
                        </div>
                        <div className="flex flex-row flex-wrap w-full p-6 md:p-5 gap-8 justify-center">
                        {framework_list.length == 0 ? 'No Frameworks...' : framework_list.map(framework=>(
                          <div key={framework.info.id} className={'w-full md:w-1/4 h-10 shadow flex items-center p-2 border rounded-md '}>
                              <span className={'block border px-2 bg-white shadow -ml-5 mr-2 rounded-lg '} ># {framework.info.id}</span>
                              <span className={'mr-2 w-3 h-3 rounded-lg '+framework.info.classname}></span>
                              <span className=''>{framework.info.text}</span>
                                <div className="ml-auto">
                                  <button onClick={()=>update(framework)} className='group bg-blue-100 hover:bg-blue-200 p-1 rounded-md duration-100 mr-2'><BiEditAlt className='text-blue-500' /></button>
                                  <button onClick={()=>del(framework.info)} className='group bg-red-100 hover:bg-red-200 p-1 rounded-md duration-100'><AiOutlineDelete className='text-red-500' /></button>
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
              <form onSubmit={(event)=>{event.preventDefault(),console.log(formdata),submitFormCustom(editorMode,formdata,'frameworks',afterFinished_req)}} className="inline-block w-full max-w-xs p-6 my-8 text-middle align-middle transition-all transform bg-white shadow-xl shadow-gray-300 rounded-2xl">
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
                  <Input
                      id="frameworkid"
                      type="number"
                      value={framework_id}
                      className="hidden"
                      required
                  />
                  Are you sure, you want to delete <b>{framework_name}</b> from languages? </> : 
                  <div className="mt-2">
                    <div>
                    <label htmlFor="framework" className='text-sm text-gray-400 pl-2'>Enter Framework Name</label>
                      <Input
                        id="framework"
                        type="text"
                        value={framework_name}
                        className="border"
                        onChange={event => setFrameworkName(event.target.value)}
                        required
                        autoFocus
                        placeholder="Framework Name"
                    />
                    </div>
                    <div>
                      <label htmlFor="classname" className='text-sm text-gray-400 pl-2'>Enter CSS Background class</label>
                      <Input
                        id="classname"
                        type="text"
                        value={framework_classname}
                        className="border"
                        onChange={event => setFrameworkClassname(event.target.value)}
                        required
                        autoFocus
                        placeholder="Framework Classname"
                    />
                    </div>
                  <div className="mt-1">
                    <span className='text-sm text-gray-400 pl-2'>Select Language from List</span>
                    <Listbox value={framework_main_lang} onChange={setFrameworkMainLang}>
                      <div className="relative">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border rounded-lg shadow cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                          <span className="block truncate">{framework_main_lang.text}</span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <HiSelector className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute w-full py-1 text-left mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {language_list.map((lang) => (
                              <Listbox.Option
                                key={lang.id}
                                className={({ active }) =>
                                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                    active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                                  }`
                                }
                                value={lang}
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`block truncate ${
                                        selected ? 'font-medium' : 'font-normal'
                                      }`}
                                    >
                                      {lang.text}
                                    </span>
                                    {selected ? (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                        <AiFillCheckCircle className="w-5 h-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                  </div>
                }
                <div className="mt-4">
                {editorMode == 'delete' ? 
                <button
                type="button"
                onClick={()=>delDataReq(editorMode,framework_id,'frameworks',afterFinished_req)}
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

export default Frameworks
