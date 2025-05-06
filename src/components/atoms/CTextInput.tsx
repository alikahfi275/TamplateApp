import React, {FC, useMemo} from 'react';
import {TextInput, ViewStyle, TextStyle} from 'react-native';
import {fontSizeScale, getSpacingStyle} from '../../utils/helpers';
import {CTextInputProps} from './type';

const CTextInput: FC<CTextInputProps> = props => {
  const {
    containerStyle,
    borderRadius,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginVertical,
    marginHorizontal,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    backgroundColor,
    fontSize,
    color,
    weight,
    ...rest
  } = props;

  const marginValue = margin ?? 0;
  const paddingValue = padding ?? 0;

  const containerStyles = useMemo(() => {
    return {
      borderRadius: borderRadius ?? 8,
      backgroundColor: backgroundColor ?? '#fff',
      ...getSpacingStyle({
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginVertical,
        marginHorizontal,
        marginValue,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingVertical,
        paddingHorizontal,
        paddingValue,
      }),
    } as ViewStyle;
  }, [
    borderRadius,
    backgroundColor,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginVertical,
    marginHorizontal,
    marginValue,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    paddingValue,
  ]);

  const inputStyles = useMemo(() => {
    return {
      fontSize: fontSize ? fontSizeScale(fontSize) : fontSizeScale(14),
      color: color ?? '#000',
      fontFamily: weight ? `Poppins-${weight}` : 'Poppins',
    } as TextStyle;
  }, [fontSize, weight, color]);

  return (
    <TextInput
      style={[inputStyles, containerStyles]}
      placeholderTextColor={'#888'}
      {...rest}
    />
  );
};

export default CTextInput;
