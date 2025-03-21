import Image, { StaticImageData } from "next/image"

interface BigcontainerProps {
    images: StaticImageData;
}
  

export default function ContainerAbout({images}: BigcontainerProps){
    const myimage=images;
    return (
        <div  className=" bg-gradient-to-r from-[#19191be3] via-[#141413f1] to-[#111111] w-[85%] md:w-[50%] xl:w-[32%]  xl:h-[100%] rounded-3xl flex p-5 items-center justify-center gap-3
        flex-col md:flex-row  shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)]  border-red-400">
            <div className="w-full h-64  md:w-full md:h-full rounded-3xl overflow-hidden  flex items-center justify-end object-contain ">
                <Image src={myimage} alt="myimage" className="h-full w-full object-fill" />
            </div>
        </div>
    )
}
