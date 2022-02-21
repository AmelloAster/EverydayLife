import { useTransition, Link } from 'remix';
import { type MouseEvent, useMemo, useState, useEffect } from 'react';

import useDebounce from '~/hooks/useDebounce';

const padding = 28;
export const NavBackFC = () => {
    const transition = useTransition();
    const [scrollX, setScrollX] = useState(0);
    const [navScrollX, setNavScrollX] = useState(0);
    const [isOutNav, setIsOutNav] = useState(false);

    useEffect(() => {
        // console.log(Math.floor((window.innerWidth - 24 * 2) / 2));

        setNavScrollX(Math.floor((window.innerWidth - padding * 2) / 2));
    }, []);

    useDebounce(
        () => {
            if (
                scrollX > padding &&
                scrollX < window.innerWidth - padding &&
                !isOutNav
            ) {
                setNavScrollX(scrollX - 28);
            }
        },
        300,
        [scrollX],
    );
    const animation = useMemo(() => {
        // console.log(transition.state);
        const className =
            'absolute left-0 w-full flex items-center transition-all';
        switch (transition.state) {
            case 'idle':
                return className + ' top-0 opacity-100';
            default:
                return className + ' top-2 opacity-0';
        }
    }, [transition.state]);

    const handleChangeNavBackPosition = (e: MouseEvent) => {
        setIsOutNav(false);
        setScrollX(e.pageX);
    };

    const handleOutNavBack = () => {
        setIsOutNav(true);
        setNavScrollX(Math.floor((window.innerWidth - padding * 2) / 2));
    };

    return (
        <div
            className={animation}
            style={{ height: 28 }}
            onMouseMove={handleChangeNavBackPosition}
            onMouseLeave={handleOutNavBack}>
            <Link
                to='/'
                className='transition-all'
                style={{ left: navScrollX, position: 'relative' }}>
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
