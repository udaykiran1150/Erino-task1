import User from "../models/user.model";

class UserInstance {
    private static instance:UserInstance;
    private constructor(){};
    static getInstance(){
        if(!UserInstance.instance)
        {
            UserInstance.instance=new UserInstance();
        }
        return UserInstance.instance
    }
    async userExisted (email:string):Promise<boolean>
    {
        const user=await User.findOne({where:{email}})
        return user!==null
    }
}

export default UserInstance.getInstance();