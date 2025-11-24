import User from "../Models/UserModel.js";


class UserService{
   static instance ;

   constructor(){
     if(UserService.instance)
     {
       return UserService.instance;
     }

     UserService.instance=this;
   }

   async userExists(email)
   {
      const user=await User.findOne({where:{email}});

      return !!user;
   }

   
}

export default new UserService();