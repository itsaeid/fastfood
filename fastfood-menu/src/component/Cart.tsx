import { Cart } from "../Interface";


type CartProps = {
    cart: Cart[];
}

const CartOrder = ({ cart }: CartProps)=>{
    const totalPrice = cart.reduce((a,item)=> a+item.quantity * item.price, 0)
    return (
        <div>
            <p>سبد خرید</p>
            {cart.length === 0 ? (
                <p>سبد خرید خالی است</p>
            ) : (
                cart.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <div>
                            <button>+</button>
                            <p>{item.quantity}</p>
                            <button>-</button>
                        </div>
                        <p>{item.price * item.quantity} تومان</p>
                        <button>حذف</button>
                    </div>
                ))
            )}
            <p>مجموع: {totalPrice} تومان</p>
            <div>
                <button>ثبت سفارش</button>
            </div>
        </div>
    )
}

export default CartOrder