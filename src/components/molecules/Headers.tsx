import React from 'react';
import {Header} from '@react-navigation/elements';
import {StatusBar} from 'react-native';
import {CView} from '../atoms';
import {HeadersProps} from './type';

const Headers: React.FC<HeadersProps> = props => {
  const {
    title = '',
    backgroundColor = '#FFFFFF',
    barStyle = 'dark-content',
    headerLeft,
    headerRight,
    headerBackgroundColor = '#FFFFFF',
    headerTitleAlign = 'center',
    ...rest
  } = props;

  return (
    <CView>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <Header
        title={title}
        headerLeft={headerLeft}
        headerRight={headerRight}
        headerBackground={() => (
          <CView style={{backgroundColor: headerBackgroundColor}} />
        )}
        headerTitleAlign={headerTitleAlign}
        headerTitleContainerStyle={{
          alignItems: headerTitleAlign === 'center' ? 'center' : 'flex-start',
        }}
        {...rest}
      />
    </CView>
  );
};

export default Headers;
