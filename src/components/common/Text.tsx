// src/components/common/Text.tsx
import React from 'react';
import {Text as RNText} from 'react-native';

type TextProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'highlight' | 'heading' | 'secondary';
  style?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  variant = 'primary',
  style = '',
}) => {
  const textStyle =
    variant === 'highlight'
      ? 'text-fontHighlight font-body'
      : variant === 'heading'
      ? 'text-fontHeading font-heading text-2xl'
      : variant === 'secondary'
      ? 'text-fontSecondary font-body'
      : 'text-fontPrimary font-body';

  return <RNText className={`${textStyle} ${style}`}>{children}</RNText>;
};

export default Text;
