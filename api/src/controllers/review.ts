const { Review, User, Menu } = require('../db')

const getAllMenuReviews = async (menuId:number) => {
    try{
        let allMenuReviews = await Review.findAll({
            where: { MenuId: menuId}
        });

        return allMenuReviews;
    } catch(err:any) {
        throw new Error(err);
    };
};

const postReview = async (title:string, description:string, rating:number, userId:number, menuId:number) => {
    try{
        if(!title || !description || !rating ) throw new Error("All arguments are required")

        const userReview = await User.findByPk(userId);
        if(!userReview) throw new Error("User not found")

        const menuReview = await Menu.findByPk(menuId);
        if(!menuReview) throw new Error("Menu not found");

        let newReview = await Review.create({
            title,
            description,
            rating,
            
        });

        userReview.addReview(newReview);
        menuReview.addReview(newReview);

        return newReview;
    } catch(err:any) {
        throw new Error(err);
    };
};

const updateReview = async (title:string, description:string, rating:number, id:number ) => {
    try{
        let review = await Review.findByPk(id);
        await review.update({
            title,
            description,
            rating
        },{
            where: { id: id} 
        });
        return review;
    } catch(err:any) {
        throw new Error(err);
    };
};

const deleteReview = async (id:number) => {
    try{
        let deleted = await Review.destroy({
            where: { id: id }
        });

        return deleted;
    } catch(err:any) {
        throw new Error(err);
    };
};

export { getAllMenuReviews, postReview, updateReview, deleteReview }