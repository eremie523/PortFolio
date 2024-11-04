"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import ShimmerButton from "./ShimmerButton";
import { Globe } from "./globe";
import { GridGlobe } from "../GridGlobe";
import MagicButton from "./MagicButton";
import { FaCopy } from "react-icons/fa6";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    spareImg,
    imgClassName,
    titleClassName,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number,
    img?: string,
    spareImg?: string,
    imgClassName?: string,
    titleClassName?: string,
}) => {
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    return (
        <div
            className={cn(
                `row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-white justify-between flex flex-col space-y-4 mix-gradient overflow-hidden border border-white/[0.1]`,
                className
            )
            }
        >
            <div className={`${id === 6 && "h-full flex justify-center"}`}>
                <div className="w-full h-full absolute">
                    {img && <img src={img} alt={img} className={`${imgClassName} object-cover object-center`}></img>}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && <img src={spareImg} alt={spareImg} className={`object-cover object-center w-full h-full`}></img>}
                </div>
                {
                    id === 6 && <BackgroundGradientAnimation containerClassName="absolute" className="absolute top-0 right-0 z-50 flex items-center justify-center w-full h-full flex-col text-white font-bold">
                        {/* <h3>Do you want to start a project together?</h3>
                        <ShimmerButton>Copy my email</ShimmerButton> */}
                    </BackgroundGradientAnimation>
                }
                <div className={`${titleClassName} group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-48 flex flex-col px-5 p-5 lg:p-10`}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                    {id === 2 && (
                        <GridGlobe></GridGlobe>
                    )}
                    {id === 3 && (
                        <div className="flex gap-3 w-fit absolute top-3 -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3">
                                {
                                    ["React.js", "Next.js", "Node.js", "TypeScript"].map((tech, i) => (<span key={i} className=" py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#181e5c]">{tech}</span>))
                                }
                                {/* <span className="py-4 px-3 rounded-lg text-center bg-[#181e5c]"></span> */}
                            </div>
                            <div className=" flex flex-col gap-3">
                                {/* <span className="py-4 px-3 rounded-lg text-center bg-[#181e5c]"></span> */}
                                {
                                    ["Express.js", "MySql", "PHP", "Laravel"].map((tech, i) => (<span key={i} className=" py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#181e5c]">{tech}</span>))
                                }
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className=" mt-5 relative">
                            <div className={` bottom-0 right-0`}>
                                <MagicButton
                                    ico={<FaCopy />}
                                    handleClick={() => {
                                        console.log("Copying")
                                        const email = "reremie523@gmail.com";

                                        // Modern approach with navigator.clipboard
                                        if (navigator.clipboard && window.isSecureContext) {
                                            navigator.clipboard.writeText(email)
                                                .then(() => console.log("Email copied to clipboard!"))
                                                .catch(err => console.error("Failed to copy text: ", err));
                                        } else {
                                            // Fallback for older browsers
                                            const textarea = document.createElement("textarea");
                                            textarea.value = email;
                                            document.body.appendChild(textarea);
                                            textarea.select();
                                            try {
                                                document.execCommand("copy");
                                                console.log("Email copied to clipboard!");
                                            } catch (err) {
                                                console.error("Fallback: Unable to copy text", err);
                                            } finally {
                                                document.body.removeChild(textarea);
                                            }
                                        }
                                    }}
                                >
                                    Copy My Email
                                </MagicButton>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
