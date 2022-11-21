import { Stack , Button } from "@mui/material"
import "../App.css"
const ShoppingCard = ({nbrItems}) => {
  return (
    <Stack>
        <Button variant="text" onClick={()=>alert('zaba')}>
            <span class="fa-stack fa-2x has-badge" data-count={5} >
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
        </Button>
        

    </Stack>
  )
}

export default ShoppingCard