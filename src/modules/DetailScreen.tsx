import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../app/Routes';

const DetailScreen = (props: any) => {
  const navigation: any = useNavigation();

  console.log('props', props);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DEtail Screen</Text>
      <Button onPress={() => navigation.navigate(Routes.Home)} title="Home" />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
