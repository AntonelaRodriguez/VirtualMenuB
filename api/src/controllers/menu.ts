// const { Op } = require('sequelize')
const { Menu, Category } = require('../db')

const getAllMenus = async () => {
    try{
        let allMenus = await Menu.findAll({
            include:{ model: Category }
        });

        return allMenus.map((el:any) => valuesToReturn(el));;
        // return allMenus[0]
    } catch(error:any){
        throw new Error(error.message)
    }
};

const createMenu = async (name:string, description:string, price:number, category:string) => {
    try{
        if(!name||!description||!price ) throw new Error("One of the arguments is not defined");
        if(isNaN(price)) throw new Error("Price is not a number");

        let newName = name.toLowerCase();

        const result = await Menu.findOne({where: {name: newName}});
        if(result) throw new Error("The menu already exists");

        const newMenu =  await Menu.create({
            name: newName,
            description,
            price,
        });

        let categoryMenu = await Category.findAll({
            where: {
                name: category
            }
        });
        newMenu.addCategory(categoryMenu);

        return newMenu;
    } catch(error:any){
        throw new Error(error);
    };
};

const updateMenu = async (name:string, description:string, price:number, category:string, id:number) => {
    try{
        let newName = name.toLowerCase();
        let menu = await Menu.findByPk(id);
        await menu.update(
            { 
                name: newName, 
                description,
                price
            },
            { where: { id: id } }
        );

        const newCategory = await Category.findAll({
            where: { name: category },
        });
        menu.setCategories(newCategory);

        return menu;
        } catch(error:any) {
            throw new Error(error);
        };
};

const deleteMenu = async (id:number) => {
    try{
        let deleted = await Menu.destroy({
            where: {
                id: id
            }
        });
        return deleted;
    } catch(error:any) {
        throw new Error(error);
    }
}

const valuesToReturn = (value:any) => {
    return {
      id: value.id,
      name: value.name,
      description: value.description,
      price: value.price,
      category: value.Categories.map((el:any)=>el.name),
    };
  };

export { getAllMenus, createMenu, updateMenu, deleteMenu }