import useSWR,{useSWRConfig} from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import qs from 'qs'
export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const { mutate } = useSWRConfig()

    const { data: user, error, revalidate } = useSWR('/users/me/', () =>
        axios
            .get('/users/me/',{headers:{'Authorization': 'Bearer '+localStorage.getItem("access_token")+''}})
            .then(res => res.data)
            .catch(error => {
                if (error.response.status != 409) throw error
                router.push('/verify-email')
            })
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => revalidate)
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        // await csrf()

        setErrors([])
        setStatus(null)
          var config = {
            method: 'post',
            url: '/login',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : qs.stringify({
                'grant_type': 'password',
                'username': props.username,
                'password': props.password
              })
          };
        axios(config)
            .then(res  => {
                localStorage.removeItem('access_token')
                localStorage.setItem('access_token',res.data.access_token)
            })
            .then(() => mutate('/users/me/'))
            .catch(error => {
                if (error) {
                    console.log(error);
                    if (error.response.status != 422) throw error

                    // setErrors(Object.values(error.response.data).flat())
                }
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response => router.push('/login?reset=' + btoa(response.data.status)))
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (! error) {
            localStorage.removeItem('access_token')
            revalidate
        }
        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware == 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (middleware == 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
