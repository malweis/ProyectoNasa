



 
        import React, { useEffect, useState } from 'react';
        import { View, Text , StyleSheet} from 'react-native';
        import { Header, HistoricView, Iotd } from '../../components';
import { PictureOfTheDay } from './types';

    

        const Home = () => {
            const [pictureOfTheDay, setPictureOfTheDay] = useState<PictureOfTheDay | undefined>();

            useEffect(() => {
                const fetchPictureOfTheDay = async () => {
                    try {
                        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Pt4lvp9GiaSv02dvbMe4RR1ZnCXQW9XLVv8knBef');
                        const data = await response.json();
                        setPictureOfTheDay(data);
                        console.log('Picture of the day:', data)
                    } catch (error) {
                        console.error('Error fetching picture of the day:', error);
                    }
                };


                fetchPictureOfTheDay();

            }, []);

            return (
                <View style={styles.containerMain}  >
                    <Header />
                    <Iotd picture={pictureOfTheDay} />
                    <HistoricView />
                </View>
            );



        };

        const styles = StyleSheet.create({
            containerMain: {
                flexDirection: 'column',
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(7,26,93,255)",
            },
            
        });

        export default Home;

