
import { SparklesPreview } from "@/components/SparklesPreview"

  import {HeroSection} from "@/components/HeroSection"
// import Navbar from "@/components/Navbar"
import {HeroParallaxDemo} from '@/components/Hero'

export default function Home(){
  return(
<main className="min-h-screen bg-black antialiased bg-grid-white[0.02]">
     <SparklesPreview/>
    {/* < HeroSection/> */}
    <HeroParallaxDemo />
   
</main>
    
  )
}