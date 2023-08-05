import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt';

export const GET=async(req)=>{
    try{
await connectToDB()

const new_prompt=Prompt.create({
    creator:req.creator,
    content:req.content
})
// const prompts =await Prompt.find({

// }).populate('creator')
 if(new_prompt){
    return new Response(JSON.stringify(new_prompt),{
        status:200
    })//return data
 }
 return new Response("something went wrong",{status:401})

    }


    catch(err){
        console.log(err)
        return new Response(("failed to fetch"),{
            status:500
        })
    }
}

