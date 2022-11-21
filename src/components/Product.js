import { Stack, Card , CardContent , Typography,CardMedia,Box,Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

const Product = ({product}) => {

    const {Title , Image , Price , Condition , Country } = product

  return (
    <Card sx={{ maxWidth: '320px' , p:'0px 0px 20px 0px', textAlign:'center' }}>
        <CardMedia
            component="img"
            height="300"
            image={Image}
            alt={Title}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" fontWeight="bold">
            {Title}
            </Typography>
        </CardContent>
        <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px'}}>
            <Typography  variant="p"  sx={{backgroundColor:'#eee',p:'8px',fontWeight:'bold'}} >Price : ${Price}
            </Typography>
            <Typography variant="p" sx={{backgroundColor:'#eee',p:'8px',fontWeight:'bold'}} >Country : {Country}
            </Typography>
            <Typography variant="p" sx={{backgroundColor:'#eee',p:'8px',fontWeight:'bold'}} >Condition : {Condition}
            </Typography>
        </Box>
        <Button variant="contained" endIcon={<AddShoppingCartIcon />} >Add to card</Button>
    </Card>
  )
}

export default Product