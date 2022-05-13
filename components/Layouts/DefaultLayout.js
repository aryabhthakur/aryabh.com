import { FrontPageNav } from "../frontPageNav"
import { motion } from "framer-motion"
export const  DefaultLayout = ({children}) =>{
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    }
    return(<>
    <FrontPageNav></FrontPageNav>
    <motion.main
    variants={variants} // Pass the variant object into Framer Motion 
    initial="hidden" // Set the initial state to variants.hidden
    animate="enter" // Animated state to variants.enter
    exit="exit" // Exit state (used later) to variants.exit
    transition={{ type: 'linear' }} // Set the transition to linear
    className=""
    >
            <div className="container lg:max-w-3xl mx-auto dark:bg-slate-900">
                <div className="flex items-center justify-center h-screen w-full flex-col p-4 xl:mt-0 lg:mt-12 md:mt-24">
                    <div className="flex md:flex-row flex-col items-center gap-5 justify-center">
                    {children}
                    </div>
                </div>
            </div>
    
    </motion.main>
    </>)
}