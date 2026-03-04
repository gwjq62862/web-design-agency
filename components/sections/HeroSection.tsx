import Image from "next/image";
import Button from "../ui/button";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen lg:h-screen bg-dark-bg text-white overflow-hidden">
           
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] h-full items-center pt-[120px] lg:pt-0">
                
               
                <div className="px-6 md:px-10 lg:pl-[80px] xl:pl-[136px] z-20 relative text-center lg:text-left">
                  
                    <h1 className="font-extrabold text-[40px] sm:text-[55px] md:text-[70px] lg:text-[85px] xl:text-[105px] leading-[1.1] lg:leading-[1] tracking-tight xl:tracking-[-7.2px] max-w-[500px] md:max-w-[700px] xl:max-w-[850px] mx-auto lg:mx-0">
                        More than just a design agency
                    </h1>
                    <div className="mt-8 lg:mt-10">
                       <Button text="Discover More"/>
                    </div>
                </div>

                {/* Right Side Images Area */}
                <div className="flex h-[40vh] md:h-[50vh] lg:h-screen items-end gap-2 lg:gap-[40px] xl:gap-[80px] mt-12 lg:mt-0 px-4 lg:px-0">
                   
                    <div className="relative h-full w-full lg:w-[180px] xl:w-[230px]">
                        <Image
                            src="/hero-1.png"
                            alt="Agency"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>
                   
                    <div className="relative h-full w-[150%] lg:w-[350px] xl:w-[478px]">
                        <Image
                            src="/hero-2.png"
                            alt="Office"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>
                </div>
            </div>

           
            <div className="absolute hidden lg:flex left-6 xl:left-[80px] top-[140px] flex-col gap-[21px] z-30">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map(social => (
                    <Image key={social} src={`/${social}.svg`} width={16} height={16} alt={social} className="opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
                ))}
            </div>

           
            <div className="absolute left-6 xl:left-[80px] bottom-[30px] lg:bottom-[51px] z-40 lg:origin-left lg:-rotate-90 lg:translate-y-full">
                <p className="text-[14px] lg:text-[16px] font-semibold tracking-wider text-white whitespace-nowrap opacity-60">
                    +905-844-7550
                </p>
            </div>

          
            <div className="absolute z-30 hidden xl:block left-[35%] 2xl:left-[575px] bottom-[70px]">
                <Image src={'/arrow-button.svg'} width={100} height={100} alt="Arrow" className="xl:w-[120px]" />
            </div>
        </section>
    );
};

export default Hero;