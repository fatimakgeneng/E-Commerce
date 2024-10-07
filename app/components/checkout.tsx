"use client"
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/createclient";
import { Currency } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./addtocart";


export default function Checkout({
    name,
    description,
    price,
    currency,
    image,
    price_id,
  }: ProductCart){
    const {checkoutSingleItem} =useShoppingCart()

    function buyNow(price_id:string){
        checkoutSingleItem(price_id)
    }
    
    const product ={
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,

    }
    return<Button onClick={()=>{
        buyNow(product.price_id)
    }}>Add To Cart</Button>
    
}