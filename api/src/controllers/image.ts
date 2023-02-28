const { Menu, Image } = require("../db");

const getImage = async (id:number) => {
    try{
        if(!id) throw new Error("Id is required");

        const result = await Image.findByPk(id);
        if(!result) throw new Error("Image not found");

        return result;
    } catch(err:any){
        throw new Error(err);
    };
};

const getAllImageMenu = async (menuId:number) =>{
    try{
        if(!menuId) throw new Error("Id is required");
        const result = await Image.findAll({
            where: { MenuId: menuId }
        });
        return result;
    } catch(err:any){
        throw new Error(err);
    };
};

const postImage = async (url:string, menuId:number) => {
    try{
        if(!url) throw new Error("Url is required");

        const imageMenu = await Menu.findByPk(menuId);
        if(!imageMenu) throw new Error("Menu not found");

        const result = await Image.create({
            url
        });

        imageMenu.addImage(result);
        return result;
    } catch(err:any) {
        throw new Error(err);
    };
};

const deteleImage = async (id:number) => {
    try{
        if(!id) throw new Error("Id is required");

        await Image.destroy({
            where: { id: id }
        })
    } catch(err:any){
        throw new Error("err");
    };
};

export { getImage, getAllImageMenu, postImage, deteleImage }