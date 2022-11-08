import {ProductsRootType} from "../../api/api";

export const useSearch = (data: ProductsRootType[], search: string) => {
    return data.filter(el => el.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
}