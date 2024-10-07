"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid'

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading2: string;
    imgSrc: string;
    name: string;
    students: number;
    classes: number;
    price: number;
    rating: number;
}

const postData: DataType[] = [
    {
        heading: 'Mobile Repairing Course',
        heading2: 'javascript',
        name: "Empower yourself with our Mobile Repairing Course,designed to enhance your skills for self-employment in the mobile handset repair industry.",
        imgSrc: '/assets/courses/unnamed.jpg',
        students: 150,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Laptop repair course',
        heading2: 'with React programme',
        name: "Computer repair, hardware Technicians, PC Schematics, Dead motherboard repair, Integrated Circuit, Basic Electronics, IT",
        imgSrc: '/assets/courses/laptop.jpg',
        students: 130,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    {
        heading: 'Electrician Course',
        heading2: 'with Figma',
        name: "Enroll now to delve deeper into the skills and knowledge required for a rewarding career as an electrician. Unleash your potential and shape your future with our Electrician Course.",
        imgSrc: '/assets/courses/images.jpeg',
        students: 120,
        classes: 12,
        price: 20,
        rating: 4.7,
    },
    
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        


        return (
            <div className='bg-paleblue rounded-3xl pt-2'>
                <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>

                    <div className="sm:flex justify-between items-center">
                        <h3 className="text-midnightblue text-4xl lg:text-55xl font-semibold mb-5 sm:mb-8 mt-14">Popular courses</h3>
                        {/* <Link href={'/'} className="text-Blueviolet text-lg font-medium space-links">Explore courses&nbsp;&gt;&nbsp;</Link> */}
                    </div>

                    <div className="grid lg:grid-cols-3" id="courses "  >
                    
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='border-2 border-white bg-imagee m-3 px-3 pt-3 pb-4 mb-10 shadow-courses rounded-2xl overflow-hidden '>
                                    <div className="relative rounded-3xl h-56 w-full">
                                        <img src={items.imgSrc} alt="gaby"  className="h-full w-full clipPath rounded-3xl " />
                                        <div className="absolute right-5 -bottom-2 bg-kellygreen rounded-full p-6">
                                            <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                        </div>
                                    </div>



                                    <div className="px-3">
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        {/* <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4> */}

                                        <div>
                                            <h3 className='text-base text-white font-normal pt-6 opacity-75'>{items.name}</h3>
                                        </div>

                                        <div className="flex justify-between items-center py-6">
                                            <div className="flex gap-4">
                                                {/* <h3 className="text-red text-22xl font-medium">{items.rating}</h3> */}
                                                <div className="flex">
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                    <StarIcon className="h-5 w-5 text-gold" />
                                                </div>
                                            </div>
                                            <div>
                                                {/* <h3 className="text-3xl font-medium">${items.price}</h3> */}
                                            </div>
                                        </div>

                                        <hr style={{ color: "#C4C4C4" }} />

                                        <div className="flex justify-between pt-6">
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/book-open.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-white opacity-75">Valueable</h3>
                                            </div>
                                            <div className="flex gap-4">
                                                <Image src={'/assets/courses/users.svg'} alt="users" width={24} height={24} className="inline-block m-auto" />
                                                <h3 className="text-base font-medium text-white opacity-75">Trusted</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                   </div>
                </div>
            </div>

        );
    }
}
