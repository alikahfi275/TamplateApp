import {ReactNode} from 'react';
import {
  TextInputProps as RNTextInputProps,
  TextProps as RNTextProps,
  ViewProps as RNViewProps,
  TextStyle,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface TextProps extends RNTextProps {
  children: ReactNode;
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

export interface ViewProps extends RNViewProps {
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

export interface TouchableOpacityProps extends RNTouchableOpacityProps {
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

export interface CTextInputProps extends RNTextInputProps {
  containerStyle?: ViewStyle | ViewStyle[];
  borderRadius?: number;
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
  fontSize?: number;
  color?: string;
  weight?: '400' | '500' | '600' | '700';
}
