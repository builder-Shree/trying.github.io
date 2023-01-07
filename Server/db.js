import mongoose from 'mongoose';

const Connection = async () => {
    const URL = 'mongodb+srv://shree:shreesha@flipkart.8seeikb.mongodb.net/flipkart?retryWrites=true&w=majority'
    try{
        await mongoose.connect(URL,{
           useUnifiedTopology : true 
        ,useNewUrlParser : true});
        console.log("Database Connected");
    }catch(error){
        console.log("Error while connecting database",error.message);
    }
       

}
export default Connection;