import { useSuperData } from "../../assets/hooks/useSuperData"
import { useParams } from "react-router-dom"

const RQSuper = () => {
 const {heroId}= useParams()
    const { isLoading, data, isError, error, isFetching } = useSuperData(heroId)
    
    if (isLoading ||isFetching) {
        return <h5>Loading....</h5>
    }
    if (isError) { 
        return <h4>{error.message }</h4>
    }
  return (
    <div>
      {data?.data.name} -{data?.data.alterEgo}
    </div>
  )
}

export default RQSuper
