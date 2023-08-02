
import { useSuperHeroData } from "../assets/hooks/useSuperHeroData";
import { Link } from "react-router-dom";


const onSuccess = (data) => { 
    console.log("Performing side effect after successful data fetching", data);
}
const onError = (error) => { 
    console.log("Performing side effect after encountering error", error);
}

const RQSuperHero = () => {
    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroData(onSuccess, onError)
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
          <button onClick={refetch}>Fetch Hero</button>
          {data?.data.map((hero) => (
              <div key={hero.id}>
                  <Link to={`/rq-super-hero/${hero.id}`}>{ hero.name}</Link>
              </div>
          ))}
          {/* {data.map((heroName) => {
              return  <div key={heroName}>{heroName }</div>
          }
             
          )} */}
      </>
  )
}

export default RQSuperHero