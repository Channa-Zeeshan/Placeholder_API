import React from 'react'

const comments =async (props:any) => {

    const url= await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`)
    const response=  await url.json()
  return (
    <div className='flex  flex-col justify-center h-full'>
        <h1 className='text-center p-12 text-7xl'> Comment Detail</h1>
        <div className=' flex flex-col gap-5 justify-between w-11/12 m-auto bg-blue-300 shadow-lg text-xl'>
            <h1> Post ID:   {response.postId}</h1>
            <h1> Name :  {response.name}</h1>
            <h1> Email :  {response.email}</h1>
            <h1> Comment :  {response.body}</h1>
        </div>
        
    </div>
   
  )
}

export default comments