import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { assets } from '/assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState() // State for selected size

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]); // Set first image as default
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex flex-col sm:flex-row gap-5'>
        {/* Large Product Image */}
        <div className='w-full sm:w-[40%]'> {/* Reduced width of the large image */}
          <img src={image} className='w-full h-auto' alt="" />
        </div>

        {/* Product images gallery */}
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[10%] w-full mt-4 sm:mt-0'>
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)} // Set the clicked image as active
              src={item}
              key={index}
              className={`w-[80px] md:w-[80px] lg:w-[80px] xl:w-[80px] sm:mb-3 flex-shrink-0 cursor-pointer rounded-md 
                ${image === item ? 'border-2 border-black' : 'border border-gray-300'}`} // Conditional styling for active photo and rounded corners
              alt=""
            />
          ))}
        </div>

        {/* Product Details */}
        <div className='flex-2 w-full sm:w-1/2'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_dull_icon} alt="" className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productData.price}
          </p>
          <p className='mt-5 text-gray-500'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 flex-wrap'>
              {productData.sizes.map((item, index) => (
                <button onClick={()=>setSize(item)} key={index} className={`w-10 h-10 border border-gray-300 rounded-md ${item === size ? 'border-gray-600' : ' '}`}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-7 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex-flex-col gap-1'>
              <p>100% Original.</p>
              <p>Cash on delivery Available.</p>
              <p>Easy Return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm '>Description</b>
          <p className='border px-5 py-3 text-sm '>Reviews (122) </p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit minus, quae officiis quidem voluptas nesciunt a exercitationem recusandae quia, facilis doloribus? Vitae, atque inventore quibusdam iure enim ea similique!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus molestias consectetur quae doloribus quibusdam! Voluptas, quo maxime numquam voluptatum dolorem nihil pariatur! Deserunt, esse. Eveniet provident sit molestiae iure facilis.</p>
        </div>
      </div>

      {/* Display related Produts */}



    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
