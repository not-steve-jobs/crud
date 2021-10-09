import {
    SUCCESS_CODE
} from '../../configs/status-codes';
import ProductService from '../../services/product.service';

export class ProductController {

    async create({body:data,user}, res, next) {
        try {
            const product = await ProductService.create(data,user);

            return res.status(SUCCESS_CODE).json(product);
        } catch (e) {
            next(e);
        }
    }
    async getAll(req, res, next) {
        try {
            const product = await ProductService.getAll();

            return res.status(SUCCESS_CODE).json(product);
        } catch (e) {
            next(e);
        }
    }
    async getMyProducts({user}, res, next) {
        try {
            const product = await ProductService.getMyProducts(user);

            return res.status(SUCCESS_CODE).json(product);
        } catch (e) {
            next(e);
        }
    }

}