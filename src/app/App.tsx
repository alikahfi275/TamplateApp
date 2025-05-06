import React from 'react';
import CText from '../components/atoms/CText';
import CView from '../components/atoms/CView';
import CTouchableOpacity from '../components/atoms/CTouchableOpacity';
import CTextInput from '../components/atoms/CTextInput';

const App = () => {
  return (
    <CView flex={1}>
      <CText>Ap ssssp</CText>
      <CTouchableOpacity>
        <CText>Ap ssssp</CText>
      </CTouchableOpacity>
      <CTextInput placeholder="test" />
    </CView>
  );
};

export default App;
