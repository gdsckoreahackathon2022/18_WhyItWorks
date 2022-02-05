import { useEffect, useState } from 'react';
import { View } from 'react-native';
import {fbaseFirestore} from '../firebaseSettings'
import { StyleSheet, ActivityIndicator, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { Image} from 'react-native-elements'
import ViewImage from './1'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const gps = 'FKM36xefK4kXFeMkJtzq'
const DataFetch = ({navigation}) => {
    const [dataFetched, setDataFetched] = useState(false);
    const [photoList, setPhotoList] = useState([]);
    const onPress = uri => {
      return (
        <View>
          <ViewImage/>
        </View>
      )
    }
    useEffect(() => {
        const getData = async () => {
           try {
            const documentRef = doc(fbaseFirestore, `location/${gps}`);
            const someList = (await getDoc(documentRef)).data().loc;
            setPhotoList(someList);
            setDataFetched(true);
           } catch(error) {
               console.log('error \n' + error);
           }
        }

        getData();
    }, [dataFetched]);
    const [loading, setLoading] = useState(false);
    return (
      <View>
        {dataFetched ? (
          <ScrollView
          style={styles.ImageContainer}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          horizontal={false}
        >
          {photoList.map((image, i) => {
            return (
              <View
                style={{
                  padding: 10,
                }}
                key={i}
              >
                <TouchableOpacity onPress={() => navigation.push('detail',{img: image})}>
                <Image
                  source={{ uri: image }}
                  style={[
                    {
                      padding: 10,
                      width: Dimensions.get('window').width/3+20,
                      height: Dimensions.get('window').width/3,
                    },
                  ]}
                  resizeMode="center"
                  onLoadStart={() => setLoading(true)}
                  onLoadEnd={() => setLoading(false)}
                />
                {loading && <ActivityIndicator color="green" size="large" />}
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        // <SafeAreaView >
        //     <FlatList
        //   data={[...photoList].map((res) => res)}
        //   style={styles.list}
        //   numColumns={1}
        //   keyExtractor={(e) => e}
        //   renderItem={({ item }) => (
        //     <Image
        //       source={{ uri: item }}
        //       containerStyle={styles.item}
        //       PlaceholderContent={<ActivityIndicator />}
        //     />
        //   )}
        // />
        //   </SafeAreaView>
          ) :
            (<View 
            style={{
                flex: 1,
                color: '#000',
            }}></View>)
        }
      </View>
    );
}
const styles = StyleSheet.create({
    list: {
      paddingBottom: 200,
      width: '100%',
      backgroundColor: '#000',
    },
    item: {
      aspectRatio: 1,
      width: '100%',
      flex: 1,
    },
    ImageContainer: {
      marginHorizontal: 16,
      marginTop: 30,
      width: "100%",
    },
    Image: {
      shadowColor: "black",
      shadowOffset: {
        width: -10,
        height: 9,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation:5
    },
  });

export default DataFetch;