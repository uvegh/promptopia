import mongoose from 'mongoose'

let isConnected =false
export const connectToDB=async()=>{
    mongoose.set('strictQuery',true)//set mongoose option

    if(isConnected){
        console.log('Mongodb is already  connected')
        return
    }

    try{
        
        await mongoose.connect(process.env.DATABASE_URL,{
            dbName:'cente_prompts',
            useUnifiedTopology:true,
            useNewUrlParser:true
          
        })
        isConnected=true
        console.log('Mongodb is connected')
    }
    catch(error){
        console.log(error)
    }
}