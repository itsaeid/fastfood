import { Cart } from "../Interface";


type CartProps = {
    cart: Cart[];
}

const CartOrder = ({ cart }: CartProps)=>{
    const totalPrice = cart.reduce((a,item)=> a+item.quantity * item.price, 0)
    return (
        <div className="flex flex-col bg-gray-300 items-start p-4 mb-2">
            <p className="font-semibold text-3xl">سبد خرید</p>
            {cart.length === 0 ? (
                <p className="font-semibold text-lg">سبد خرید خالی است</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="flex justify-between  w-full items-center mt-2">
                        <p className="font-semibold text-lg">{item.name}</p>
                        <div className="flex items-center">
                            <button className="font-semibold text-2xl bg-gray-400 rounded-md w-8 h-8">+</button>
                            <p className="font-semibold text-2xl">{item.quantity}</p>
                            <button className="font-semibold text-2xl bg-gray-400 rounded-md w-8 h-8">-</button>
                        </div>
                        <p className="font-semibold text-lg">{item.price * item.quantity} تومان</p>
                        <button className="font-semibold text-red-500">حذف</button>
                    </div>
                ))
            )}
            <p className="font-semibold text-lg">مجموع: {totalPrice} تومان</p>
            <div className="mt-4 flex justify-start flex-col w-full">
                <button className="bg-orange-600 text-white p-2 rounded-md mt-2 w-full ">ثبت سفارش</button>
            </div>
        </div>
    )
}

export default CartOrder