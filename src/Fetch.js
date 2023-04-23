import React, { useEffect, useState } from 'react'
import './Fetch.css'
import { Logo } from './Logo'

export const Fetch = () => {
  const [records, setRecord] = useState([])

  useEffect(()=>{
    fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(data => setRecord(data.results))
  }, [])

  function truncate(str, maxLength = 263) {
    if (str.lenght <= maxLength) return str;

    const truncated = str.substring(0, maxLength -3);
    const ellipsis = "...";
    return truncated + ellipsis;
  }

  
  return (
    
    <body>
      <Logo/>
      <div className='grid'> 
          {records.map((list, index)=>(
            <div className='inner'>
              <h3 key={index}>{list.title}</h3>
              <p className='date' key={index}>{new Date(list.release_date).toLocaleString('en-US',{month:'long',day:'numeric',year:'numeric'})}</p>
              <p className='text' onLoad={truncate} key={index}>{truncate(list.opening_crawl)}</p>
              <hr/>
                <a href="#">More Info</a>
            </div>

            

          ))}
      </div>
    </body>
  )
}
