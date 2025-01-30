import Image from "next/image";
import Comp1 from "@/components/homepage-components/comp1";
import Comp2 from "@/components/homepage-components/comp2";
export default function Home() {
  return (
    <main className=" font-[family-name:var(--font-geist-sans)]  border-2 border-red-400 text-white " >
      <Comp1 />
      <Comp2 />
    </main>
  );
}
