//put and produce interfaces here


export interface Card {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

export interface Product {
    id: number;
    name: string;
    describe: string;
    price: number;
    picUrl: string;
};

export interface User{
    id: number;
    name: string;
    email: string;
    phone: number;
    address: string;
}