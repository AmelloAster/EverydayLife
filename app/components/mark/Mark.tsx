import { type FC, useMemo } from 'react';

interface Props {
    bgColor?: string;
    textColor?: string;
}

export const MarkFC: FC<Props> = (props) => {
    const { children, bgColor = 'yellow', textColor = 'orange' } = props;
    const className = useMemo(
        () =>
            `px-2 inline-flex text-xs leading-5 font-semibold rounded bg-${bgColor}-100 text-${textColor}-800`,
        [bgColor, textColor],
    );
    return <span className={className}>{children}</span>;
};
export default MarkFC;
