import Avatar from '~assets/images/avatar.jpg';
import { Quotations } from '../Home.data';

const randomQuotations =
    Quotations[Math.floor(Math.random() * Quotations.length)];

export const DeveloperInfoFC = () => {
    return (
        <div className='p-8 flex gap-x-16 quotations'>
            <div className='w-80 h-80'>
                <img src={Avatar} alt='avatar' />
            </div>
            <div>
                <div className='text-white w-2/3'>
                    <p className='text-6xl leading-relaxed text-show-rgb'>
                        {randomQuotations.content}
                    </p>
                    <p className='text-3xl text-right text-slate-300'>
                        {randomQuotations.original}
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
