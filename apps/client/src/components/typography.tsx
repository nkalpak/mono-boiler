import { Text, TextProps, ThemeUICSSProperties } from "theme-ui";
import React from "react";

type TypographyVariant =
  | "headline1"
  | "headline2"
  | "headline3"
  | "headline4"
  | "headline5"
  | "headline6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline";
type TypographyProps = TextProps & {
  variant: TypographyVariant;
};

/*
 * TODO: Implement styles for the variants
 *
 * Note: Don't add styles such as "color" to the variant styles,
 * these change based on the context that the element is rendered
 * in. Instead, use the variant styles to define the size, weight,
 * letter spacing and line height of the typography elements.
 */
const VARIANT_STYLES: Record<TypographyVariant, ThemeUICSSProperties> = {
  body1: {},
  body2: {},
  caption: {},
  headline1: {},
  headline2: {},
  headline3: {},
  headline4: {},
  headline5: {},
  headline6: {},
  overline: {},
  subtitle1: {},
  subtitle2: {},
};

const VARIANT_ELEMENT: Record<TypographyVariant, keyof React.ReactHTML> = {
  body1: "p",
  body2: "p",
  caption: "span",
  headline1: "h1",
  headline2: "h2",
  headline3: "h3",
  headline4: "h4",
  headline5: "h5",
  headline6: "h6",
  overline: "span",
  subtitle1: "span",
  subtitle2: "span",
};

/*
 * Component which should cover 80% of all typography uses.
 *
 * Uses the [Material type system](https://material.io/design/typography/the-type-system.html#type-scale).
 * Feel free to create your own type system, though keep in mind that it
 * should cover at least 80% of the typography uses in the project.
 */
function Typography({ variant, sx, ...props }: TypographyProps) {
  const as = VARIANT_ELEMENT[variant];
  const styles = VARIANT_STYLES[variant];

  return (
    <Text
      as={as}
      {...props}
      sx={{
        ...sx,
        ...styles,
      }}
    />
  );
}

export { Typography };
