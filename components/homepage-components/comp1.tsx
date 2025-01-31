"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Bigcontainer from "../container1";
import Container2 from "../container2"
// ---------images import---- 
import myimage from "@/public/me.png"
import sign from "@/public/sign.png"
import works from "@/public/my-works.png"




export default function Comp1() {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        gsap.to(marquee, {
            x: "-50%",
            duration: 5,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    return (
        <div className=" flex items-center justify-center flex-row flex-wrap p-5 gap-5 h-auto xl:h-[60vh]">
            <Bigcontainer images={myimage} />
            {/* --------------- MARQUEEEE ----------------- */}
            <div className="w-[95%] md:w-[80%] h-[60%] xl:w-2/5 xl:h-[70%] rounded-2xl overflow-hidden py-3">
                <div className="w-full overflow-hidden border-1 border-zinc-800 bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111]  py-3
                            rounded-xl mb-3">
                    <div className="relative flex w-max whitespace-nowrap text-white text-lg h-5  " ref={marqueeRef}>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque aspernatur ipsam nulla non sint minus autem reprehenderit tenetur doloribus recus.</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eaque aspernatur ipsam nulla non sint minus autem reprehenderit tenetur doloribus recus.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-5 h-5/6 gap-4 p-1 ">
                    <Container2 data={{ images: sign, text1: "MORE ABOUT ME", text2: "Credentials", h: 169, w: 163 }} />
                    <Container2 data={{ images: works, text1: "SHOWCASE", text2: "PROJECT" }} />
                </div>
            </div>
        </div>
    );
}
