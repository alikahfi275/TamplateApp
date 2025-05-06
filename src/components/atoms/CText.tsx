import React, {FC, useMemo} from 'react';
import {Text} from 'react-native';
import {TextProps} from './type';
import {fontSizeScale, getFontFamily} from '../../utils/helpers';
import {getSpacingStyle} from '../../utils/helpers';

const CText: FC<TextProps> = props => {
  const {
    marginVertical,
    marginHorizontal,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    children,
    fontSize,
    color,
    weight,
    margin,
    padding,
    maxWidth,
    textAlign,
    onPress,
    style,
    ...rest
  } = props;

  const marginValue = margin ?? 0;
  const paddingValue = padding ?? 0;

  const textStyle = useMemo(() => {
    return {
      fontSize: fontSizeScale(fontSize || 14),
      fontFamily: getFontFamily('Poppins', weight),
      color: color || '#000000',
      maxWidth: maxWidth,
      textAlign: textAlign,
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
    };
  }, [
    fontSize,
    weight,
    color,
    maxWidth,
    textAlign,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginVertical,
    marginHorizontal,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingVertical,
    paddingHorizontal,
    marginValue,
    paddingValue,
  ]);

  return (
    <Text {...rest} onPress={onPress} style={[textStyle, style]}>
      {children}
    </Text>
  );
};

export default CText;
