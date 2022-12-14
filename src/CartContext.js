import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import {data} from "./data"

//template for the cart context
export const Cart = createContext()

const CartContext = ({children}) => {

    const [products, setProducts] = useState([])
    const [items, setItems] = useState([])
    const [search, setSearch] = useState('')

    
    //fetching products from local host and grabbing the array of items from LS if exists
    useEffect(()=>{
        setProducts(data)
        const arr = window.localStorage.getItem('items')
        //console.log(arr)
        if(arr !== 'undefined'){
            setItems(JSON.parse(arr))
        }else{
            console.log('nothing in the localstorage')
        }

    },[])


    // returns the quantity of an item
    const getQuantity = (id)=>{
        let quantity = items?.find(product=>product.id === id)?.quantity
        return quantity === undefined ? 0 : quantity 
    }

    // add item's quantity or create it if the item is not in the cart
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

    // decerement one item's quantity
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
    //remove one item from cart
    const removeFromCart= (id)=>{
        let newitems = items.filter(product=>product.id !== id)
        setItems(newitems)
        window.localStorage.setItem('items',JSON.stringify(newitems))
    }

    //remove all items from cart 
    const removeAll = ()=>{
        let newitems = []
        setItems(newitems)
        window.localStorage.setItem('items',JSON.stringify(newitems))
    }

    //calculate total price
    const getTotal = ()=>{
        let s = 0
        for (let item of items){
            s += getProduct(item.id)?.Price * item.quantity
        }
        
        return s.toFixed(2)
    }
    // get product from products array based on their id in the items array item ={id:..,quantity:..}
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
        getProduct,
        search,
        setSearch
    }



    return (
        <Cart.Provider value={contextValue}>
            {children}
        </Cart.Provider>
    )
}

export default CartContext