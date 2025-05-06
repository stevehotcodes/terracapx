import React from 'react'

type IResource={
anchorName:string
url:string 
}


const resourcesList:IResource[]=[
  {
     anchorName:'Blog',
     url:''
  },
  {
     anchorName:'User Guides',
     url:''
  },
  {
     anchorName:'Webinars',
     url:''
  },
  {
     anchorName:'Help Center',
     url:''
  },
  {
     anchorName:'Platform Status',
     url:''
  },
  {
     anchorName:'Partners',
     url:''
  },
  {
     anchorName:'Impact',
     url:''
  },

  
]   

const Resources = () => {
  return (
    <div className="flex flex-col border border-red-500 p-4">
  <span className="text-2xl text-white py-2">Resources</span>
  <div className="flex flex-col flex-wrap justify-center gap-4">
    {resourcesList.map((resource, index) => (
      <a
        key={index}
        href={resource.url}
        className="text-blue-600 hover:text-white transition duration-200"
      >
        {resource.anchorName}
      </a>
    ))}
  </div>
</div>
  )
}

export default Resources