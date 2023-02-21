const { Router } = require('express');
const reviewRouter = Router();
const { getAllMenuReviews, postReview, updateReview, deleteReview } = require('../controllers/review');

reviewRouter.get("/menuReviews/:menuId", async (req:any, res:any, next:any) => {
    try{
        const { menuId } = req.params;
        const reviews = await getAllMenuReviews(menuId);

        res.status(201).json(reviews);
    } catch(err) {
        next(err);
    };
});

reviewRouter.post("/", async (req:any, res:any, next:any) => {
    try{
        const { title, description, rating, userId, menuId } = req.body;
        const review = await postReview(title, description, rating, userId,menuId);
    
        res.status(201).json(review);
    } catch(err) {
        next(err);
    };
});

reviewRouter.put('/:id', async (req:any, res:any, next:any) => {
    try{
        const { id } = req.params;
        const { title, description, rating } = req.body;
        await updateReview(title, description, rating, id);
    
        res.status(201).send("Review succesfully updated.");
    } catch(err) {
        next(err);
    };
});

reviewRouter.delete('/:id', async (req:any, res:any, next:any) => {
    try{
        const { id } = req.params;
        await deleteReview(id);

        res.status(201).send("Review succesfully deleted")
    } catch(err) {
        next(err);
    };
});

export default reviewRouter;