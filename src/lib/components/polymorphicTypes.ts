import type {
  ElementType,
  ComponentProps,
  JSXElementConstructor,
  ComponentPropsWithRef,
  ReactElement,
} from 'react';

/**
 * Forwarding refs with polymorphic React components in Typescript
 * Article: https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript
 */

/**
 * A more precise version of the React.ComponentPropsWithoutRef
 * Source: https://github.com/emotion-js/emotion/blob/main/packages/react/types/helper.d.ts
 */
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<C, ComponentProps<C>>;

/**
 * An override of the default HTML tag.
 * Can also be another React component.
 */
type AsProp<C extends ElementType> = {
  as?: C;
};

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {},
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 */
export type InheritableElementProps<
  C extends ElementType,
  Props = {},
> = ExtendableProps<PropsOf<C>, Props>;

/**
 * Returns the type of the `ref` prop for the polymorphic component.
 */
export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>['ref'];

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `as` prop will determine which props can be included.
 */
export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {},
> = InheritableElementProps<C, Props & AsProp<C>>;

/**
 * A wrapper of `PolymorphicComponentProps` that also includes the `ref`
 * prop for the polymorphic component.
 */
export type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  Props = {},
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

/**
 * Component that can be polymorphic and handle `as` and `ref` props.
 */
export type PolymorphicComponentWithRef<T extends ElementType, Props = {}> = <
  C extends ElementType = T,
>(
  props: PolymorphicComponentPropsWithRef<C, Props>,
) => ReactElement | null;
