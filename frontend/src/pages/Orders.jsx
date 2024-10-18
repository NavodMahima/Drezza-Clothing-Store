import React, {useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';


const Orders = () => {

  const { backendUrl,token , currency} = useContext(ShopContext);

  const [orderData,setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if(!token){
        return null;
      } 

      const response = await axios.post(backendUrl + '/api/order/userorders',{userId:token},{headers:{token}});
      console.log(response.data);
      
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
      }
      
    } catch (error) {
      
    }

  }

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='border-t pt-16 '>
      <div className='text-2xl'>
        <Title text1={'My'} text2={'Orders'} />
      </div>
    {/* Orders data */}
      <div>
        {
          orderData.map((item,index)=>(
            <div key={index} className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity : {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p>Date: <span className='mt-1'>{new Date(item.date).toDateString()}</span></p>
                  <p>Payment Method: <span className='mt-1'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track order</button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Orders
