import React from 'react'



type ICompany={
    anchorName:string
    url:string 
 }


 const companyLinks:ICompany[]= [
    {        
        anchorName:'About',
        url:''
    },
    {
        anchorName:'Join us',
        url:''
    }
 ]

const Company = () => {
  return (
    <div className="flex flex-col border border-red-500 p-4">
    <span className="text-2xl text-white py-2">Company</span>
    <div className="flex flex-col flex-wrap justify-center gap-4">
      {companyLinks.map((companyLink, index) => (
        <a
          key={index}
          href={companyLink.url}
          className="text-blue-600 hover:text-white transition duration-200"
        >
          {companyLink.anchorName}
        </a>
      ))}
    </div>
  </div>
  )
}

export default Company