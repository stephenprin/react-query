
import { useQuery } from "react-query"
import axios from "axios"

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)

}

const fetchUserByChannel = (channelId) => {
    return axios.get(`http://localhost:4000/users/${channelId}`)

}

// eslint-disable-next-line react/prop-types
const DependentQuery = ({email}) => {
    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
    
    const channelId = user?.data.channelId

    useQuery(['course', channelId], () => fetchUserByChannel(channelId), {
        
        enabled: !!channelId,
    })
    
  return (
    <div>
      Dependent query
    </div>
  )
}

export default DependentQuery
