import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../app/Routes';
import {Headers} from '../components/molecules';
import {HeaderBackButton} from '@react-navigation/elements';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Headers
        title="Home"
        headerLeft={() => (
          <HeaderBackButton onPress={() => navigation.goBack()} />
        )}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate(Routes.Detail)}
          title="Detail"
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
