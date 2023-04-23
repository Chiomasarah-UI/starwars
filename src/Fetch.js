import React, { useEffect, useState } from 'react'
import './Fetch.css'
import { Logo } from './components/Icons/Logo'
import Movies from './components/Movies'

export const Fetch = () => {
  const [records, setRecord] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

  useEffect(()=>{
    setLoading(true)
    const fetchMovies = async () => await fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(data => setRecord(data.results))
    .catch(error => setError("An error occured"))
    .finally(() => setLoading(false))
    fetchMovies()
  }, [])
  
  return (
    
    // <body>
    <div>
      <Logo/>
      {error ? "An error occured" : null}
      {loading ? <div className='loader'>Movies loading</div> : records.length > 0 ? <Movies records={records}/> : <div className='loader'>No Movies</div>}
      </div>
    // </body>
  )
}
