const Order = () => {
    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="font-semibold text-2xl">فرم ثبت سفارش</h2>
            <form >
              <div className="mb-4">
                <label className="block text-sm">نام و نام خانوادگی</label>
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full p-2 border"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">آدرس</label>
                <input
                  type="text"
                  name="address"
                  className="mt-2 w-full p-2 border"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">تلفن</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full p-2 border"
                />
              </div>
              <button type="submit" className="bg-orange-600 text-white p-2 rounded-md mt-4 w-full">
                ثبت سفارش
              </button>
            </form>
          </div>
        </div>
      );
}

export default Order