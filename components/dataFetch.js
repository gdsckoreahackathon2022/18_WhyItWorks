import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import {fbaseFirestore} from '../firebaseSettings'
import { StyleSheet, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import { collection, doc, getDoc } from 'firebase/firestore';
import { Image} from 'react-native-elements'
const gps = 'FKM36xefK4kXFeMkJtzq'
const DataFetch = () => {
    const [dataFetched, setDataFetched] = useState(false);
    const [photoList, setPhotoList] = useState([]);

    useEffect(() => {
        const getData = async () => {
           try {
            const documentRef = doc(fbaseFirestore, `location/${gps}`);
            console.log('before await')
            const someList = (await getDoc(documentRef)).data().loc;
            console.log('after await')
            setPhotoList(someList);
            console.log(photoList)
            setDataFetched(true);
           } catch(error) {
               console.log('error \n' + error);
           }
        }

        getData();
    }, [dataFetched]);

    return (
        <View>
        {dataFetched ? (
        <View>
            <FlatList
          data={[...photoList].map((res) => res)}
          style={styles.list}
          numColumns={1}
          keyExtractor={(e) => e}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              containerStyle={styles.item}
              PlaceholderContent={<ActivityIndicator />}
            />
          )}
        />
          </View>
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
      width: '100%',
      backgroundColor: '#000',
    },
    item: {
      aspectRatio: 1,
      width: '100%',
      flex: 1,
    },
  });

export default DataFetch;