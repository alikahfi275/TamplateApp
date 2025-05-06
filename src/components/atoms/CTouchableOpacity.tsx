import React, {FC, useMemo} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {getSpacingStyle} from '../../utils/helpers';
import {TouchableOpacityProps} from './type';

const CTouchableOpacity: FC<TouchableOpacityProps> = props => {
  const {
    children,
    style,
    borderRadius,
    flex,
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
    alignItems,
    justifyContent,
    flexDirection,
    onPress,
    ...rest
  } = props;

  const marginValue = margin ?? 0;
  const paddingValue = padding ?? 0;

  const containerStyle = useMemo(() => {
    return {
      flex,
      borderRadius,
      backgroundColor,
      alignItems,
      justifyContent,
      flexDirection,
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
    flex,
    borderRadius,
    backgroundColor,
    alignItems,
    justifyContent,
    flexDirection,
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

  return (
    <TouchableOpacity
      {...rest}
      onPress={onPress}
      style={[containerStyle, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default CTouchableOpacity;
