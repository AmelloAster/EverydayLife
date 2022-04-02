import type { VFC } from 'react';

import { PostTitleFC, PostTagFC } from '~/components/post';

interface Props {
    tag: string;
    date: string;
    title: string;
}

export const PostHeaderFC: VFC<Props> = (props) => {
    const { tag, date, title } = props;
    return (
        <>
            <PostTagFC type={tag} date={date} />
            <PostTitleFC>{title}</PostTitleFC>
        </>
    );
};

export default PostHeaderFC;
