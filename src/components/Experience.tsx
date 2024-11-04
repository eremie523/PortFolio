import { WORK_EXPERIENCE } from '@/constants'
import React from 'react'
import { Button } from './ui/MovingBorder'
import { title } from 'process'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

type Props = {}

const Experience = (props: Props) => {
    return (
        <div className='pb-32'>
            <h1 className="heading">
                My <span className='text-purple'> Experience</span>
            </h1>
            <div className='w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10'>
                {WORK_EXPERIENCE.map((card, i) => (
                    <Button
                        borderRadius="1.75rem"
                        className="flex-1 text-white border-slate-800"
                        duration={Math.floor(Math.random() * 10000) + 1000}
                    >
                        <Card className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10'>
                            <img src={card.thumbnail} alt={card.title} className='lg:w-40 md:w-28 w-16' />
                            <CardHeader className='lg:ms-5'>
                                <CardTitle className=' text-start text-xl md:text-2xl font-bold'>
                                    {card.title}
                                </CardTitle>
                                <CardDescription className='text-start text-white-100 font-semibold mt-3'>
                                    {card.desc}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience