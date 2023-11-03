import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
};

/**
 * 子要素を下からフェードインさせる
 *
 * @example
 * ```tsx
 * <FadeInBottom>
 *  <div>フェードインする要素</div>
 * </FadeInBottom>
 * ```
 */
export const FadeInBottom: React.FC<Props> = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: '-50px',
    triggerOnce: true,
  });

  const fadeInClassName = inView ? 'animate-fade-in-bottom' : 'opacity-0';

  const wrappedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const className = [child.props.className, fadeInClassName]
        .filter((el) => el)
        .join(' ');

      return React.cloneElement(child as React.ReactElement, {
        ref,
        className,
      });
    } else {
      return child;
    }
  });

  return <>{wrappedChildren}</>;
};
