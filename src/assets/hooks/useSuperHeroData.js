import { useQuery } from "react-query"
import axios from "axios"



const fetchSuperHeros = () => {
    return axios.get("http://localhost:4000/superheroes")
}

export const useSuperHeroData = (onSuccess, onError) => {
    return useQuery("super-hero",
        fetchSuperHeros, {
            // enabled:false
            // refetchOnMount: true,
            // refetchOnWindowFocus: true,
            // refetchInterval: 2000,
            // refetchIntervalInBackground: true,
            onSuccess,
            onError,
            // select: (data) => {
            //     const heroName = data.data.map((hero) => hero.name)
            //     return heroName
            // }
        })
}