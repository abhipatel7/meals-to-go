import styled, { DefaultTheme } from "styled-components/native";

interface Props {
  variant?: "body" | "hint" | "error" | "caption" | "label";
  center?: boolean;
}

const defaultTextStyles = ({ fonts, fontWeights, colors }: DefaultTheme) => `
  font-family: ${fonts.body};
  font-weight: ${fontWeights.regular};
  color: ${colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = ({ fontSizes }: DefaultTheme) => `
    font-size: ${fontSizes.body};
`;

const hint = ({ fontSizes }: DefaultTheme) => `
    font-size: ${fontSizes.body};
`;

const error = ({ colors }: DefaultTheme) => `
    color: ${colors.text.error};
`;

const caption = ({ fontSizes, fontWeights }: DefaultTheme) => `
    font-size: ${fontSizes.caption};
    font-weight: ${fontWeights.bold};
`;

const label = ({ fonts, fontSizes, fontWeights }: DefaultTheme) => `
    font-family: ${fonts.heading};
    font-size: ${fontSizes.body};
    font-weight: ${fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text<Props>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }) => variants[variant](theme)}
`;
