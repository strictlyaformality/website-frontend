import React from 'react';
import AnchorNav, { Props as AnchorNavProps } from './AnchorNav';
import useAnchorNav from '@hooks/useAnchorNav';
import { dataAttribute } from './Anchored';
import { combineClassNames } from '@styles/utilities';
import './anchor-nav-view.scss';

export { default as Anchored, dataAttribute } from './Anchored';
export { default as AnchorNav } from './AnchorNav';

type Props = Omit<AnchorNavProps, "node"> & {
    containerClassName?: string,
    viewClassName?: string
}

const AnchorNavView: React.FC<Props> = props => {
    const { container, tree } = useAnchorNav(dataAttribute)

    return <div className={combineClassNames('anchor-nav-view', props.containerClassName)}>
        {
            tree &&
            <AnchorNav
                rootClassName={combineClassNames('anchor-nav-view__nav', props.rootClassName)}
                nodeClassName={combineClassNames('anchor-nav-view__node', props.nodeClassName)}
                node={tree}
            />
        }
        <div ref={container} className={combineClassNames('anchor-nav-view__view', props.viewClassName)}>
            {props.children}
        </div>
    </div>
}

export default AnchorNavView;