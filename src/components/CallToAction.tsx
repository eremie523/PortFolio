import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { SOCIAL_MEDIA } from '@/constants'
import { Button } from './ui/MovingBorder'
import Link from 'next/link'

type Props = {}

const CallToAction= (props: Props) => {
  return (
    <section className='pt-12 border-t border-white-100/[0.2] flex flex-col items-center gap-12'>
        <h1 className='heading max-w-[680px]'>
          Ready to take your <span className='text-purple'>digital presence</span> to the next level?
        </h1>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <p className=' text-white-200'>Reach out to me today and let's discuss how I can help you achieve what you want. Up and active for your service</p>
          <Link href={"mailto:reremie523@gmail.com"}><ShimmerButton className='text-purple' ico={<FaLocationArrow />}>Email Me, reremie523@gmail.com</ShimmerButton></Link>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <p>Copyright&copy; 2024 Eremie Johnson</p>
          <div className='flex flex-row items-center justify-center gap-8'>
            {
                SOCIAL_MEDIA.map(({img, id, link}) => <Link href={link}><Button key={id} className='p-3'><img src={img} alt={id.toString()} width={30} height={30} /></Button></Link>)
            }
          </div>
        </div>
    </section>
  )
}

export default CallToAction