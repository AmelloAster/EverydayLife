import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
import TailwindStyles from './tailwind.css';
import HomeStyles from './styles/home.css';
import IndexStyles from './styles/index.css';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: TailwindStyles },
        { rel: 'stylesheet', href: HomeStyles },
        { rel: 'stylesheet', href: IndexStyles },
    ];
};

export const meta: MetaFunction = () => {
    return { title: `性空山's Developer Blog` };
};

export default function App() {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body className='bg-main' style={{ padding: 28 }}>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}
