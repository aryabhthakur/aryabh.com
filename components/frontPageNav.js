import Link from "next/link"
import { useRouter } from "next/router"
import { BsMoonStars, BsSunFill } from "react-icons/bs"
import { FcAbout, FcFolder } from "react-icons/fc"
import { MdArticle } from "react-icons/md"
export const FrontPageNav = () =>{
    const router = useRouter();
    return(<>
            <div className="flex absolute bottom-10 justify-center w-full p-4 items-center z-50">
                <div className="bg-white flex items-center gap-4 shadow-lg py-2 px-4 rounded-2xl border">
                    <Link href="/">
                        <a className={router.pathname == "/" ? "py-1 px-2 duration-200 flex items-center gap-1 scale-125" : "py-1 hover:scale-125 px-2 duration-200 flex items-center gap-1 text-gray-500 hover:text-black"}><FcAbout/>About Me</a>
                    </Link>
                    <Link href="/projects">
                        <a className={router.pathname == "/projects" ? "py-1 px-2 duration-200 flex items-center gap-1 scale-125" : "py-1 hover:scale-125 px-2 duration-200 flex items-center gap-1 text-gray-500 hover:text-black"}><FcFolder/>Projects</a>
                    </Link>
                    <Link href="/articles">
                        <a className={router.pathname == "/articles" ? "py-1 px-2 duration-200 flex items-center gap-1 scale-125" : "py-1 hover:scale-125 px-2 duration-200 flex items-center gap-1 text-gray-500 hover:text-black"}><MdArticle/>Articles</a>
                    </Link>
                    <button className="px-2 py-1 flex gap-2 items-center bg-slate-700 shadow-lg shadow-slate-400 active:shadow-inner active:bg-slate-500 text-white rounded-lg duration-200 hover:shadow-slate-300"><BsMoonStars/> Lights-Off</button>
                </div> 
            </div>
    </>)
}