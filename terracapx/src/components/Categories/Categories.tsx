import React from 'react'

type ICategories={
   anchorName:string
   url:string 
}


const categoriesList:ICategories[]=[
     {
        anchorName:'All',
        url:''
     },
     {
        anchorName:'Trending',
        url:''
     },
     {
        anchorName:'SBTI',
        url:''
     },
     {
        anchorName:'Scope 1',
        url:''
     },
     {
        anchorName:'Scope 2',
        url:''
     },
     {
        anchorName:'Scope 3',
        url:''
     },
     {
        anchorName:'CCP',
        url:''
     },
     {
        anchorName:'VCM',
        url:''
     },
     
]   

const Categories = () => {


  return (
<div className="flex flex-col border border-red-500 p-4">
  <span className="text-2xl text-white py-2">Categories</span>
  <div className="flex flex-col flex-wrap justify-center gap-4">
    {categoriesList.map((category, index) => (
      <a
        key={index}
        href={category.url}
        className="text-blue-600 hover:text-white transition duration-200"
      >
        {category.anchorName}
      </a>
    ))}
  </div>
</div>

  )
}

export default Categories