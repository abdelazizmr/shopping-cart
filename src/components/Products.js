import { Stack } from "@mui/material"
import ProductCard from "./ProductCard"
import Spinner from "./tools/Spinner";
import { useContext } from "react";
import { Cart } from "../CartContext"

const Products = () => {

  let cart = useContext(Cart)

  let products = cart.products
  
  //console.log(products)

  
  return (
    <Stack direction="row" justifyContent="space-around" mt={5} flexWrap="wrap" gap={2} >
        {products?.length > 0 ?
        
        products.map((product,index)=>(
            <ProductCard  product={product} key={index} />
        ))
      :
        <Spinner />
        }
    </Stack>
  )
}

export default Products
