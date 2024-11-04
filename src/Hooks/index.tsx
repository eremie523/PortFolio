"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    fullName: z.string().min(4).max(50),
    testimony: z.string().min(2).max(500),
    jobTitle: z.string()
})

const UseTestimoniesHook = () => {
     const {handleSubmit, register} = useForm({
        mode: "onChange",
        resolver: zodResolver(formSchema),
    });

    return {handleSubmit, register}
}

export default UseTestimoniesHook