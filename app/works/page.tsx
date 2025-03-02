"use client"
import Image from "next/image"
import project1 from "@/public/project1.png"
import project2 from "@/public/project2.jpeg"
import project3 from "@/public/project3.png"
import project4 from "@/public/project5.jpg"
import project5 from "@/public/Picture4.gif"
import project6 from "@/public/project6.png"
import projectChat from "@/public/project-chat.png"
import projectNotes from "@/public/project-notes.png"
import sign from "@/public/star-2.png"
import Container2 from "@/components/container2";

export default function works() {
  return (
    <div className="flex items-start justify-center h-auto  xl:h-auto p-4 ">
      <div className=" w-[100%] xl:w-4/6 h-auto mb-10 pb-10 flex p-3 flex-col sm:flex-row">
        <div className=" text-white w-full sm:w-2/4 h-full p-1 flex ">
          <div className="flex w-full flex-col items-center justify-center h-full gap-5">
            <Container2 data={{ images: project1, text1: "Cinetographer-App -Next.js", text2: "PROJECT", box_w: "80%", link: "https://github.com/anup-kumar-bit/Abhinav-App" }} />
            <Container2 data={{ images: project2, text1: "UNKNOWN-WORKING", text2: "PROJECT", box_w: "80%" }} />
          </div>
        </div>

        <div className="w-full sm:w-4/5  h-auto">
          <div className="w-full   flex flex-col justify-between py-4">
            <h3 className="text-white text-3xl sm:text-4xl  xl:text-5xl flex justify-center items-center py-4 ">
              <Image src={sign} alt="loading" />
              ALL-PROJECTS
              <Image src={sign} alt="loading" />
            </h3>
          </div>
          <div className="flex gap-5 mb-5 flex-col sm:flex-row">
            <Container2 data={{ images: project3, text1: "BLOG WEBSITE -astro", text2: " FRONTEND PROJECT", link: "https://blogverse-anup-kumar-bit.netlify.app/" }} />
            <Container2 data={{ images: project4, text1: "Invoice Generator -React.js Gsap", text2: "FULL STACK PROJECT", link: "https://github.com/anup-kumar-bit/bill" }} />
          </div>
          <div className="flex gap-5 mt-5 flex-col sm:flex-row">
            <Container2 data={{ images: projectChat, text1: "Chat-App", text2: "FULL STACK PROJECT", link: "https://github.com/anup-kumar-bit" }} />
            <Container2 data={{ images: projectNotes, text1: "Notes-App-Ai", text2: "FULL STACK PROJECT", link: "https://github.com/anup-kumar-bit/Notes-App" }} />
          </div>
          <div className="flex gap-5 mt-5 flex-col sm:flex-row">
            <Container2 data={{ images: project5, text1: "QUICK BILL MAKER -react , gsap ", text2: "BACKEND PROJECT", link: "https://github.com/anup-kumar-bit/bill" }} />
            <Container2 data={{ images: project6, text1: "CURRENCY CONVERTER  GRAPH", text2: "FRONTEND PROJECT", link: "https://github.com/anup-kumar-bit/currency" }} />
          </div>
        </div>
      </div>
    </div>
  );
}