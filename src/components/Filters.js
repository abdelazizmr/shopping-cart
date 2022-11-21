import {FormControl,InputLabel,Select,MenuItem,Input, Stack,Box ,IconButton} from "@mui/material"
import {Search} from "@mui/icons-material"
import { useState } from "react"



const Filters = () => {

    const [filters, setFilter] = useState({
        search : '',
        country: '',
        minPrice : 0,
        maxPrice: 0
    })

    console.log(filters)


  return (
    <Stack sx={{margin:"40px 0px 0px 40px"}} display="flex" direction="column" gap={3}>
        <Box display="flex" >
            <Input type="text" value={filters.search} placeholder="Search a product .." name="search"
            onChange={(e)=>setFilter({...filters,[e.target.name]:e.target.value})} 
            sx={{width:'200px'}}/>
            <IconButton type="submit" sx={{pl:'10px' , color:'vlue'}}>
                <Search />
            </IconButton>
        </Box>
    <FormControl sx={{width:'200px' ,marginTop:"50px"}} p='5px'>
        <InputLabel>Choose a country</InputLabel>
        <Select
            value={filters.country}
            name= "country"
            onChange={(e)=>setFilter({...filters,[e.target.name]:e.target.value})} 
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
    </FormControl>

    <Box>
        <InputLabel>Min Price</InputLabel>
        <Input type="range" value={filters.minPrice}  name="minPrice"
        onChange={(e)=>setFilter({...filters,[e.target.name]:e.target.value})} />

        <InputLabel>Max Price</InputLabel>
        <Input type="range" value={filters.maxPrice} name="maxPrice"
        onChange={(e)=>setFilter({...filters,[e.target.name]:e.target.value})} />
    </Box>
    

    </Stack>
  )
}

export default Filters