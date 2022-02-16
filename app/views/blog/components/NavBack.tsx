import { useTransition, Link } from 'remix';
import { useMemo } from 'react';

export const NavBackFC = () => {
    const transition = useTransition();
    const animation = useMemo(() => {
        console.log(transition.state);
        const className =
            'absolute left-0 w-full flex items-center justify-center transition-all';
        switch (transition.state) {
            case 'idle':
                return className + ' top-0 opacity-100';
            default:
                return className + ' top-2 opacity-0';
        }
    }, [transition.state]);

    const handleChangeNavBackPosition = () => {};
    return (
        <div className={animation} style={{ height: 28 }}>
            <Link to='/'>
                <div className='flex gap-2 text-zinc-500 hover:text-zinc-300 transition-all'>
                    <svg
                        className='icon icon-svg m-auto fill-current'
                        aria-hidden='true'>
                        <use xlinkHref='#icon-cc-arrow-left'></use>
                    </svg>
                    Backs
                </div>
            </Link>
        </div>
    );
};
export default NavBackFC;
