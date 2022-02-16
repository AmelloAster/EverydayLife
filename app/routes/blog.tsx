import styles from 'highlight.js/styles/base16/atelier-plateau-light.css';
import { Outlet, type LinksFunction } from 'remix';

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: styles,
    },
];

export default function Blog() {
    return (
        <div className='flex justify-center bg-post h-full'>
            <div className='prose lg:prose-xl py-10'>
                <Outlet />
            </div>
        </div>
    );
}
