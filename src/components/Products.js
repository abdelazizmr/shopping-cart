import { Stack } from "@mui/material"
import ProductCard from "./ProductCard"
import Spinner from "./tools/Spinner";
import { useContext } from "react";
import { Cart } from "../CartContext"

const Products = () => {

  let {products , search} = useContext(Cart)

  let displayedProducts = products.filter(product=>product.Title.toLowerCase().includes(search))
  
  console.log(displayedProducts)

  
  return (
    <Stack direction="row" justifyContent="space-around" mt={5} flexWrap="wrap" gap={2} >
        {displayedProducts?.length > 0 ?
        
        displayedProducts.map((product,index)=>(
            <ProductCard  product={product} key={index} />
        ))
      :
        <Spinner />
        }
    </Stack>
  )
}

export default Products
