import styles from 'highlight.js/styles/base16/ia-light.css';
import { Outlet, type LinksFunction } from 'remix';
import NavBackFC from '~views/blog/components/NavBack';
export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: styles,
    },
];

export default function Blog() {
    return (
        <>
            <NavBackFC />
            <div className='flex justify-center bg-post h-full overflow-hidden overflow-y-auto'>
                <div className='prose prose-neutral lg:prose-xl py-10'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
