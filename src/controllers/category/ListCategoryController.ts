import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCatetoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategoryService = new ListCategoryService();

        //Devolver o array
        const category = await listCategoryService.execute();

        return res.json(category);
    }
}

export { ListCategoryController }