import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

export const Cart = createContext({
    products : [],
    items : [],
    addToCart : () =>{},
    removeOneFromCart : () =>{},
    removeFromCart : ()=>{},
    removeAll : ()=>{},
    getQuantity : () =>{},
    getTotal : () =>{},
    getProduct : ()=>{}
})



const CartContext = ({children}) => {

    const [products, setProducts] = useState([])
    const [items, setItems] = useState([])
    
    const fetchProducts = async(id='')=>{
        try{
            const {data} = await axios.get(`http://localhost:800/php102/rest%20api/server/index.php?product_id=${id}`)
            setProducts(data)
        }catch(e){
            console.log('Local host not responding.')
        }
    }

    useEffect(()=>{
        fetchProducts()
        const arr = window.localStorage.getItem('items')
        console.log(arr)
        if(arr !== 'undefined'){
            setItems(JSON.parse(arr))
        }else{
            console.log('nothing in the localstorage')
        }

    },[])



    const getQuantity = (id)=>{
        let quantity = items?.find(product=>product.id === id)?.quantity
        return quantity === undefined ? 0 : quantity 
    }

    //console.log(items)

 
    const addToCart = (id)=>{
        let quantity = getQuantity(id)
        //console.log(quantity);

        let newitems; 
        if (quantity === 0){
            newitems = [...items,{id:id,quantity:1}];
        }else{
            newitems =  items.map(item=>item.id === id ? {...item,quantity : item.quantity+1 } : item);
        }

        setItems(newitems);

        window.localStorage.setItem('items',JSON.stringify(newitems))
    }

    
    const removeOneFromCart = (id)=>{
        let quantity = items.find(product=>product.id === id)?.quantity 
        if (quantity=== 1){
            removeFromCart(id)
        }else{
           let newitems = items.map(item=>item.id === id ? {...item,quantity : item.quantity-1 } : item)
           setItems(newitems)
           window.localStorage.setItem('items',JSON.stringify(newitems))
        }

    }

    const removeFromCart= (id)=>{
        let newitems = items.filter(product=>product.id !== id)
        setItems(newitems)
        window.localStorage.setItem('items',JSON.stringify(newitems))
    }

    const removeAll = ()=>{
        let newitems = []
        setItems(newitems)
        window.localStorage.setItem('items',JSON.stringify(newitems))
    }

    const getTotal = ()=>{
        let s = 0
        for (let item of items){
            s += getProduct(item.id)?.Price * item.quantity
        }
        
        return s.toFixed(2)
    }

    const getProduct = (id)=>{
        let product = products.find(product=>product.product_id === id)
        return product
    }

    const contextValue = {
        products : products,
        items:items,
        getQuantity,
        getTotal,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        removeAll,
        getProduct
    }



    return (
        <Cart.Provider value={contextValue}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext