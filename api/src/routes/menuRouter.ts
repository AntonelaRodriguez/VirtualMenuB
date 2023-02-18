const { Router } = require('express')
const menuRouter = Router()
const { getAllMenus, createMenu, updateMenu, deleteMenu } = require('../controllers/menu') 

menuRouter.get('/', async (_req:any, res:any, next:any) => {
    try{
        const allMenus = await getAllMenus();
        res.status(201).json(allMenus);
    } catch(error) {
        next(error);
    }
});

menuRouter.post('/', async (req:any, res:any, next:any) => {
    try{
        const { name, description, price, category } = req.body;
        const result = await createMenu(name, description, price, category);
        res.status(201).json(result)
    } catch(error) {
        next(error)
    }
})

menuRouter.put('/:id', async (req:any, res:any, next:any) => {
    try{
        const { name, description, price, category } = req.body;
        const { id } = req.params;

        const result = await updateMenu(name, description, price, category, id);
        res.status(201).json(result);
    } catch(error) {
        next(error);
    };
});

menuRouter.delete('/:id', async (req:any, res:any, next:any) => {
    try{
        const { id } = req.params;
        await deleteMenu(id);
        res.status(201).send("Menu succesfully deleted");
    } catch(error) {
        next(error);
    }
})

export default menuRouter