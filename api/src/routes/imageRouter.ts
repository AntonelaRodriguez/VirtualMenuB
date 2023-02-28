const { Router } = require("express");
const imageRouter = Router();
const { getImage, getAllImageMenu, postImage, deteleImage } = require('../controllers/image');

imageRouter.get('/:id', async (req:any, res:any, next:any) => {
    try{
        const { id } = req.params;
        const result = await getImage(id);
        res.status(201).json(result);
    } catch(err){
        next(err);
    };
});

imageRouter.get('/menuImages/:menuId', async (req:any, res:any, next:any) => {
    try{
        const { menuId } = req.params;
        const result = await getAllImageMenu(menuId);
        res.status(201).json(result);
    } catch(err){
        next(err);
    }
})

imageRouter.post('/', async (req:any, res:any, next:any) => {
    try{
        const { url, menuId } = req.body;
        const result = await postImage(url,menuId);
        res.status(201).json(result);
    } catch(err){
        next(err);
    };
});

imageRouter.delete('/:id', async (req:any, res:any, next:any) => {
    const { id } = req.params;
    try{
        await deteleImage(id);
        res.status(201).send("Image succesully deleted")
    } catch(err) {
        next(err);
    };
});

export default imageRouter;