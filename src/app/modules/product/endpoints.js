import { ProductController } from './product.controller';
import middlewares from '../../middlewares';
import schemas from './schemas';
const productController = new ProductController();

export default (router) => {
    router.post('/', ...middlewares(schemas, 'create'), productController.create);
    router.get('/', ...middlewares(schemas, 'product'), productController.getAll);
    router.get('/myProduct', ...middlewares(schemas, 'product'), productController.getMyProducts);
}
