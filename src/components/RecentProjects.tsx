import { PROJECTS } from '@/constants'
import React from 'react'
import { PinContainer } from './ui/3DPin'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa6'

type Props = {}

const RecentProjects = (props: Props) => {
    return (
        <section id='projects' className='py-32'>
            <div className='text-center flex flex-col items-center justify-center'>
                <h1 className=' text-center md:text-5xl text-3xl font-bold max-w-[500px]'>
                    A collection of some {' '}
                    <span className=' text-purple'>recent projects</span>
                </h1>
            </div>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {
                    PROJECTS.map(({ title, id, des, img, iconLists, link }) => (
                        <div key={id} className='lg:min-h-[28.5rem] min-h-[25rem] sm:h-[32rem] h-[32rem] flex items-center justify-center sm:w-[560px] w-[80vw]'>
                            <PinContainer
                                title={title}
                                href={link}
                                className='flex flex-col gap-6'
                            >
                                <div className='relative flex items-center justify-center sm:w-[560px] w-[80vw] overflow-hidden h-[20vh] lg:h-[25vh] lg:rounded-3xl bg-[#13162d]'>
                                    <div>
                                        <img src={"/bg.png"} alt='bg-img'></img>
                                    </div>
                                    <img src={img} alt="cover" className='z-10 absolute bottom-0' />
                                </div>
                                <div>
                                    <h1 className=' font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-3'>{des}</p>
                                    <div className='flex items-center justify-between mt-7'>
                                        <div className='flex items-center justify-center'>
                                            {iconLists.map((icon, I) => 
                                                <div className='bg-black rounded-full p-1 border border-gray-200 object-contain w-[34px] h-[34px] flex items-center justify-center' style={{
                                                    transform: `translateX(-${5 * I * 2}px)`
                                                }}>
                                                    <img src={icon} alt="icon" key={I} className='w-full h-full' />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <ShimmerButton ico={<FaLocationArrow />}>
                                                Check Live Site
                                            </ShimmerButton>
                                        </div>
                                    </div>
                                </div>
                            </PinContainer>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default RecentProjects