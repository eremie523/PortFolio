"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingHoverCard'
import { TESTIMONIALS } from '@/constants'
import { Input } from './ui/input'
import UseTestimoniesHook from '@/Hooks'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import MagicButton from './ui/MagicButton'
import { AnimatedInput } from './ui/AnimatedInput'
import AnimatedTextarea from './ui/AnimatedTextarea'


type Props = {}

const onSubmit = function(values: any) {

};

const Client = (props: Props) => {
    const {handleSubmit, register} = UseTestimoniesHook();
    return (
        <div className='pb-32' id='testimonies'>
            <h1 className="heading">
                Kind Words From <span className='text-purple'> Previous Clients</span>
            </h1>
            <div className=' flex flex-col items-center justify-end gap-16 md:px-16 px-8'>
                <InfiniteMovingCards items={TESTIMONIALS} direction='right' pauseOnHover={true} speed='slow' />
                
                <form action="" onSubmit={handleSubmit(onSubmit, (errors) => console.log(errors))} className='py-8 rounded-2xl flex flex-col gap-8 border border-white-100 md:px-24 px-8 md:min-w-[680px] max-md:w-full'>
                    <h1 className=' tracking-tight text-2xl'>Drop a Testimony On Your Experience with Us</h1>
                    <div className=' flex flex-col gap-3'>
                        <div className=' flex gap-4'>
                            <div className='md:w-1/2 w-full flex flex-col gap-1'>
                                <Label className='p-2'>Full Name <span className=' text-red-600'>*</span></Label>
                                <AnimatedInput {...register('fullName')}></AnimatedInput>
                                
                            </div>
                            <div className='md:w-1/2 w-full flex flex-col gap-1'>
                                <Label className='p-2'>Job Title</Label>
                                <AnimatedInput {...register('jobTitle')}></AnimatedInput>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-1'>
                            <Label className='p-2'>Tell us your experience <span className=' text-red-600'>*</span></Label>
                            <Textarea {...register("testimony")} className='min-h-[8rem]' />
                        </div>
                    </div>
                    <MagicButton className='' type="submit">Submit</MagicButton>
                </form>
            </div>
        </div>
    )
}

export default Client