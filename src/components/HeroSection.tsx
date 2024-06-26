'use client'
import Link from 'next/link'
import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { Spotlight } from './ui/spotlight'
import {Button} from './ui/moving-border'
import Head from 'next/head';


export function HeroSection () {
  return (
    <div  className=" h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
  
      
      <div className='p-4 relative z-10 w-full text-center mt-0'>
        <h1  className="mb-2 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" >Explore Amazing Music</h1>
    
        <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Calcutta Girls’ High School was founded in 1856 under the patronage of Governor General of India, Lord Canning. It was supported by the Evangelical denominations of the city. Management of the school was handed over to Bishop J.M.Thoburn of the Methodist Episcopal Church .
The School is now owned & managed by the Methodist Church in India and functions under the supervision of the Calcutta Christian School Society, registered under Act XXI of 1860, and a local Managing Committee headed by the Bishop of the Bengal Regional Conference as Chairman.
The aim of the school is to provide high quality education at an affordable cost. The medium of instruction is English, but students need also to be proficient in both Hindi and Bengali. The school is recognized by the Deputy Director of Secondary Education (Anglo Indian Schools) West Bengal and is affiliated to the CISCE (Council for the Indian School Certificate Examinations, New Delhi).</p>
        <div className='mt-4'>
           
            <Link href={"/courses"}>
            <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
      Surprise Me!
      </Button>
            </Link>

        </div>
    </div>


      </div>

  )
}

