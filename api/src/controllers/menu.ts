// const { Op } = require('sequelize')
const { Menu } = require('../db')

const getAllMenus = async () => {
    try{
        let allMenus = await Menu.findAll();
        if(!allMenus.length){
            allMenus = []
        }
        return allMenus;
    } catch(error:any){
        throw new Error(error.message)
    }
};

export default getAllMenus