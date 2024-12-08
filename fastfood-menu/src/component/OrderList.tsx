import { Product } from "../Interface";

//create a list of food
const products: Product[] = [
  {
    id: 1,
    name: "پاستا",
    describe: "پاستا آلفردو با سس پستو",
    price: 340,
    picUrl: "img/foodimg/pasta.jpg",
  },
  {
    id: 2,
    name: "پیتزا پپرونی",
    describe: "پپرونی با خمیر تازه",
    price: 365,
    picUrl: "img/foodimg/pizza-peperoni.png",
  },
  {
    id: 3,
    name: "سالاد سزاز با میگو",
    describe: "سزار با گوشت میگو تازه",
    price: 420,
    picUrl: "img/foodimg/sezar-meygu.jpg",
  },
  {
    id: 4,
    name: "سزار مرغ",
    describe: "سالاد سزار با مرغ گریل",
    price: 380,
    picUrl: "img/foodimg/sezar-chicken.jpg",
  },
  {
    id: 5,
    name: "چیزبرگر",
    describe: "برگر با پنیر گودا",
    price: 265,
    picUrl: "img/foodimg/cheese-burger.jpg",
  },
  {
    id: 6,
    name: "برگر هاوایی",
    describe: "برگر با لایه گوشت تازه",
    price: 300,
    picUrl: "img/foodimg/burger-hawaie.jpg",
  },
  {
    id: 7,
    name: "کینگ برگر",
    describe: "برگر بزرگ کلاسیک",
    price: 270,
    picUrl: "img/foodimg/king-burger.jpg",
  },
  {
    id: 8,
    name: "پیتزا مرغ",
    describe: "پیتزا مرغ و قارچ",
    price: 345,
    picUrl: "img/foodimg/chicken-pizza.jpg",
  },
  {
    id: 9,
    name: "هات داگ",
    describe: "هات داگ ویژه پنیری",
    price: 230,
    picUrl: "img/foodimg/hot-dog.jpg",
  },
  {
    id: 10,
    name: "سیب زمینی سرخ شده",
    describe: "سیب زمینی با سس پستو",
    price: 170,
    picUrl: "img/foodimg/fries.jpg",
  },
  {
    id: 11,
    name: "نوشابه",
    describe: "سفارش انواع نوشابه",
    price: 70,
    picUrl: "img/foodimg/soda.jpeg",
  },
  {
    id: 12,
    name: "دوغ",
    describe: "دوغ خنک محلی",
    price: 70,
    picUrl: "img/foodimg/dugh.jpg",
  },
];

type OrderListProps = {
  addToCart: (product: Product) => void;
};

const OrderList: React.FC<Product> = ({ addToCart }: OrderListProps) => {
  return (
    <div className="flex flex-wrap w-[1272px] gap-10 p-4 md:flex mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="min-h-10 text-center bg-gray-200 flex flex-col items-start p-2 rounded-lg shadow-xl "
        >
          <img
            src={product.picUrl}
            className="w-64 h-52 object-cover"
            alt={product.name}
          />
          <h3 className="font-semibold text-center text-lg mt-2">{product.name}</h3>
          <h6 className="font-semibold text-md text-gray-600 mt-2">
            {product.describe}
          </h6>
          <div className="flex justify-between w-full items-center mt-3">
            <p className="font-semibold text-xl">{product.price} تومان</p>
            <button
              onClick={() => addToCart(product)}
              className="font-semibold text-lg bg-orange-500 text-white p-2 rounded-md"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
