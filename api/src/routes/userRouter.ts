const { Router } = require('express');
const userRouter = Router();
const { postUser, getAllUsers, updateUser, deletedUser } = require('../controllers/user')

userRouter.get('/', async (_req:any, res:any, next:any) =>{
    try{
        const users = await getAllUsers();
        res.status(201).json(users);
    } catch(err) {
        next(err);
    };
});

userRouter.post('/', async (req:any, res:any, next:any) => {
    try{
        const { email, name, lastName, image } = req.body;
        let newUser = await postUser(email, name, lastName, image);
        res.status(201).json(newUser);
    } catch(err) {
        next(err);
    };
});

userRouter.put('/:id', async (req:any, res:any, next:any) => {
    try{
        const { email, name, lastName, image } = req.body;
        const { id } = req.params;
        await updateUser(email, name, lastName, image, id);
        res.status(201).send("User succesfully updated");
    } catch(err) {
        next(err);
    };
});

userRouter.delete('/:id', async (req:any, res:any, next:any) => {
    try{
        const { id } = req.params;
        await deletedUser(id);
        res.status(201).send("User succesully deleted");
    } catch(err) {
        next(err);
    }
});

export default userRouter;