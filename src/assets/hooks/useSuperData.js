import { useQuery , useQueryClient} from "react-query"
import {request} from '../../utils/axios-utils'

const fetchHeroId = (id) => {
    // return axios.get(`http://localhost:4000/superheroes/${id}`)
    return request({url:`/superheroes/${id}`})
}

export const useSuperData = (heroId) => {
    const queryClient=useQueryClient()
    return useQuery(['super-hero', heroId], () => fetchHeroId(heroId), {
        initialData: () => {
            const hero = queryClient.getQueryData('super-hero')?.data?.find(hero => hero.id === parseInt(heroId))
            
                
                if (hero) {
                    return {data:hero}
                } else {
                    return undefined
                }
        }
    })
}