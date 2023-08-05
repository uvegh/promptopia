import {Schema,models,model} from "mongoose";

const PromptSchema= new Schema({
    creator:{
        type:String,ref:"User",
        // required:[true,'creator of post required']
    },
    content:{
        type:String,
        rquired:[true,'content required']
    }
},{timestamps:true})

const Prompt=models.Prompt||model("prompt",PromptSchema)
export default Prompt