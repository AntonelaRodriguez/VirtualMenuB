const { Router } = require("express") 
const categoryRouter = Router()
const { Category } = require('../db')



categoryRouter.get("/", async (_req:any, res:any, next:any) => {
	try {
	  let categories = await Category.findAll();
	  return res.status(200).send(categories)
	} catch (error) {
	  next(error);
	}
});

categoryRouter.post("/", async (req:any, res:any, next:any) => {
	try {
		const { name } = req.body;
		let newCategory = name.toLowerCase();
		let result = await Category.findOne({
			where:{
				name:newCategory,
			}
		});
		if (result) throw new Error("The category already exists");

		const category = await Category.create({
			name: newCategory,
		});

		res.status(201).json(category);
	} catch (error) {
	  next(error);
	}
});


export default categoryRouter