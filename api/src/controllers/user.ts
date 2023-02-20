const { User } = require('../db');

const getAllUsers = async () => {
    try{
        let allUsers = User.findAll();
        return allUsers;
    } catch(err:any) {
        throw new Error(err);
    }
    
}

const postUser = async (email:string, name:string, lastName:string, image:string) => {
    try{
        let newName = name.toLowerCase();
        let newLastName = lastName.toLowerCase();

        const [result, _created ] = await User.findOrCreate({
            where:{
                email: email
            },
            defaults:{
                email,
                name: newName,
                lastName: newLastName,
                image
            }
        });
        return result;
    } catch(err:any){
        throw new Error(err);
    };
};

const updateUser = async (email:string, name:string, lastName:string, image:string, id:number) =>{
    try{
        let newName = name.toLowerCase();
        let newLastName = lastName.toLowerCase();

        const user = await User.findByPk(id);
        await user.update(
            {
                email,
                name: newName,
                lastName: newLastName,
                image
            },
            { where: { id: id } }
        );
        return user;
    } catch(err:any) {
        throw new Error(err);
    }
};

const deletedUser = async (id: number) => {
    try{
        let deleted = await User.destroy({
            where:{
                id: id
            }
        });
        return deleted;
    } catch(err:any) {
        throw new Error(err);
    };
};

export { postUser, getAllUsers, updateUser, deletedUser }