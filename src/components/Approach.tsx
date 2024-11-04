"use client"
import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect';
import { AnimatePresence, motion } from "framer-motion";

type Props = {}

const Approach = (props: Props) => {
    return (
        <div className='pb-32'>
            <h1 className="heading">
                My <span className='text-purple'> Approach</span>
            </h1>
            <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
                <Card title="Discovery & Strategy" id={1} desc='We start by diving deep into your vision and goals to design a solution that aligns perfectly with your business needs.' >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                    />
                </Card>
                <Card title="Design & Development" id={2} desc='From user-centered designs to high-quality code, we bring your vision to life with functional, scalable solutions built on the latest technology.'>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-black"
                        colors={[
                            [236, 72, 153],
                            [232, 121, 249],
                        ]}
                        dotSize={2}
                    />
                    {/* Radial gradient for the cute fade */}
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
                <Card title="Launch & Support" id={3} desc='After a smooth deployment, our team remains dedicated to supporting and enhancing your product, ensuring it continues to drive success for your business.'>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-600"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </div>
    );
}

const Card = ({
    title,
    id,
    children,
    desc
}: {
    title: string;
    children?: React.ReactNode;
    id?: number;
    desc: string;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <h2 className="text-center group-hover/canvas-card:-translate-y-16 translate-y-16 text-2xl font-bold group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    Phase {id}
                </h2>
                <div className='transition relative duration-200 text-center group-hover/canvas-card:opacity-100 opacity-0 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2'>
                    <h2 className="text-white text-3xl z-10 mt-4 font-bold">
                        {title}
                    </h2>
                    <p className='text-sm mt-3'>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}


const Icon = ({ className, ...rest }: any) => {
return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
    >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);
};

export default Approach