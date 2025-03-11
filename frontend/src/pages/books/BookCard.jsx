import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';



const BookCard = ({ book }) => {
    const dispatch=useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className="rounded-lg transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
                
                {/* Book Image */}
                <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
                    <Link to={`/books/${book._id}`}>
                        <img
                            src={getImgUrl(book.coverImage)} 
                            alt={book.title} 
                            className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </Link>
                </div>

                {/* Book Details */}
                <div>
                    <Link to={`/books/${book._id}`}>
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                            {book.title}
                        </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-5">
                        {book.description.length > 80 
                            ? `${book.description.slice(0, 80)}...` 
                            : book.description}
                    </p>
                    
                    <p className="font-medium mb-5">
                        ${book?.newPrice} 
                        <span className="line-through font-normal ml-2">$100</span>
                    </p>
                    
                    <button    onClick={() => handleAddToCart(book)}className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
