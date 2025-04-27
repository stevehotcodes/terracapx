import React from 'react'
import Image from 'next/image'

const Partners = () => {
   type PartnerImage={
     partnerImageSrc:string 
   }

   const partnerImages:PartnerImage[]=[
     {
        partnerImageSrc:"/partner_images/ITMO-Logo.png"
     },
     {
        partnerImageSrc:"/partner_images/cube_image_partner.png"
     },
     {
        partnerImageSrc:"/partner_images/qpq_partner.png"
     },
     {
        partnerImageSrc:"/partner_images/S_partner.png"
     },
     {
        partnerImageSrc:"/partner_images/quadrant_shape_partner.png"
     }
   ]

  return (
       <section className="w-full h-screen bg-black-500 text-white flex  justify-evenly text-center p-4 border-2 border-white">
      <div className="container mx-auto px-4">
       <div className='flex justify-center items-center border-2 border-white my-2'>
           <span className='text-4xl text-[#139CFF] py-2'>Partners</span>
           <span></span>
        </div>
   
    <div className="flex flex-wrap justify-center gap-10">
        
         {partnerImages.map((partner, index) => (
           <div 
             key={index} 
             className="flex flex-col items-center  p-6  shadow-md hover:shadow-xl transition-shadow duration-300 w-64"
           >
             <div className="relative w-32 h-32 mb-4">
               <Image
                 src={partner.partnerImageSrc}
                 alt="partner image"
                 fill
                 className="object-cover rounded-full"
               />
             </div>

           </div>
         ))}
         </div>
       </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
     
     </section>





  )
}

export default Partners