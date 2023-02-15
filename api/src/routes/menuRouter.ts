const { Router } = require('express')
const menuRouter = Router()
const { getAllMenus } = require('../controllers/menu') 

menuRouter.get('/', async (_req:any, res:any, next:any) => {
    try{
        const allMenus = await getAllMenus();
        res.status(201).json(allMenus);
    } catch(error) {
        next(error);
    }
});


export default menuRouter