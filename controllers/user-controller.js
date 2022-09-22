import User from "../model/User";
import bcrypt from 'bcryptjs';
export const getAllUser= async(req,res,next)=>{
    let users;
    let myarr;
    try{
        users=await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
    
        return res.status(404).json({message:"No user found"});
    }
    const response=await users.json();
    for(let i=0;i<response.length;i++){
     myarr[i]['id']=response[i]['user']['id'];
     myarr[i]['name']=response[i]['user']['name'];
     myarr[i]['email']=response[i]['user']['email'];
     myarr[i]['password']=response[i]['user']['password'];
     myarr[i]['v']=response[i]['user']['v'];

    }
    return res.status(200).json({myarr});
};
export const signup=async(req,res,next)=>{
       const {name,email,password}=req.body;
       let existingUser;
       try{
         existingUser=await User.findOne({email});
       }catch(err){
       return console.log(err);
       }

       if(existingUser){
        return res.status(400).json({message:"User Already Exist"});
       }
       const hashedPass=bcrypt.hashSync(password);


       const user=new User({
        name,
        email,
        password :hashedPass,
        blogs:[],
       });

       try {
        await user.save();
       } catch (error) {
       return console.log(error);
       }

       return res.status(201).json({user});
};
export const login=async(req,res,next)=>{
    const {email,password}=req.body;
    let existingUser;
    try{
        existingUser=await User.findOne({email});
      }catch(err){
      return console.log(err);
      }

      if(!existingUser){
       return res.status(404).json({message:"Can not find the user"});
      }
      const isPasswordOk=bcrypt.compareSync(password,existingUser.password);
      if(!isPasswordOk){
        return res.status(400).json({message:"Password Not Matched"});
      }

      return res.status(200).json({message:"Login Successfull"});
};
