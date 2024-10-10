"use client"

import { urlFor } from "@/lib/createclient"
import Image from "next/image"
import { useState } from "react"
import { SanityImageSource } from '@sanity/image-url/lib/types/types' // Import the type

interface IAppProps {
    images: SanityImageSource[]; // Define images as an array of Sanity image objects
}

export default function ImageGallery({ images }: IAppProps) {
    const [bigImage, setBigImage] = useState<SanityImageSource>(images[0]); // Use proper type for state

    const smallImageClick = (image: SanityImageSource) => {
        setBigImage(image);
    }

    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={urlFor(image).url()}
                            width={200}
                            height={200}
                            alt="Product photo"
                            className="w-full h-full object-cover object-center cursor-pointer"
                            onClick={() => smallImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}
                    alt="Photo"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                    Sale
                </span>
            </div>
        </div>
    );
}














/*"use client"

import { urlFor } from "@/lib/createclient"
import Image from "next/image"
import { useState } from "react"

interface IAppProps{
    images:any,
}

export default function ImageGallery({images}:IAppProps){
    const [bigImage, setBigImage] = useState(images[0]);

    const smallImageClick= (image:any) =>{
        setBigImage(image);
    }
    return (
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image:any, idx:any) =>(
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image
                        src={urlFor(image).url()}
                        width={200}
                        height={200}
                        alt="Product photo"
                        className="w-full h-full object-cover object-center cursor-pointer"
                        onClick={()=>smallImageClick(image)}
                        />
                    </div>
                ))}
            </div>

            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                src={urlFor(bigImage).url()}
                alt="Photo"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercae tracking-wider text-white">
                    Sale
                </span>
            </div>
        </div>
    )
}*/