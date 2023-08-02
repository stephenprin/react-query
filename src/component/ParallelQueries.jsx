import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSperhero = () => {
  return axios.get(' http://localhost:4000/superheroes')
}
const fetchFriends = () => {
  return axios.get(' http://localhost:4000/friends')
}

const ParallelQueries = () => {
  useQuery("friends", fetchFriends);
  useQuery("super-hero", fetchSperhero);
  return (
   
    <div>ParallelQueries</div>
  )
}

export default ParallelQueries