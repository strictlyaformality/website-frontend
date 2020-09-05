export function combineClassNames(...classNames: Array<string | undefined | null | false>): string {
    return classNames.filter(cn => !!cn).join(' ');
}