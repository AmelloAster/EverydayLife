import type { FC } from 'react';

interface Props {
    type: string;
    date: string;
}

export const PostTagFC: FC<Props> = (props) => {
    const { type = 'JS', date } = props;
    return (
        <div className='mb-4 text-base'>
            <span className={`tag-${type} mr-4 inline-block`}>{type}</span>
            <span className='text-gray-500'>{date}</span>
        </div>
    );
};
