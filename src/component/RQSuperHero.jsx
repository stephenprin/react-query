import { useQuery } from "react-query"
import axios from "axios"


const fetchSuperHeros = () => {
    return axios.get(" http://localhost:4000/superheroes")
}

const RQSuperHero = () => {
   const {isLoading, data}= useQuery("super-hero", fetchSuperHeros)
   
    if (isLoading) {
        return <div>Loading...</div>
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