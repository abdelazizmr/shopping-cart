import {FormControl,InputLabel,Select,MenuItem,Input, Stack,Box} from "@mui/material"
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect, useState } from "react"
import { useContext } from "react"
import { ProductContext } from "../App"




const Filters = ({products,onFilter}) => {

    const [countries, setCountries] = useState([])
    const [filters, setFilter] = useState({
        country: '',
        minPrice : 0,
        maxPrice: 0
    })

    useEffect(()=>{
        
    const getCountries = ()=>{
        const countries = products.map(product=> product.Country)

        const uniqueCountries = []

        for (let country of countries){
            if (uniqueCountries.indexOf(country) === -1){
                uniqueCountries.push(country)
            }
        }
        setCountries(uniqueCountries)
    }

    getCountries()
    },[products])




   const handleCountryChange = (e)=>{
    e.preventDefault();
    setFilter({...filters,[e.target.name]:e.target.value})
    onFilter(filters.country)
   }

   const handleMinPrice = (e)=>{
     setFilter({...filters,[e.target.name]:e.target.value})
    //setProducts(products.filter(product=>product.Price >= filters.minPrice))
   }

   //console.log(filters.country)
    

  return (
    <Stack maxWidth="300px" margin="20px" display="flex" direction="column" gap={3}>

    <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Countries</InputLabel>
        <Select
        defaultValue = "" 
        value={filters.country}
        name= "country"
        onChange={(e)=>handleCountryChange(e)} 
        input={<OutlinedInput label="Countries" />}
        
        >
        {countries.map((country,index)=>(
                <MenuItem key={index} value={country} >{country}</MenuItem>
            ))
        }
        </Select>
      </FormControl>

    <Box>
        <InputLabel>Min Price</InputLabel>
        <Input type="range" value={filters.minPrice}  name="minPrice"
        onChange={(e)=>handleMinPrice(e)} />

        <InputLabel>Max Price</InputLabel>
        <Input type="range" value={filters.maxPrice} name="maxPrice"
        onChange={(e)=>setFilter({...filters,[e.target.name]:e.target.value})} />
    </Box>
    

    </Stack>
  )
}

export default Filters