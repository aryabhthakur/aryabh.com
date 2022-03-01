import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-700">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="dark:bg-slate-900 dark:shadow-slate-800 bg-white shadow-xl shadow-gray-200">
                <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
