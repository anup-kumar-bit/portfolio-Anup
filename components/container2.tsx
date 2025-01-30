import Image, { StaticImageData } from "next/image"

interface BigcontainerProps {
    data:{
        images: StaticImageData;
        text1:string,
        text2:string,
        box_w?:string,
        h?:number,
        w?:number
    }
}


export default function container2({data}: BigcontainerProps) {
    const imgSign=data.images;
    const boxWidth=data.box_w??"50%"
    console.log(imgSign)
    console.log(data)
    console.log(boxWidth)
    // console.log("mydata"+data.box_h)
    return (
        <div className={`bg-gradient-to-r from-[#19191b] via-[#141413] to-[#111111] shadow-[3px_6px_17px_2px_rgba(0,_0,_0,_0.7)] 
        rounded-2xl flex flex-col items-center justify-evenly`} style={{ width: boxWidth }}>
            <div className=" w-full  h-full p-7  flex items-center justify-center"><Image src={imgSign.src} alt="sign" width={data.w??imgSign.width} height={data.h??imgSign.height}  /></div>
            <div className="grid grid-cols-3 grid-rows-1 gap-1 mb-5 w-full">
                <div className="col-span-2 ">
                    <p className="text-sm ml-5 text-zinc-400">{data.text1}</p>
                    <h2 className="text-2xl ml-5 mt-1">{data.text2}</h2>
                </div>
                <div className="col-start-3  flex justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="42" viewBox="0 0 46 42" fill="none" >
                        <path d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4"></path>
                        <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" fill="#F4F4F4"></rect>
                        <path d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" strokeWidth="1.5" strokeLinecap="round" >
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
