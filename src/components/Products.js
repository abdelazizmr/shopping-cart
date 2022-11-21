import { useEffect, useState } from "react"
import { Stack } from "@mui/material"
import axios from "axios"
import Product from "./Product"

const Products = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async()=>{
        const {data} = await axios.get('http://localhost:800/php102/creating%20api%20101/')
        setProducts(data)
    }

    useEffect(()=>{
        fetchProducts()
    },[])

  return (
    <Stack direction="row" justifyContent="space-around" flexWrap="wrap" gap={4} sx={{marginTop:'100px',zIndex:'-1'}}>
        {products?.map(product=>(
            <Product product={product} key={product.id} />
        ))}
    </Stack>
  )
}

export default Products
