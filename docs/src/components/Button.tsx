import clsx from 'clsx';

const variantStyles = {
  primary:
    'rounded-full bg-fuchsia-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-fuchsia-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-300/50 active:bg-fuchsia-500',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (
  | React.ComponentPropsWithoutRef<'a'>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
);

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(variantStyles[variant], className);

  return typeof props.href === 'undefined' ? (
    // @ts-ignore
    <button className={className} {...props} />
  ) : (
    // @ts-ignore
    <a className={className} {...props} />
  );
}
