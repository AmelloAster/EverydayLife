import HomeFC from '~/views/home/index';
import * as useRemixToBuildBlog from './blog/use-remix-to-build-blog.mdx';
import { type LoaderFunction } from 'remix';
function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}

export const loader: LoaderFunction = () => {
    return [postFromModule(useRemixToBuildBlog)];
};

export default function Index() {
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
            <HomeFC />
        </div>
    );
}
