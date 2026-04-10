import { useState } from "react";

const cart = {
    products: [
        {
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            quantity: 1,
            price: 120,
            image: "https://picsum.photos/500/500?random=1",
        },
        {
            name: "Casual Shirt",
            size: "L",
            color: "White",
            quantity: 2,
            price: 85,
            image: "https://picsum.photos/500/500?random=2",
        },
    ],
    totalPrice: 290,
};

const Checkout = () => {
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
            <div className="bg-white rounded-lg p-6">
                <h2 className="text-2xl uppercase mb-6">Checkout</h2>
                <form>
                    <h3 className="text-lg mb-4">Contact Details</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value="user@gmail.com"
                            className="w-full p-2 border rounded"
                            disabled
                        />
                    </div>

                    <div>
                        <h3 className="text-lg mb-4">Delivery</h3>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                            <label className="block text-gray-700">First Name</label>
                            <input
                                type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) =>
                                    setShippingAddress({
                                        ...shippingAddress,
                                        firstName: e.target.value,
                                    })
                                }
                                className="w-full p-2 border rounded"
                                required

                            />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
