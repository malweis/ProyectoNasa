import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, HistoricView, Iotd} from '../../components';
import {format, sub} from 'date-fns';
import {PictureOfTheDay} from './types';
import { fetchData } from './utils';
const Home = () => {
  const [pictureOfTheDay, setPictureOfTheDay] = useState<
    PictureOfTheDay | undefined
  >();
  const [lastFiveDays, setLastFiveDays] = useState<PictureOfTheDay[]>([]);

 // Home.tsx


useEffect(() => {
  const fetchPictureOfTheDay = async () => {
    const data = await fetchData();
    setPictureOfTheDay(data);
    console.log('Picture of the day:', data);
  };

  const fetchLastFiveDays = async () => {
    const date = new Date();
    const formattedDate = format(date, 'yyyy-MM-dd');
    const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
    const data = await fetchData(`&start_date=${fiveDaysAgoDate}&end_date=${formattedDate}`);
    setLastFiveDays(data);
    console.log('data:', data);
    console.log('formattedDate:', formattedDate);
    console.log('fiveDaysAgoDate:', fiveDaysAgoDate);
  };

  fetchPictureOfTheDay();
  fetchLastFiveDays();
}, []);

  return (
    <View style={styles.containerMain}>
      <Header />
      <Iotd picture={pictureOfTheDay} />
      <HistoricView daysArray={lastFiveDays}  />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default Home;
