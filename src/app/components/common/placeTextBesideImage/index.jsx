'use client'
import Image from "next/image";
import Link from "next/link";

const Index = ({ item }) => {
    const rolesLength = item.roles.length
    return (
        <div className="max-w-[120rem] sm:mx-auto w-[100%]" data-animation-id='slideIn'>
            <div className={`sm:flex sm:justify-between mt-[5rem]  ${item.containerStyle}`}>
                <div className="sm:max-w-[60rem]">
                    {/* <h2 className="text-[3rem] leading-[4rem] sm:text-[3.5rem] sm:leading-[4.5rem] font-[700]">{item.header}</h2> */}
                    {item.header}
                    <p className="font-[700] mb-[1.5rem]">{item.subheader}</p>
                    <p className="font-[500]">{item.title}</p>
                    {item.text && <p className="sm:w-[45rem] sm:block  hidden">{item.text}</p>}
                    <div className="mt-[1rem] sm:block hidden sm:w-[50rem]">
                        {item.roles.map((_item, i) => (<div className="flex gap-[1.5rem] mb-[.5rem]" key={i}>
                            <div className="flex flex-col items-center w-[2rem] gap-[.5rem]">
                                {/* <svg width="20" height="20" className="w-full aspect-square mb-[.5rem]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9" stroke={item.circle ? item.circle : '#0D1117'} strokeWidth="2" />
                                </svg> */}

                                <div style={{ border: `2px solid ${item.circle ? item.circle : '#0D1117'}` }} className={`rounded-full ${'w-[2rem] aspect-square'}`}></div>
                                {
                                    (i + 1) !== rolesLength && (<div className={`w-[2px] ${item.lineColor} min-h-[2rem] h-[100%]`}></div>)
                                }
                            </div>
                            <p className="w-[90%]">{_item}</p>
                        </div>))}
                        <Link href={`${item.link}`}>
                            <button className={`btn border-[2px] mt-[3rem] ${item.bordercolor}`}>Read More</button>
                        </Link>
                    </div>
                </div>

                <div className={item.left ? `${item.left}` : ''}>
                    {item.left && <Link className="sm:hidden" href={`${item.Link}`}>
                        <button className={`btn border-[2px] mt-[2.5rem] ${item.bordercolor}`}>Read More</button>
                    </Link>}
                    {item.mutipleImage ? item.mutipleImage : (
                        <>
                            <Image src={item.image} width={700} height={400} className={`w-[30rem] hidden sm:block mt-[1rem] sm:mt-[0] ${item.imageStyle} h-auto`} alt="capability image" />
                            <img src={item.mobileImage} alt="image" className="w-[100%] sm:hidden mt-[1rem]" />
                        </>
                    )}
                    <div className="mt-[2.5rem] sm:hidden">
                        {item.roles.map((_item, i) => (<div className={`flex gap-[1.5rem] ${item.roleOrientation} mb-[.5rem]`} key={i}>
                            <div className="flex flex-col items-center w-[1.5rem]">
                                {/* <svg width="20" height="20" className="w-[1.5rem] border h-[1.5rem] mb-[.5rem]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="9" stroke={item.circle ? item.circle : '#0D1117'} strokeWidth="2" />
                                </svg> */}
                                {
                                    <div style={{ border: item.circle ? `2px solid ${item.circle}` : '2px solid #0D1117' }} className="w-[1.5rem] h-[1.5rem] rounded-full"></div>
                                }
                                {
                                    (i + 1) !== rolesLength && (<div className={`w-[2px] ${item.lineColor} h-[100%]`}></div>)
                                }
                            </div>
                            <p className="">{_item}</p>
                        </div>))}
                        {!item.left && <Link href={`${item.Link}`}>
                            <button className={`btn border-[2px] mt-[3rem] ${item.bordercolor}`}>Read More</button>
                        </Link>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;

