import React from 'react'
import Image from 'next/image'

const Team = () => {

    type Profile={
        profileImageSrc:string,
        teamMemberName:string,
        jobTitle:string
    }

    const profileContents:Profile[]=[
        {
            profileImageSrc:"/profile_images/Kenny_Kaluiji_Profile.png",
            teamMemberName:"Kenny Kaluiji",
            jobTitle:"CEO & Founder",
        },
        {
            profileImageSrc:"/profile_images/Sunniva_Brate_Profile.png",
            teamMemberName:"Sunniva Brate",
            jobTitle:"Advisor, Social Impact",
        },
        {
            profileImageSrc:"/profile_images/Tom_Kleppesto_Profile.png",
            teamMemberName:"Tom Kleppesto",
            jobTitle:"Maritim & Chair",

        },
        {
            profileImageSrc:  "/profile_images/Tish_Gilberts_Profile.png",
            teamMemberName:"Tish Gilbert",
            jobTitle:"Communication",

        },
        {
            profileImageSrc: "/profile_images/Luyue_Tan_Profile.png",
            teamMemberName:"Luyue Tan",
            jobTitle:"Advisor,Markets"

        },
        {
            profileImageSrc: "/profile_images/Knut_Eirik_Profile.png",
            teamMemberName:"Knut Eirik",
            jobTitle:"COO & Partner"

        },
  
        {
            profileImageSrc: "/profile_images/Claudia_Mwabua_Profile.png",
            teamMemberName:"Claudia Mwabua",
            jobTitle:"Advisor, Offtake Markets"

        },
        {
            profileImageSrc: "/profile_images/Alan_Smith_Profile.png",
            teamMemberName:"Alan Smith",
            jobTitle:"Partner,Terracapx USA"

        },
        {
            profileImageSrc: "/profile_images/icon_placeholder_for_steve.jpg",
            teamMemberName:"Stephen Ondieki",
            jobTitle:"Trainee"

        }

    ]

  return (
    <section className="w-full h-screen bg-black-500 text-white flex  justify-evenly items-center text-center p-4 border-2 border-white">
   <div className="container mx-auto px-4">
    <div className='flex justify-center items-center border-2 border-white my-2'>
        <span className='text-4xl text-[#139CFF] py-2 my-2'>Meet Our Team</span>
        <span></span>
     </div>

 <div className="flex flex-wrap justify-center gap-10">
     
      {profileContents.map((profile, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-64"
        >
          <div className="relative w-32 h-32 mb-4">
            <Image
              src={profile.profileImageSrc}
              alt={profile.teamMemberName}
              fill
              className="object-cover rounded-full"
            />
          </div>

          <h2 className="text-center text-lg font-semibold text-gray-800">
            {profile.teamMemberName}
          </h2>
          <h3 className="text-center text-gray-500 text-sm mt-1">
            {profile.jobTitle}
          </h3>
        </div>
      ))}
      </div>
    </div>





















  
  </section>
  

  )
}

export default Team