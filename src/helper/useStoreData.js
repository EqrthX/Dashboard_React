import { useEffect, useState } from "react";
import { fetchCarts, fetchProducts, fetchUsers } from "./api_fakestore";

export default function useStoreData() {
    let [products, setProducts] = useState([]);
    let [carts, setCarts] = useState([]);
    let [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchProducts().then(setProducts);
        fetchCarts().then(setCarts);
        fetchUsers().then(setUsers);  
    }, [])

    return {products, carts, users}
}

