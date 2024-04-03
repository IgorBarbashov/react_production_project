type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods?: Mods | string[], additional?: string[]): string;

export function classNames(cls: string, additional?: string[]): string;

export function classNames(cls: string, mods?: Mods | string[], additional?: string[]): string {
    if (!mods) {
        return cls;
    }

    if (Array.isArray(mods)) {
        return [cls, ...mods].join(' ');
    }

    return [
        cls,
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([key]) => key),
        ...(additional || []).filter(Boolean),
    ].join(' ');
}
