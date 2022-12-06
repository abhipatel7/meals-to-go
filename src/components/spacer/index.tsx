import React from 'react';
import styled, { useTheme } from 'styled-components/native';

interface SpacerViewProps {
  variant: string;
}

interface Props {
  position: 'top' | 'left' | 'bottom' | 'right';
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const sizeVariant = { small: 1, medium: 2, large: 3 };

const positionVariant = {
  top: 'marginTop',
  bottom: 'marginBottom',
  left: 'marginLeft',
  right: 'marginRight',
};

const getVariant = (position: Props['position'], size: Props['size'], space: string[]) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];

  return `${property}:${space[sizeIndex]}`;
};

const SpacerView = styled.View<SpacerViewProps>`
  ${({ variant }) => variant};
`;
export const Spacer = ({ position, size, children }: Props) => {
  const { space } = useTheme();
  const variant = getVariant(position, size, space);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
