import { useLoaderData, Link } from 'remix';

export const PostListFC = () => {
    const posts = useLoaderData();

    return (
        <div className='p-8'>
            <div className='grid grid-cols-4 border border-neutral-500 border-b-0 '>
                {posts?.map((post: any) => (
                    <div
                        key={post.slug}
                        className='post-item w-80 h-80 border border-neutral-500 border-t-0 border-l-0 p-4 flex flex-col'>
                        <div className='meta'>
                            <p className={`tag-${post.tag}`}>{post.tag}</p>
                            <p className='text-gray-400'>{post.date}</p>
                        </div>
                        <div className='title text-stone-300 text-2xl self-center leading-snug w-3/4 text-center mt-12'>
                            <Link to={`blog/${post.slug}`}>{post.title}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PostListFC;
