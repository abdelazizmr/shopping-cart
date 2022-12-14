import { Card,Stack ,Snackbar, CardContent , Typography,CardMedia,Box,Button } from "@mui/material"
import { useState } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import joke from "./tools/joke.jpeg"
import Alert from "./tools/Alert"
import { useContext } from "react"
import {Cart} from "../CartContext"

const Product = ({product}) => {


  let cart = useContext(Cart)

    const [open,setOpen] = useState(false) 

    const {product_id,Title , Image , Price , Country } = product

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const handleClick = ()=>{
      setOpen(true)
      // add to the shopping cart
      cart.addToCart(product_id)
      console.log('added')
    }

   // console.log(cart.items)


  return (
    <Card sx={{ maxWidth: '300px', textAlign:'center' }}  >
        <CardMedia
            component="img"
            height="300"
            image={Image || joke}
            alt={Title}
           
        />
        <CardContent>
        <Typography variant="title" fontWeight="bold" >
        {Title}
        </Typography>
        </CardContent>

        <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px'}}>
        <Typography  variant="title" fontWeight="bold" sx={{color:'red',padding:'0px 10px'}}  >${Price}
        </Typography>
        <Typography variant="span"  sx={{opacity:'0.8',my:'10px'}} >{Country}
        </Typography>

        </Box>      

      <Stack spacing={2} sx={{ width: '100%' }}>
      <Button 
        variant="contained" 
        sx={{mb:2,borderRadius:'0px'}} 
        endIcon={<AddShoppingCartIcon />}
        onClick={handleClick}
        >
        Add to cart
        </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Product added to your cart
        </Alert>
      </Snackbar>
    </Stack>
        
        
    </Card>
  )
}

export default Product