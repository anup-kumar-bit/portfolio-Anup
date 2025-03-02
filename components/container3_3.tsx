import Image from "next/image"
import iconR from "@/public/resumeGIF.gif"
import icon4 from "@/public/uiGif.gif"


export default function container2() {

    return (
        <div data-aos="zoom-in" className={`bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111] shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] 
        rounded-2xl flex  items-center justify-evenly w-full xl:w-[55%]  flex-col md:flex-row `} >
            <div className=" w-full  h-full p-7  flex items-center justify-center">
                <a href="https://drive.google.com/drive/folders/1Yf35Gj4xJAVOPgt_6RmpgNAmn8anUWDS?usp=sharing" target="blank">
                    <Image src={iconR} alt="sign" width={280}  className="rounded-3xl transition-all hover:bg-[#e4e4e4]  border-5 border-zinc-800" />
                </a>
            </div>
            <div className=" w-full  h-full p-7  items-center justify-center ">
                <Image src={icon4} alt="developer" width={280} className="rounded-3xl transition-all cursor-pointer border-5 border-zinc-800" />
            </div>
        </div>
    )
}
