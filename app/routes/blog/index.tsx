import * as useRemixToBuildBlog from './use-remix-to-build-blog.mdx';
import { type LoaderFunction, useLoaderData, Link } from 'remix';
function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes.meta,
    };
}

export const loader: LoaderFunction = () => {
    return [postFromModule(useRemixToBuildBlog)];
};
export default function BlogIndex() {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                        {post.description ? (
                            <p className='m-0 lg:m-0'>{post.description}</p>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
}
