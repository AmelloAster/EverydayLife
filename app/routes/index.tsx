import HomeFC from '~/views/home/index';
import * as useRemixToBuildBlog from './blog/use-remix-to-build-blog.mdx';
import * as aboutJavascriptThis from './blog/about-javascript-this.mdx';
import * as arrayTraversal from './blog/array-traversal.mdx';
import * as worthyOfTheName from './blog/worthy-of-the-name.mdx';
import { type LoaderFunction } from 'remix';

function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}

export const loader: LoaderFunction = () => {
    return [
        postFromModule(useRemixToBuildBlog),
        postFromModule(aboutJavascriptThis),
        postFromModule(arrayTraversal),
        postFromModule(worthyOfTheName),
    ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
            <HomeFC />
        </div>
    );
}
