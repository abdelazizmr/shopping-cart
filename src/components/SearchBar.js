import React from 'react'
import { Input } from '@mui/material'
import { useState, useContext } from 'react'
import { SearchContext } from '../App'

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState('')

  const handleChange = (e)=>{
    setSearchTerm(e.target.value.toLocaleLowerCase())
  }


    const handleSubmit =(e)=>{
        e.preventDefault();
    }

  return (
    <form display="flex" onSubmit={(e)=>handleSubmit(e)}>
        <Input 
        type="text" value={searchTerm} 
        placeholder="Search a product .." 
        name="search"
        onChange={(e)=>handleChange(e)} 
        sx={{width:'200px'}}/>
    </form>
  )
}

export default SearchBar