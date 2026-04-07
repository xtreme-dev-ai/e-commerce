import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startScrollLeft, setStartScrollLeft] = useState(0);

    const newArrivals = [
        { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
        { _id: "2", name: "Casual Shirt",   price: 85,  images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Shirt"   }] },
        { _id: "3", name: "Summer Dress",   price: 95,  images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Summer Dress"   }] },
        { _id: "4", name: "Denim Jeans",    price: 110, images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Denim Jeans"    }] },
        { _id: "5", name: "Wool Coat",      price: 200, images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Wool Coat"      }] },
        { _id: "6", name: "Sneakers",       price: 75,  images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Sneakers"       }] },
        { _id: "7", name: "Linen Pants",    price: 65,  images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Linen Pants"    }] },
        { _id: "8", name: "Graphic Tee",    price: 40,  images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Graphic Tee"    }] },
    ];

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current!.offsetLeft);
        setStartScrollLeft(scrollRef.current!.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current!.offsetLeft;
        const walk = x - startX;
        scrollRef.current!.scrollLeft = startScrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    const scroll = (direction: "left" | "right") => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollWidth > container.scrollLeft + container.clientWidth);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons();
            return () => container.removeEventListener("scroll", updateScrollButtons);
        }
    }, []);

    return (
        <section className="py-16 px-4 lg:px-16">
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover the latest styles straight off the runway, freshly added to keep
                    your wardrobe on the cutting edge of fashion.
                </p>
                <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded border ${canScrollLeft ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                    >
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                    >
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className={`container mx-auto overflow-x-auto flex space-x-6 pb-4 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
            >
                {newArrivals.map((product) => (
                    <div key={product._id} className="min-w-[200px] lg:min-w-[30%] relative">
                        <img
                            src={product.images[0]?.url}
                            alt={product.images[0]?.altText || product.name}
                            className="w-full h-[350px] object-cover rounded-lg"
                            draggable="false"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4 rounded-b-lg">
                            <Link to={`/product/${product._id}`} className="block">
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="mt-1">${product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;
