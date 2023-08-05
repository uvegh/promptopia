import{Schema,model,models} from 'mongoose'

const UserSchema=new Schema({
    email:{
        type:String,
         unique:[true,'Email is required'],
         required:[true,'Email is required']

    },
    username:{
        type:String,
        required:[true,'username is required'],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid,should contain 8-20 alphanumeric letters and be unique!"]//reuqilar expression
    },
    image:{
type:String
    }
},{timestamps:true}
)

const User=models.User||model("user",UserSchema);//check if model user exist,if not create it
export default User


