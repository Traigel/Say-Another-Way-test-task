import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})

export const productsApi = {
    getCurrentProducts() {
        return instance.get<ProductsRootType[]>('products')
    }
}

// Types
export type ProductsRootType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingType;
}

export type RatingType = {
    rate: number;
    count: number;
}