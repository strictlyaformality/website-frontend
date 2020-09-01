export function combineClassNames(...classNames: Array<string | undefined | null>): string {
    return classNames.filter(cn => !!cn).join(' ');
}