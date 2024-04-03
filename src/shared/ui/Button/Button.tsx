import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

type IButtonVariant = 'clear';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: IButtonVariant;
}

export const Button: FC<IButtonProps> = (props): JSX.Element => {
    const {
        children,
        className,
        variant = 'clear',
        ...restProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[variant]])}
            {...restProps}
        >
            {children}
        </button>
    );
};
