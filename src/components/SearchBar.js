import React from 'react'
import { Input } from '@mui/material'
import { useContext } from 'react'
import { Cart } from '../CartContext'


const SearchBar = () => {


  let {search , setSearch} = useContext(Cart)

  const handleChange = (e)=>{
    setSearch(e.target.value.toLocaleLowerCase())
  }


    const handleSubmit =(e)=>{
        e.preventDefault();
    }

  return (
    <form display="flex" onSubmit={(e)=>handleSubmit(e)}>
        <Input 
        type="text" value={search} 
        placeholder="Search a product .." 
        name="search"
        onChange={(e)=>handleChange(e)} 
        sx={{width:'200px'}}/>
    </form>
  )
}

export default SearchBar