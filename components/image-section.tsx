import Image from 'next/image'
import React from 'react'

interface ImageSectionProps{
     label:string,
     imageUrl:string
}
export const ImageSection = ({label,imageUrl}:ImageSectionProps) => {
  return (
     <div className='relative overflow-hidden' >
         <Image src={`/${imageUrl}`} width={600} height={600} alt='aboutus' className='w-full h-[500px] animate-scaleUp '/>
          <div className='absolute left-0 right-0 top-0 bottom-0  flex justify-center items-center '>
            <h1 className='text-6xl text-white font-semibold'>{label}</h1>
          </div>
     </div>
  )
}
