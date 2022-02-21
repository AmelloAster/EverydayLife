import { useState, useEffect } from 'react';
import { useTransition } from 'remix';

import Avatar from '~assets/images/avatar.jpg';

import type { Home } from '../Home.type';
import { quotationsList } from '../Home.data';

export const DeveloperInfoFC = () => {
    const [randomQuotations, setRandomQuotations] =
        useState<Home.QuotationsListItem>();
    const transition = useTransition();
    useEffect(() => {
        setRandomQuotations(
            quotationsList[Math.floor(Math.random() * quotationsList.length)],
        );
    }, [transition.state]);
    return (
        <div className='p-8 flex gap-x-16 quotations'>
            <div className='w-80 h-80'>
                <img className='h-full max-w-max' src={Avatar} alt='avatar' />
            </div>
            <div className='flex flex-col justify-between'>
                <div className='text-white w-3/4'>
                    <p className='text-5xl leading-relaxed text-show-rgb'>
                        {randomQuotations?.content}
                    </p>
                    <p className='text-3xl text-right text-slate-300'>
                        {randomQuotations?.original}
                    </p>
                </div>
                <div className='mt-16 text-2xl text-slate-500'>
                    Front-end developer：性空山
                </div>
            </div>
        </div>
    );
};
export default DeveloperInfoFC;
