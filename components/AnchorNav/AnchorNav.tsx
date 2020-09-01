import React from 'react';
import { AnchorNavNode } from 'hooks/useAnchorNav';

export type Props = {
    node: AnchorNavNode,
    rootClassName?: string,
    nodeClassName?: string
}

const AnchorNav: React.FC<Props> = props => {
    const { node, nodeClassName, rootClassName } = props;
    return <div className={node.isRoot ? rootClassName : nodeClassName}>
        {
            !node.isRoot &&
            <a href={`#${node.id}`}>{node.label}</a>
        }
        {node.children.map(n => <AnchorNav {...props} node={n} />)}
    </div>;
}

export default AnchorNav;