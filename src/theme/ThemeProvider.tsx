import { useMemo, useState, FC } from "react";
import { ThemeContext, THEME } from './ThemeContext';

const defaultTheme = THEME.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const defaultProviderValue = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
};