'use client'
import Image from "next/image";
import Carousel from "react-multi-carousel";
const Index = () => {
    const cards = ['/listen.png', '/deliver.png', '/boldly.png',]
    return (
        <section className="px-[3rem] relative pb-[5rem] sm:px-[10rem] mt-[5rem] sm:mt-[0] flex gap-[4rem]">
            <div className="h-[0] overflow-hidden absolute hidden sm:block" data-animation-id='milestone'>
                <img src="/mile_7.png" className="hidden sm:w-[3.7rem]  sm:block" alt="line" />
            </div>
            <div className="w-[100%] sm:ml-[7.5rem]">
                <div className="" data-animation-id='slideIn'>
                    <h4 className="text-[3.4rem] sm:text-[5rem] font-[500] mb-[1rem] text-center sm:text-left">Our <span className="font-[700] text-accent-100">Approach</span></h4>
                    <p className="text-center hidden sm:block sm:text-left sm:w-[70rem] text-[1.2rem] sm:text-[2rem] mb-[3rem]">Our purpose is to unite, empower and develop incredible people to deliverunfathomable innovation through intelligent digital experiences</p>
                </div>
                <div className="hidden sm:flex flex-col justify-between sm:flex-row w-[100%]">
                    {cards.map((card, index) => <Image key={index} className="w-[35rem] hidden sm:block" src={card} width={400} height={300} />)}
                </div>
                <div className="sm:hidden">
                    <MobileCards cards={cards} />
                </div>
            </div>
        </section>
    )
}

export default Index


const MobileCards = ({ cards }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: cards.length
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    }
    return (
        <Carousel responsive={responsive} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} autoPlay={true} autoPlaySpeed={1000} infinite={true} arrows={false}>
            {cards.map((card, index) => <Image
                src={card}
                width={400}
                height={400}
                key={index}
                alt="card"
                className="w-[35rem]"
            />)}
        </Carousel>
    )
}


const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest

    return (
        <div className="flex items-center justify-center gap-[2rem]">
           <button onClick={() => previous()} className="border-[#88BFFF] border-[1.5px] w-[3rem] h-[3rem] aspect-square rounded-[50%] grid place-content-center">
                <img src="/arrow_right.png" alt="arrow icon" className="w-[.8rem]" />
            </button>
            <button onClick={() => next()} className="border-[#88BFFF] border-[1.5px] w-[3rem] h-[3rem] aspect-square rounded-[50%] grid place-content-center">
                <img src="/arrow_left.png" alt="arrow icon" className="w-[.8rem]" />
            </button>
        </div>
    )
}