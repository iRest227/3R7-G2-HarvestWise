import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const homepage = () => {
  const[fetchError, setFetchError] = useState(null)
  const[harvest, setHarvest] = useState(null)

  useEffect(() => {
     const fetchHarvest = async () => {

     }
    }
    },[])

  return(
    <div className ="Home Page">
        <h2>homepage</h2>
    </div>
  )

}

export default homepage