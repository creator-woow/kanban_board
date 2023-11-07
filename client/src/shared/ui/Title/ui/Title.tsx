import { FC, PropsWithChildren } from 'react';

interface ITitleProps extends PropsWithChildren {
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export const Title: FC<ITitleProps> = (props) => {
  const {
    className,
    children,
    as: Tag = 'h1'
  } = props;
  return (
    <Tag className={className}>
      {children}
    </Tag>
  )
}
