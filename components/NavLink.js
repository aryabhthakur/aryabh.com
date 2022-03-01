import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link {...props}>
        <a
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
                active
                    ? 'border-orange-400 text-gray-900 dark:text-blue-500 focus:orange-indigo-700'
                    : 'border-transparent dark:text-white dark:hover:text-blue-400 text-gray-500 hover:text-gray-700 hover:border-orange-200 focus:text-gray-700 focus:border-orange-200'
            }`}>
            {children}
        </a>
    </Link>
)

export default NavLink
