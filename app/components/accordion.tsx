'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
        <div className="max-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16"></div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">FAQs</h2>
            
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-semibold tracking-tight text-gray-700">What if I receive a damaged item?</AccordionTrigger>
          <AccordionContent className=" text-base text-gray-500 tracking-wide"> Contact our customer service within 48 hours of receiving your order.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-semibold tracking-tight text-gray-700">How can I contact customer support?</AccordionTrigger>
          <AccordionContent className=" text-base text-gray-500 tracking-wide">reach our customer support team via email at pinkoosagi@gmail.com
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-semibold tracking-tight text-gray-700">What payment methods do you accept?</AccordionTrigger>
          <AccordionContent className=" text-base text-gray-500 tracking-wide">We accept all major credit and debit cards, PayPal, and Apple Pay.
            We also offer the option to pay via bank transfer for certain regions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }