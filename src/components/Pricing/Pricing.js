import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {id: 1, name: 'Free', price: 0, features : [
            'Basic Features',
            'Awesome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will never use features',
            'Hudai Features',
            'Ajaira Features'
        ]},
        {id: 2, name: 'Medium', price: 9.99, features : [
            'Standard Features',
            'Awesome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will never use features',
            'Hudai Features',
            'Ajaira Features'
        ]},
        {id: 3, name: 'Premium', price: 19.99, features : [
            'Premium Features',
            'Awesome Features',
            'Extra Features',
            'Unnecessary Features',
            'Will never use features',
            'Hudai Features',
            'Ajaira Features'
        ]},
    ]
    return (
        <div>
            <h2 className='font-bold bg-indigo-400 text-5xl p-12 text-white'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    pricingOption.map(option => 
                    <PriceOption 
                        key={option.id} 
                        option={option}>
                    </PriceOption>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Pricing;