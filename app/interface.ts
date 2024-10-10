export interface simplifiedProduct {
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    imageUrl: string;
}

export interface Image {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    };
    alt?: string; // Optional alt text for accessibility
}

export interface fullProduct {
    _id: string;
    price: number;
    name: string;
    slug: string;
    categoryName: string;
    images: Image[]; // Array of Image objects
    description: string;
    price_id: string;
}














/*export interface simplifiedProduct{
    _id:string,
    price:number,
    name:string,
    slug:string,
    categoryName: string,
    imageUrl:string,
};

export interface fullProduct{
    _id:string,
    price:number,
    name:string,
    slug:string,
    categoryName: string,
    images:any,
    description:string,
    price_id:string,
}*/