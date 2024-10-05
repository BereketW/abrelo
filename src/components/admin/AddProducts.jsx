"use client"
import React, { useEffect, useState } from 'react'
import AddProductDetail from './AddProductDetail'
import { getManyCategories } from '@/data/categories'

export default  function AddProducts({categories}) {
  
  // const categories = await getManyCategories()
  console.log("categories", categories)
  return (
    
        <AddProductDetail categories={categories}/>

   
  )
}
