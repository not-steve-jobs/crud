import { REQUIRED } from '../../configs/constants';

export default {
    product:{
        authentication:true,
    },
    create: {
        authentication:true,
        validation: {
            name: {
                in: 'body',
                trim: true,
                notEmpty: {
                    errorMessage: REQUIRED('name')
                },
            },
            description: {
                in: 'body',
                notEmpty: {
                    errorMessage: REQUIRED('description')
                },
            },
            category: {
                in: 'body',
                trim: true,
                notEmpty: {
                    errorMessage: REQUIRED('category')
                },
            },
            price: {
                in: 'body',
                trim: true,
                notEmpty: {
                    errorMessage: REQUIRED('price')
                },
            },
        },
    }
};