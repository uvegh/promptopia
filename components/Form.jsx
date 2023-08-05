import Link from 'next/link'
import React from 'react'

const Form = ({type,
    post,
    setPost,
    submitting,
    handleSubmit}) => {
  return (
    <>
        <section className='w-full max-w-full min-w-full'>
<h1 className='head_text text-left blue_gradient'>{type}
Creat Post
</h1>
<p className='desc text-justify'>
Create and share amazing prompts with the world,let your influence and imagaination spread across the globe

</p>

<h4 className='font-bold'>

    Your AI Prompt

    <textarea className='form_textarea w-3'
    h
    value={post.prompt}
    onChange={(e)=>setPost({
        ...post,prompt:e.target.value
    })}
    ></textarea>
</h4>

        </section>
    </>
  )
}

export default Form