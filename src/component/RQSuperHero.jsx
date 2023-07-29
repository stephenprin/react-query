import { useQuery } from "react-query"
import axios from "axios"


const fetchSuperHeros = () => {
    return axios.get(" http://localhost:4000/superheroes")
}

const RQSuperHero = () => {
    const { isLoading, data, isError, error, isFetching } = useQuery("super-hero",
        fetchSuperHeros, {
            
            refetchOnMount: true,
            refetchOnWindowFocus: true,
        })
   console.log(isLoading, isFetching)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) { 
        return <div>{ error.message}</div>
    }
  return (
      <>
          <div>RQSuperHero</div>
          {data.data.map((hero) => (
              <div key={hero.id}>
                  {hero.name}
              </div>
          ))}
      </>
  )
}

export default RQSuperHero