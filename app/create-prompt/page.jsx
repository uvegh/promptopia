"use client"
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Form from '@components/Form'
const CreatePrompt = () => {
const [submitting,setSubmitting]=useState(false)
const [post,setPost]=useState({
    prompt:'',
    tag:''
})
const handleNewPrompt=async()=>{

}


  return (
   <>
<Form
type="Create"
post={post}
setPost={setPost}
submitting={submitting}
handleSubmit={handleNewPrompt}

/>
   </>
  )
}

export default CreatePrompt