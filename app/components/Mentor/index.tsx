"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: ' infront of Nawada Thana, Ara Bihar',
        name: 'Kumkum Mobile Ara ',
        imgSrc: '/assets/mentor/user1.png',
    },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user2.png',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user1.png',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user3.png',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user2.png',
    // },
    // {
    //     profession: 'Senior UX Designer',
    //     name: 'Shoo Thar Mien',
    //     imgSrc: '/assets/mentor/user1.png',
    // },
]

// CAROUSEL SETTINGS

// function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
//             onClick={onClick}
//         />
//     );
// }

// function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
//             onClick={onClick}
//         />
//     );
// }



export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            // nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            // prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="py-8 sm:py-15 "    id="mentor">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Meet with our mentor.</h2>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-20 md:my-15 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="user-image" width={500} height={0} className="inline-block m-auto " />
                                        {/* <div className="absolute right-[84px] bottom-[102px] bg-white rounded-full p-4">
                                            <Image src={'/assets/mentor/linkedin.svg'} alt="linkedin-image" width={25} height={24} />
                                        </div> */}
                                    </div>
                                    <div className="-mt-10">
                                        <h3 className='text-4xl font-semibold text-lightblack'>{items.name}</h3>
                                        <h4 className='text-xl font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        );
    }
}
