import type { FC } from 'react';

export const PostTitleFC: FC = (props) => (
    <h1 className='font-medium'>{props.children}</h1>
);
