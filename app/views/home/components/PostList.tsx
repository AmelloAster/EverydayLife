import { useLoaderData, Link } from 'remix';

export const PostListFC = () => {
    const posts = useLoaderData();

    return (
        <div className='p-8'>
            <div className='grid grid-cols-4'>
                {posts?.map((post: any) => (
                    <div
                        key={post.slug}
                        className='post-item h-96 border border-neutral-500 p-4 flex flex-col hover:scale-105 transition-all bg-main ease-in'>
                        <div className='meta'>
                            <p className={`tag-${post.tag}`}>{post.tag}</p>
                            <p className='text-gray-400'>{post.date}</p>
                        </div>
                        <div className='title text-stone-300 text-2xl self-center leading-snug w-3/4 text-center mt-20'>
                            <Link to={`blog/${post.slug}`}>{post.title}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PostListFC;
