import Approach from '@/components/Approach'
import Client from '@/components/Client'
import Contact from '@/components/Ca'
import Experience from '@/components/Experience'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 text-white pb-10'>
      <div className=' max-w-7xl w-full'>
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        <Approach />
        <Contact />
      </div>
    </main>
  )
}
