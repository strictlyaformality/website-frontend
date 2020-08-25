import React from 'react';

export const dataAttribute = 'data-anchor';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    tag?: string,
    id: string,
    anchorLabel: string
}

const Anchored: React.FC<Props> = props => {
    const { anchorLabel, tag, ...divProps } = props;

    return React.createElement(tag!, {
        ...divProps,
        [dataAttribute]: anchorLabel
    }, props.children)
}

Anchored.defaultProps = {
    tag: 'div'
}

export default Anchored;