import User from "../models/user.model";

class UserService {
    private static instance:UserService;
    private constructor(){};
    static getInstance(){
        if(!UserService.instance)
        {
            UserService.instance=new UserService();
        }

        return UserService.instance
    }

    async userExisted (email:string):Promise<boolean>
    {
        const user=await User.findOne({where:{email}})

        return user!==null
    }
}

export default UserService.getInstance();