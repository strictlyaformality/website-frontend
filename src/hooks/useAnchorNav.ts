import { useState, useRef, useEffect } from 'react';

export type AnchorNavNode = {
    id: string,
    label: string,
    offset: number,
    scrollTo: () => void,
    children: AnchorNavNode[],
    isRoot: boolean
}

function getAnchoredChildren(dataAttribute: string, root: HTMLElement, el: HTMLElement): AnchorNavNode {
    // get the node label from its data attribute
    const label = el.getAttribute(dataAttribute)??"";
    // determine if the current node is the root based on the presence of a label (data attribute)
    const isRoot = !label;
    // get top offset of the root to compute current node offset
    const rootOffset = root.offsetTop;
    // compute current node offset using root offset
    const offset = el.offsetTop - rootOffset;

    // construct the current nav node
    let item: AnchorNavNode = {
        label,
        isRoot,
        offset,
        id: el.id,
        scrollTo: () => root.scrollTop = offset,
        children: []
    };
    
    
    el  // get all direct children in the current scope
        .querySelectorAll(`:scope > [id][${dataAttribute}]`)
        // construct nav nodes from the selected elements
        .forEach(el => {
            item.children.push(getAnchoredChildren(dataAttribute, root, el as HTMLElement))
        });

    return item;
}

export default function useAnchorNav(dataAttribute: string) {
    const container = useRef<any>(null);
    const [tree, setTree] = useState<AnchorNavNode | null>(null);

    useEffect(() => {
        if (container.current) {
            setTree(getAnchoredChildren(dataAttribute, container.current, container.current));
        }
    }, [container.current])

    return {
        container,
        tree
    }
}