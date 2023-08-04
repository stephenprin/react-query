import { useQuery, useMutation,useQueryClient } from "react-query"
import {request} from '../../utils/axios-utils'



const fetchSuperHeros = () => {
    // return axios.get("http://localhost:4000/superheroes")

    return request({url:'/superheroes'})
}

const addSuperHero = (hero) => { 
    // return axios.post("http://localhost:4000/superheroes", hero)


    return request({ url: '/superheroes', method: 'POST',  data: hero  });
}

export const useSuperHeroData = (onSuccess, onError) => {
    return useQuery("super-hero",
        fetchSuperHeros, {
            // enabled:false
             //refetchOnMount: true,
             //refetchOnWindowFocus: true,
             //refetchInterval: 2000,
             //refetchIntervalInBackground: true,
            onSuccess,
            onError,
            // select: (data) => {
            //     const heroName = data.data.map((hero) => hero.name)
            //     return heroName
            // }
        })
}



export const useAddSuperHeros = () => { 
    const queryClient = useQueryClient();
    return useMutation(addSuperHero, {
        onSuccess: (data) => {
            // Invalidate and refetch
            // queryClient.invalidateQueries('super-hero')
            queryClient.setQueryData('super-hero', (oldQueryData) => { 
                return {
                    ...oldQueryData,
                    data:[...oldQueryData.data, data.data],

                }

            })
          },
  })
}

