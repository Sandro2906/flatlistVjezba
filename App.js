import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';

const DATACar = [
  {
    id:1,
    name:'BMW',
    price:'100$',
    image: require('./assets/pexels-maria-geller-2127039.jpg'),
  },  
  {
  id:2,
  name:'BMW',
  price:'102$',
  image: require('./assets/pexels-zhuzichun-14292717.jpg'),
  },  
];

const Cars = ({name, price, image}) => {
  return(
    <View style={styles.all}>
      <ImageBackground source={image} style={styles.image}/>
      <View style={styles.views}>
        <Text>{name}</Text>
        <Text>{price}</Text>
      </View>
  </View>
  )
};

export default function App() {

  const renderItem = ({item}) => (
    <Cars name={item.name} 
    price={item.price} 
    image={item.image} />
  )

  return (
    
    <View style={styles.container}>
      
      <FlatList 
      data={DATACar}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      />
     
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  image:{
    width:400,
    height:600,
    
  },
  all:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  views:{
    width:'100%',
    height:100,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute'
  }
});
