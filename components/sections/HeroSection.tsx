import Image from "next/image";
import Button from "../ui/button";

const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-black text-white">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] h-full items-center">


                <div className="px-10 lg:pl-[136px] z-10 lg:mr-[-120px]">
                    <h1 className="font-extrabold text-[105px] leading-[95px] tracking-[-7.2px] max-w-[850px]">
                        More than just  a design agency
                    </h1>
                    <div className="mt-10">
                       <Button  text="Discover More"/>
                    </div>
                </div>

                {/* Right Side: Full Height Images */}
                <div className="flex h-screen items-end gap-2 lg:gap-[80px] overflow-hidden">
                    {/* Hero Image 1 */}
                    <div className="relative h-full w-[200px] lg:w-[230px]">
                        <Image
                            src="/hero-1.png"
                            alt="Design Agency"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition duration-500"
                            priority
                        />
                    </div>

                    {/* Hero Image 2 */}
                    <div className="relative h-full w-[350px] lg:w-[478px]">
                        <Image
                            src="/hero-2.png"
                            alt="Office Work"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition duration-500"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="absolute left-[80px] top-[115px] flex flex-col gap-[21px]">
                <Image src={'/Twitter.svg'} width={16} height={16} alt="twiter" />
                <Image src={'/Facebook.svg'} width={16} height={16} alt="facebook" />
                <Image src={'/LinkedIn.svg'} width={16} height={16} alt="linkedin" />
                <Image src={'/Instagram.svg'} width={16} height={16} alt="instagram" />
            </div>

            <div
                className="absolute left-6 lg:left-[80px]  bottom-[51px] z-40 origin-left -rotate-90 translate-y-full"
            >
                <p className="text-[16px] font-semibold tracking-wider text-white whitespace-nowrap">
                    +905-844-7550
                </p>
            </div>
            <div
                className="absolute z-30 hidden lg:block"
                style={{
                    left: '575px',
                    bottom: '70px'
                }}
            >
                <Image src={'/arrow-button.svg'} width={125} height={125} alt="Arrow Button" />
            </div>
        </section>
    );
};

export default Hero;