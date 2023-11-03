import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function DonateProduct() {
    const context = useContext(myContext);
    const { donateproducts, setDonateProducts, donatingProduct } = context;
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div >
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Donate Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={donateproducts.name}
                            onChange={(e) => setDonateProducts({ ...donateproducts, name: e.target.value })}
                            name='name'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Enter Your Name'
                        />
                    </div>
                    <div>
                        <input type="email"
                            value={donateproducts.email}
                            onChange={(e) => setDonateProducts({ ...donateproducts, email: e.target.value })}
                            name='email'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Enter Your Email'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={donateproducts.phoneno}
                            onChange={(e) => setDonateProducts({ ...donateproducts, phoneno: e.target.value })}
                            name='phoneno'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Enter Your Phone Number'
                        />
                    </div>
                    <div>
                        <input type="text"
                            value={donateproducts.type}
                            onChange={(e) => setDonateProducts({ ...donateproducts, type: e.target.value })}
                            name='type'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product Type (eg. E-waste , Cloths ,Plastic Waste )'
                        />
                    </div>
                    <div>
                        <input type="number"
                            min={1}
                            max={10}
                            value={donateproducts.quantity}
                            onChange={(e) => setDonateProducts({ ...donateproducts, quantity: e.target.value })}
                            name='quantity'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Quantity (in kg)'
                        />
                    </div>
                    <div>
                        <textarea cols="30" rows="5"
                         value={donateproducts.address}
                         onChange={(e) => setDonateProducts({ ...donateproducts, address: e.target.value })}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Address'
                            name="address"
                            >
                           
                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                        onClick={donatingProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DonateProduct