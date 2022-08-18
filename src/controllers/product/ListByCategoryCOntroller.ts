import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string;
        //chama o servico
        const listByCategory = new ListByCategoryService();
        
        //retorna dentro da variavel todos os produtos
        const products = await listByCategory.execute({
            category_id
        });

        return res.json(products)

    }
}

export { ListByCategoryController }