import { useState } from "react";
import { toast } from "react-toastify";










const Order = ({onClose}: {onClose:()=> void}) => {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name || !formData.address || !formData.phone){
      toast.error("لطفا فرم را کامل پر کنید!")
      return;
    }


    //شماره سفارش
    const orderId = Math.floor(10000 + Math.random() * 90000);
    const preparationTime = 30;

    toast.success(
      `سفارش شما با شماره ${orderId} ثبت شد. مدت زمان آماده سازی ${preparationTime}`
    );

    onClose();


  }
    return (
        <div className="overflow-hidden fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="font-semibold text-2xl">فرم ثبت سفارش</h2>
            <form >
              <div className="mb-4">
                <label className="block text-sm">نام و نام خانوادگی</label>
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full p-2 border"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">آدرس</label>
                <input
                  type="text"
                  name="address"
                  className="mt-2 w-full p-2 border"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">تلفن</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full p-2 border"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <button onChange={handleSubmit} type="submit" className="bg-orange-600 text-white p-2 rounded-md mt-4 w-full">
                ثبت سفارش
              </button>
            </form>
          </div>
        </div>
      );
}

export default Order;