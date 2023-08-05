'use client'

import {useEffect, useState} from 'react'

const Feed = () => {
  const[searchText,setSearchText]=useState('')
const PromptCardList=({data,handleClick})=>{
return(
  <div className='mt-16 prompt_layout grid-cols-3'>

  </div>
)
}
  const handleSearchChange=(e)=>{

  }

  const fetchPost=async()=>{
    const response=await fetch('/api/prompt')
  }
  useEffect(()=>{

  },[])
  return (
  <>
    <section>
      <input type="text"
      onChange={handleSearchChange}
      value={searchText}
      required
      placeholder='search for a tag or username'
       className='search_input peer mt-2' />

       <PromptCardList/>
    </section>

  </>
  )
}

export default Feed