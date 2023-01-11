import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-6xl font-bold text-white'>{option.price}</span> <span className='text-2xl text-gray-200'>/mon</span></h3>
                <p className='text-3xl py-4'>{option.name}</p>
            </div>
            <div>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-indigo-700 hover:bg-indigo-900 transition-all w-full text-white font-bold text-2xl rounded-md py-2 mt-4'>Buy Now</button>
        </div>
    );
};

export default PriceOption;