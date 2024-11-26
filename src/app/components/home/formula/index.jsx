import Image from "next/image";
const Index = () => {
    return (
        <>
            <FormularDesktop />
            <FormularMobile />
        </>
    );
}

export default Index;


const FormularDesktop = () => (
    <section className="md:px-[10rem] mt-[6rem] sm:flex gap-[4rem] hidden">
        <div className="h-[0] overflow-hidden absolute hidden sm:block" data-animation-id='milestone'>
            <img src="/mile_8.png" className="hidden sm:w-[4.7rem] sm:block" alt="line" />
        </div>
        <div className="sm:ml-[7.5rem]">
            <div className="w-[45rem]" data-animation-id='slideIn'>
                <h4 className="text-[4rem] font-[700]">Our <span className="text-[#FF88C3]">Formula</span></h4>
                <p className="text-[1.6rem]">With years of expertise we have distilled what works and what doesn't. Scalable solutions that not only account for new technologies, but most importantly leverage your existing systems, timelines, and budget.</p>
            </div>
            <div className="relative" data-animation-id='slideIn'>
                <Image src='/tree.png' className="w-[130rem]" width={1500} height={975} alt="formular tree image" />
                <Image src='/last_tree.png' className="w-[50rem] absolute bottom-0" width={605} height={300} alt="formular tree image" />
            </div>
        </div>
    </section>
)

const FormularMobile = () => (
    <section className="sm:hidden flex my-[3rem] justify-center">
        <Image src='/_our_formular.png' className="w-[25rem]" width={280} height={540} alt="formulars" />
    </section>
)