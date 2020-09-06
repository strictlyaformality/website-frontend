import { useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce'

type Args = {
    type: string,
    handler: (e: Event) => void;
    selector?: string,
    debounce?: number;
}

export function useEventListener({ selector, type, ...args }: Args) {
    const handler = useCallback(args.debounce ? debounce(args.handler, args.debounce) : args.handler, [args.handler]);

    useEffect(() => {
        const el = selector ? document.querySelector(selector) : window;
        el?.addEventListener(type, handler)

        return () => el?.removeEventListener(type, handler);
    }, [selector, type, handler])
}