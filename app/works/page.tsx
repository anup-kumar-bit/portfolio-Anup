"use client"
import Image from "next/image"
import project1 from "@/public/project1.jpeg"
import project2 from "@/public/project2.jpeg"
import project3 from "@/public/project3.jpeg"
import project4 from "@/public/project4.jpeg"
import project5 from "@/public/project5.jpeg"
import project6 from "@/public/project6.jpeg"
import sign from "@/public/star-2.png"
import Container2 from "@/components/container2";

export default function works() {
  return (
    <div className="flex items-start justify-center h-auto sm:h-[86vh] lg:h-auto p-4 ">
      <div className=" w-[100%] xl:w-4/6 h-auto mb-10 pb-10 flex p-3 flex-col sm:flex-row">
        <div className=" text-white w-full sm:w-2/4 h-full p-1 flex ">
          <div className="flex w-full flex-col items-center justify-center h-full gap-5">
            <Container2 data={{ images: project1, text1: "SHOWCASE", text2: "PROJECT", box_w: "80%" }} />
            <Container2 data={{ images: project2, text1: "SHOWCASE", text2: "PROJECT", box_w: "80%" }} />
          </div>
        </div>

        <div className="w-full sm:w-4/5">
          <div className="w-full   flex flex-col justify-between py-4">
            <h3 className="text-white text-4xl  xl:text-5xl flex justify-center items-center ">
              <Image src={sign} alt="loading"/>
              ALL-PROJECTS
              <Image src={sign} alt="loading"/>
            </h3>
          </div>
          <div className="flex gap-3 mb-5 flex-col sm:flex-row">
            <Container2 data={{ images: project3, text1: "SHOWCASE", text2: "PROJECT" ,link:"https://github.com/anup-kumar-bit/ERP-PORTAL" }} />
            <Container2 data={{ images: project4, text1: "SHOWCASE", text2: "PROJECT" }} />
          </div>
          <div className="flex gap-3 mt-5 flex-col sm:flex-row">
            <Container2 data={{ images: project5, text1: "SHOWCASE", text2: "PROJECT" }} />
            <Container2 data={{ images: project6, text1: "SHOWCASE", text2: "PROJECT" }} />
          </div>
        </div>
      </div>
    </div>
  );
}