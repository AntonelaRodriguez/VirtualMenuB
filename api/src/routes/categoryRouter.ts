const { Router } = require("express") 
const categoryRouter = Router()
const { Category } = require('../db')



categoryRouter.get("/", async (_req:any, res:any, next:any) => { //busca todas las categories
	try {
	  let categories = await Category.findAll();
	  return res.status(200).send(categories)
	} catch (error) {
	  next(error);
	}
});

categoryRouter.post("/", async (req:any, res:any, next:any) => {    //busca o agrega una categoria
	try {
		const { name } = req.body;
        let newName = name.toLowerCase();
	    let category = await Category.findOrCreate({
		where: { name: newName }
	  });
	  return res.status(201).send(category)
	} catch (error) {
	  next(error);
	}
});


export default categoryRouter