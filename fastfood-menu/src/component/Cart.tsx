import { Cart, Product } from "../Interface";
import { useState } from "react";
import Order from "./Order";



interface CartProps {
    cart: Cart[];
    setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}



const CartOrder = ({ cart, setCart }: CartProps)=>{

    // const [cart, setCart] = useState<Cart[]>(cart);

    //increasing order
    const increaseOrder = (id: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? {...item, quantity: item.quantity + 1} : item
            )
        );
    };


    //decreasing order
    const decreaseOrder = (id: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.quantity > 1
                ? {...item, quantity: item.quantity - 1}
                : item
            )
        );
    };


    //deleting order
    const deletingOrdr = (id: number) =>{
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    };

    //total
    const totalPrice = cart.reduce((a,item)=> a + item.quantity * item.price, 0);

    //پاپ آپ تسویه حساب
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
    return (
        <div className="flex flex-col bg-gray-300 items-start p-4 mb-2">
            <p className="font-semibold text-3xl">سبد خرید</p>
            {cart.length === 0 ? (
                <p className="font-semibold text-lg">سبد خرید خالی است</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="flex justify-between  w-full items-center mt-2">
                        <p className="font-semibold w-[30%] text-lg">{item.name}</p>
                        <div className="flex items-center w-[33%] justify-center">
                            <button onClick={()=>increaseOrder(item.id)} className="font-semibold text-2xl bg-gray-400 rounded-md w-8 h-8">+</button>
                            <p className="font-semibold text-2xl">{item.quantity}</p>
                            <button onClick={()=>decreaseOrder(item.id)} className="font-semibold text-2xl bg-gray-400 rounded-md w-8 h-8">-</button>
                        </div>
                        <p className="font-semibold text-lg">{item.price * item.quantity} تومان</p>
                        <button onClick={()=>deletingOrdr(item.id)} className="font-semibold text-red-500">حذف</button>
                    </div>
                ))
            )}
            <p className="font-semibold text-lg">مجموع: {totalPrice} تومان</p>
            <div className="mt-4 flex justify-start flex-col w-full">
                <button onClick={openPopup} className="bg-orange-600 text-white p-2 rounded-md mt-2 w-full ">ثبت سفارش</button>
                {isPopupOpen && <Order onClose={closePopup} />}
            </div>
        </div>
    )
}

export default CartOrder;