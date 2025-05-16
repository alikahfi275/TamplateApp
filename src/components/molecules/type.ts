import {ReactNode} from 'react';

export interface HeadersProps {
  title?: string | undefined;
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
  headerLeft?: () => ReactNode;
  headerRight?: () => ReactNode;
  headerBackgroundColor?: string;
  headerTitleAlign?: 'left' | 'center';
}
