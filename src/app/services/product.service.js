import Product from '../models/product'
class ProductService {

    async create(data,user) {
        const product = await Product.create({
            ...data,
            userId:user.id
        });
        return product;
    };
    async getAll() {
        return Product.findAll({});
    };
    async getMyProducts(user) {
        return Product.findAll({
            where:{
                userId:user.id
            }
        });
    };


}
export default new ProductService();
