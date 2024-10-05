import AddProductDetail from '@/components/admin/AddProductDetail'
import AddProducts from '@/components/admin/AddProducts'
import { getManyCategories } from '@/data/categories'
import React from 'react'

export default async function page() {
  const categories = await getManyCategories()

  // const [categories, setCategories] = useState([])
  // useEffect(()=>{
  //   async function fetchProducts(){
   
  //       const fetchedProducts = await getManyCategories()
  //       setCategories(fetchedProducts)
  //       console.log("fetchedProducts",fetchedProducts)

  //   }
  //   fetchProducts()
  // },[])
  return (
    <div className='w-full'><AddProductDetail categories={categories} /></div>
  )
}
