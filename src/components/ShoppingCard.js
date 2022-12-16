import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState, useContext } from 'react';
import "../App.css"
import { Cart } from '../CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'wheat',
  border: '2px solid whitesmoke',
  boxShadow: 24,
  p: 1,
  overflowY:'scroll',
  height:'100%',
  
};



const ShoppingCard = () => {

  
  const [open, setOpen] = useState(false);

  let cart  = useContext(Cart)

  //console.log(cart)

return (
    <div>
      <Button variant="text" onClick={()=>setOpen(true)}>
          <span className="fa-stack fa-2x has-badge" data-count={cart.items?.length} >
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
      </Button>

      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <div className='close'>
            <Button variant="text" sx={{display:'flex',color:'black'}} onClick={()=>setOpen(false)}>
            <CloseIcon />
          </Button>
           </div>
          {cart.items?.length > 0 ?
          cart.items?.map((item,index)=>(
            <div className='item' key={index}>
              <img src={cart.getProduct(item.id)?.Image} alt={cart.getProduct(item.id)?.Title} />
              <h4>${(cart.getProduct(item.id)?.Price * cart.getQuantity(item.id)).toFixed(2)}</h4>
              <div className='item-quantity'>
                <Button onClick={()=>cart.addToCart(item.id)}><AddIcon /></Button>
                {cart.getQuantity(item.id)}
                <Button onClick={()=>cart.removeOneFromCart(item.id)}><RemoveIcon /></Button>
              </div>
              <Button onClick={()=>cart.removeFromCart(item.id)}><DeleteRoundedIcon /></Button>
            </div>
          ))
          
          :<h3 className='empty'>Your shopping cart is empty🤕</h3>
          }
          <div className='buttons'>
          <Button sx={{width:'90%'}}   variant='contained'  color="success" >
            Pay now : ${cart.getTotal()}
          </Button>
          <Button sx={{width:'90%'}} onClick={()=>cart.removeAll()} variant='contained' color="error">
            Remove all
          </Button>
          </div>
          
        
          </Box>
      </Modal>
    </div>
  );
}

export default ShoppingCard