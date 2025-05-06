import {ReactNode} from 'react';
import {
  TextStyle,
  TouchableOpacityProps as TouchableProps,
  ViewStyle,
} from 'react-native';

export interface TextProps {
  children: any;
  fontSize?: number;
  color?: string;
  weight?: number;
  style?: ViewStyle | TextStyle;
  marginVertical?: number;
  marginHorizontal?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  margin?: number;
  padding?: number;
  maxWidth?: number;
  textAlign?: 'center' | 'left' | 'right';
  onPress?: () => void;
}

export interface ViewProps {
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  borderRadius?: number;
  flex?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export interface TouchableOpacityProps extends TouchableProps {
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  borderRadius?: number;
  flex?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: string;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  flexDirection?: ViewStyle['flexDirection'];
}
