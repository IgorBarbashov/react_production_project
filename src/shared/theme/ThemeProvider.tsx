import { useMemo, useState, FC } from 'react';
import { ThemeContext, THEME, LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const defaultProviderValue = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
};
