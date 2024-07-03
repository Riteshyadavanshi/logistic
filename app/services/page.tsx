import { ServiceSection } from '@/components/home/service-section'
import { ImageSection } from '@/components/image-section'
import React from 'react'

const AboutUs = () => {
   const serviceData=["s","s","ds","ds","sds","sd"]
  return (
     <section className='w-full space-y-3'>
        <ImageSection label='Services' imageUrl='logo.png'/>
        <div  >
        <ServiceSection serviceData={serviceData}/>
        </div>
     </section>
  )
}

export default AboutUs