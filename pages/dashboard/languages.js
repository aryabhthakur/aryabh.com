import AppLayout from '../../components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '../../hooks/auth'
import {useState,Fragment} from 'react'
import Input from '../../components/Input'
import { Dialog, Transition } from '@headlessui/react'
import {useSWRConfig} from 'swr'
import {BiEditAlt,BiCommentAdd} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import {HiOutlineRefresh} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import { getDataCustom } from '../../hooks/getData'
import { submitFormCustom,delDataReq } from '../../hooks/submitForm'
import { useTheme } from 'next-themes'

const Languages = () => {
    const { mutate } = useSWRConfig()

    // Get Authenticated Users
    const { user } = useAuth({ middleware: 'auth' })

    // Dialog Status
    let [isOpen, setIsOpen] = useState(false)

    // Language Model Fields
    let [language_id, setLid] = useState('')
    let [lanuage_name, setLname] = useState('')
    let [lanuage_classname, setLcname] = useState('')

    // Editormode : to make Create / Update / Delete req
    let [editorMode, setEditorMode] = useState('')

    // To load List with a offset
    let [offset, setOffset] = useState(0)

    // Perform Delete Request
    const del = async lang => {
      setLid(lang.id)
      setLname(lang.text)
      setEditorMode('delete') // Set Editormode as Delete
      setIsOpen(true) // Open Dialog
    }

    // Perform Update Request
    const update = async lang => {
        setIsOpen(true)
        setLid(lang.id)
        setLname(lang.text)
        setLcname(lang.classname)
        setEditorMode('update') // Set Editormode as Delete
    }
    // Get All Languages
    let [language_list, setapiDataLanguage] = useState([])
    getDataCustom('get_languages','languages',setapiDataLanguage,true)
    
    // Prepare Form Data to send on Request
    let formdata = {
      "id":language_id,
      "text": lanuage_name,
      "classname": lanuage_classname,
      "author_id": user?.id 
    }
    function afterFinished_req() {
      setIsOpen(false)
      setTimeout(() => {
        setLid('')
        setLname('')
        setLcname('')
      }, 1000);
      setEditorMode('')
      mutate('get_languages')
    }

    return (
        <AppLayout
        header={
            <div className='flex'>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Languages
                </h2>
                <button onClick={()=>{setIsOpen(true),setEditorMode('create')}}
                 className='ml-auto flex items-center gap-1 bg-blue-500 px-2 py-1 text-white shadow-lg 
                 rounded shadow-blue-100 hover:shadow-none active:bg-blue-400 duration-150'><BiCommentAdd/>Add Language</button>
            </div>
        }>

            <Head>
                <title>{process.env.NEXT_PUBLIC_APPLICATION_NAME} - Languages</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-900 dark:shadow-slate-900 dark:shadow-2xl dark:border-gray-500 dark:border-2 border shadow-lg shadow-gray-200 sm:rounded-lg">
                        <div className="px-6 py-3 border-b flex items-center">
                        All Languages <button onClick={()=>mutate('get_languages')} 
                className='ml-2 flex items-center gap-1 bg-yellow-500 p-1 text-white shadow-lg 
                rounded-xl shadow-yellow-100 hover:shadow-none active:bg-yellow-400 duration-150'>
                  <HiOutlineRefresh/></button>
                      </div>
                        <div className="flex flex-row flex-wrap w-full p-2 md:p-5 gap-8 justify-center">
                        {language_list.length == 0 ? 'No languages...' : language_list.map(lang=>(
                          <div key={lang.info.id} className={'w-full md:w-1/4 h-10 shadow flex items-center p-2 border rounded-md '}>
                              <span className={'block border px-2 bg-white shadow -ml-5 mr-2 rounded-lg '} ># {lang.info.id}</span>
                              <span className={'mr-2 w-3 h-3 rounded-lg '+lang.info.classname}></span>
                              <span className=''>{lang.info.text}</span>
                                <div className="ml-auto">
                                  <button onClick={()=>update(lang.info)} className='group bg-blue-100 hover:bg-blue-200 p-1 rounded-md duration-100 mr-2'><BiEditAlt className='text-blue-500' /></button>
                                  <button onClick={()=>del(lang.info)} className='group bg-red-100 hover:bg-red-200 p-1 rounded-md duration-100'><AiOutlineDelete className='text-red-500' /></button>
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
          <div className="min-h-screen px-4 bg-black/25 text-center">
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
              <form onSubmit={(event)=>{event.preventDefault(),submitFormCustom(editorMode,formdata,'languages',afterFinished_req)}} className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <button type='button' onClick={()=>{setIsOpen(false),setTimeout(() => {afterFinished_req()}, 1000);}} className='float-right bg-slate-100 p-1 rounded-xl -mt-3 -mr-3 hover:bg-slate-200 duration-200 active:bg-slate-300 active:shadow-inner active:scale-95'><MdOutlineClose className='text-2xl'/></button>
                <Dialog.Title
                  as="span"
                  className="text-md font-medium leading-6 text-gray-900"
                >
                  {
                  editorMode == 'delete' ? <></>:<>Fill the Details</>}
                </Dialog.Title>
                {
                  editorMode == 'delete' ? <>
                  <Input
                      id="langid"
                      type="number"
                      value={language_id}
                      className="hidden"
                      required
                  />
                  Are you sure, you want to delete <b>{lanuage_name}</b> from languages? </> : <div className="mt-2 flex gap-3">
                  <Input
                      id="langname"
                      type="text"
                      value={lanuage_name}
                      className="block w-1/2 border"
                      onChange={event => setLname(event.target.value)}
                      required
                      autoFocus
                      placeholder="Lanuage Name"
                  />
                  <Input
                      id="classname"
                      type="text"
                      value={lanuage_classname}
                      className="block  w-1/2 border"
                      onChange={event => setLcname(event.target.value)}
                      required
                      autoFocus
                      placeholder="Lanuage Classname"
                  />
                  </div>
                }
                <div className="mt-4">
                {editorMode == 'delete' ? 
                <button
                type="button"
                onClick={()=>delDataReq(editorMode,language_id,'languages',afterFinished_req)}
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

export default Languages
