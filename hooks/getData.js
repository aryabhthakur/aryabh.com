import axios from '../lib/axios'
import { parseJwt } from '../lib/jwtParser'
import useSWR from 'swr'
export const getDataCustom = async (swrkey,model,callback,rawData = false,offset,newlimit) => {
 const {data,error}  = useSWR(swrkey, () =>
    axios
        .get('/'+model+'/',{ params: { author: localStorage.getItem('access_token') ? parseJwt(localStorage.getItem('access_token')).sub : process.env.NEXT_PUBLIC_COMMON_USER_ID,limit:newlimit ? newlimit : process.env.NEXT_PUBLIC_PAGINATION_LIMIT,offset:offset ? offset : '0' } })
        .then(res => {
            rawData ==  true ? callback(res.data.list.map(c => c)) : callback(res.data.list.map(c => c.info))
        })
        .catch(error => {
            console.log(error.response.status);
            if (error.response.status != 409) throw error
        }),{}
  )
  if(error) console.error(error);
}
