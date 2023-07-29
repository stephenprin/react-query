import { useState, useEffect } from 'react'
import axios from 'axios'

const SuperHero = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

  
    useEffect(() => {
        
      axios.get('http://localhost:4000/superheroes').then(res => {
        setData(res.data)
        setIsLoading(false)
      }).catch(err => { 
          setError(err.message)
          setIsLoading(false)
      })
    }, [])
  
    if (isLoading) {
      return <h2>Loading...</h2>
    }
    if (error) { 
        return <div>{ error}</div>
    }
  
    return (
      <>
        <h2>Super Heroes Page</h2>
            {data.map((hero) => (
                <div key={hero.id}>
                    <p>{hero.name }</p>
            </div>
        ))}
      </>
    )
  
}

export default SuperHero
