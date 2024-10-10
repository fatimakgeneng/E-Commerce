"use client"
import { ReactNode } from 'react'
import { CartProvider as ShoppingBag } from 'use-shopping-cart'

export default function CartProvider({children} : {children:ReactNode}){
    return(
        <ShoppingBag
        mode='payment'
        cartMode='client-only'
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
        successUrl='https://e-commerce-six-pearl-96.vercel.app/stripe/success'
        cancelUrl='https://e-commerce-six-pearl-96.vercel.app/stripe/error'
        currency='USD'
        billingAddressCollection={false}
        shouldPersist={true}
        language='en-US'
        >
            {children}
            </ShoppingBag>
    )
}