"use client"
import Image from "next/image"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Bigcontainer from "../container1";
import Container2 from "../container2"
// ---------images import---- 
import myimage from "@/public/me.png"
import sign from "@/public/sign.png"
import works from "@/public/gthub1.png"




export default function Comp1() {


    return (
        <div className="border-1 border-white p-2 flex items-center justify-center h-[35vh]">
            <div className="border-1 border-blue-60 flex w-4/5 h-full p-4 gap-5">
            <Container2 data={{ images: works, text1: "GITHUB REOPS", text2: "PROJECTS", h: 150, w: 163  }}/>
            <Container2 data={{ images: sign, text1: "MORE ABOUT ME", text2: "Credentials", h: 150, w: 163 ,box_w:"75%" }} />
            <Container2 data={{ images: sign, text1: "MORE ABOUT ME", text2: "Credentials", h: 150, w: 163 }} />
            </div>
        </div>
    );
}
