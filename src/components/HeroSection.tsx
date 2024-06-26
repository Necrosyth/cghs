'use client'
import Link from 'next/link'
import React from 'react'
import { SparklesCore } from './ui/sparkles'
import { Spotlight } from './ui/spotlight'
import {Button} from './ui/moving-border'

export function HeroSection () {
  return (
    <div  className=" h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
   

      
      <div className='p-4 relative z-10 w-full text-center mt-0'>
        <h1  className="mb-2 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" >Explore Amazing Music</h1>
    
        <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        Discover great bands, great music and expand your musical horizons
        Uncover hidden gems and timeless classics with curated playlists. Fresh tracks and exclusive releases added every week. Experience the sound of discovery today!</p>
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

