import { type FC, useMemo } from 'react';

interface Props {
    color?: 'yellow' | 'blue' | 'green' | 'red' | 'purple';
}

export const MarkFC: FC<Props> = (props) => {
    const { children, color = 'yellow' } = props;
    const colorType = useMemo(() => {
        switch (color) {
            case 'red':
                return 'bg-red-100 text-red-800';
            case 'blue':
                return 'bg-blue-100 text-blue-800';
            case 'green':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-yellow-100 text-orange-800';
        }
    }, [color]);
    return (
        <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded ${colorType}`}>
            {children}
        </span>
    );
};
export default MarkFC;
