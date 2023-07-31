import Card from '@/components/Cards/Card'
import React from 'react'
import Rishi from '/public/rishi.jpg'
import Gaurav from '/public/gaurav.png'
import Barun from '/public/barun.jpeg'
import Shivam from '/public/shivam.jpeg'
const Developer = () => {
  return (
    <>
      
      
      
<section className="bg-center bg-no-repeat bg-[url('/dev-bg.jpg')] bg-gray-800 bg-blend-multiply">
<div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Unlocking Education's Potential</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Connecting Minds, Inspiring Growth - Pigeon: Your interactive platform for seamless communication and collaborative learning, unlocking the true potential of education.          </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            Learn more
        </a>  
    </div>
</div>
</section>




<section className='p-4 sm:p-8'>

      <div className='flex flex-wrap mt-8 justify-center gap-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2'>
      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    WhatsappLink={"#"}
        DeveloperName={"Rishi Ratan Mishra" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Rishi}
      />

      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    Whatsapp={"Message"}
    WhatsappLink={"#"}
        DeveloperName={"Gaurav Kumar Jha" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Gaurav}
      />

      </div>

      <div className='flex mt-8 flex-wrap justify-center gap-8  rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2'>
      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    Whatsapp={"Message"}
    WhatsappLink={"#"}
        DeveloperName={"Barun Kumar" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Barun}
      />

      <Card
    Link1Link={"https://founder.zolaha.com"}
    Link2Link={"https://instagram.com/rishiratanmishra"}
    Link3Link={"#"}
    Link1={"Portfolio"}
    Link2={"Instagram"}
    // Link3={"#"}
    Linkedin={"Follow"}
    LinkedinLink={"#"}
    Whatsapp={"Message"}
    WhatsappLink={"#"}
        DeveloperName={"Shivam Vidya Sah" }
        DeveloperPost={"Web Developer" }
        DeveloperImage={Shivam}
      />

        </div>
        </section>
      </>


  )
}

export default Developer;