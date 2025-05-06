import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {getSpacingStyle} from '../../utils/helpers';
import {ViewProps} from './type';

const CView: FC<ViewProps> = props => {
  const {
    children,
    style,
    borderRadius,
    flex,
    backgroundColor = '#FFFFFF',
    borderWidth,
    borderColor,
    flexDirection,
    alignItems,
    justifyContent,
    margin,
    padding,
    marginBottom,
    marginTop,
    marginVertical,
    marginHorizontal,
    marginRight,
    marginLeft,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingHorizontal,
    paddingVertical,
  } = props;

  const marginValue = margin ?? 0;
  const paddingValue = padding ?? 0;

  const viewStyle = useMemo(() => {
    return {
      flex,
      backgroundColor,
      borderRadius: borderRadius ?? 0,
      borderWidth,
      borderColor,
      flexDirection,
      alignItems,
      justifyContent,
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
    flex,
    backgroundColor,
    borderRadius,
    borderWidth,
    borderColor,
    flexDirection,
    alignItems,
    justifyContent,
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

  return <View style={[viewStyle, style]}>{children}</View>;
};

export default CView;
