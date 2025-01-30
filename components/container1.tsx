import { PT_Sans } from 'next/font/google'
import Image, { StaticImageData } from "next/image"

const fontFamily = PT_Sans({
    subsets: ['latin'],
    weight: ['400'],
});

interface BigcontainerProps {
    images: StaticImageData;
}
  

export default function container1({images}: BigcontainerProps){
    const myimage=images;
    // console.log(myimage);
    return (
        <div className=" bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111] w-full xl:w-2/5 h-[40rem] xl:h-[70%] rounded-3xl flex p-5 items-center justify-center gap-3  shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] ">
            <div className="w-[37%] h-3/4  rounded-tl-3xl rounded-br-2xl overflow-hidden bg-gradient-to-r from-[#5e7be3] to-[#60b4df] flex items-center justify-end">
                <Image src={myimage} alt="myimage" className="h-full w-64" />
            </div>
            <div className="w-2/5 h-3/4 p-2">
                <h1 className="text-sm text-gray-400">A WEB DEVELOPER</h1>
                <h1 className={`font-sans text-5xl ${fontFamily.className}`}>Anup</h1>
                <h1 className={`font-sans text-5xl ${fontFamily.className}`}>Kumar</h1>
                <p className={`font-sans text-sm text-gray-500 ${fontFamily.className}`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur consectetur minus mollitia saepe asperiores vel?
                </p>
            </div>
        </div>
    )
}
