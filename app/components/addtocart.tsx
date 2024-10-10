"use client";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/createclient";
import { useShoppingCart } from "use-shopping-cart";
import { SanityImageSource } from '@sanity/image-url/lib/types/types'; // Import SanityImageSource type

// Define the interface for the product in the cart
export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: SanityImageSource; // Use a specific type for the image
    price_id: string;
}

export default function AddToBag({
    name,
    description,
    price,
    currency,
    image,
    price_id,
}: ProductCart) {
    const { addItem, handleCartClick } = useShoppingCart();

    // Create a product object
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(), // Transform the image with the urlFor function
        price_id: price_id,
    };

    return (
        <Button
            onClick={() => {
                addItem(product); // Add item to cart
                handleCartClick(); // Open the cart
            }}
        >
            Add To Cart
        </Button>
    );
}



























/*"use client"
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/createclient";
//import { Currency } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart{
    name: string,
    description:string,
    price: number,
    currency: string,
    image: any
    price_id: string,
}

export default function AddToBag({
    name,
    description,
    price,
    currency,
    image,
    price_id,
  }: ProductCart){
    const {addItem, handleCartClick} =useShoppingCart()
    
    const product ={
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,

    }
    return<Button onClick={()=>{
        addItem(product), handleCartClick()
    }}>Add To Cart</Button>
    
}*/