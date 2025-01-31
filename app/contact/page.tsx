"use client"
import { HiMail } from "react-icons/hi";
import { HiMapPin, HiPhone } from "react-icons/hi2";
import ContactInfo from "@/components/contact-component/contactInfo";
import ContactInputs from "@/components/contact-component/contactinput";
export default function Contact() {
    return (
        <div className="bordesr-1 bsorder-r-red-600 text-white h-screen flex items-start justify-center bg-[#151515]">
            <div className="bordser-2 bsorder-white p-2 w-5/6 h-4/5 flex">
                {/* ------------------------------------- 1nd component ---------------------------- */}
                <div className="borsder-2 borsder-green-300 w-2/5  flex justify-center items-center flex-col gap-7">
                    <ContactInfo
                        title="MAIL US"
                        emails={["support@company.com", "info@company.com"]}
                        icon={<HiMail className="h-8 w-9 text-gray-300" />}
                    />
                    <ContactInfo
                        title="OUR LOCATION"
                        emails={["123 Business Street", "New York, NY 10001"]}
                        icon={<HiMapPin className="h-8 w-8 text-gray-300" />}
                    />

                    <ContactInfo
                        title="CALL US"
                        emails={["+1 (555) 123-4567", "+1 (555) 890-1234"]}
                        icon={<HiPhone className="h-8 w-8 text-gray-300" />}
                    />
                </div>

                {/* ------------------------------------- 2nd component ---------------------------- */}
                <div data-aos="zoom-in" className="border-s1 w-4/5 flex items-center justify-center">
                   <ContactInputs/>
                </div>
            </div>
        </div>
    )
}