import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import { Dimensions } from 'react-native'


function Arena() {

    const [textinBox, setTextinBox] = useState("");

    function getTextinBox(val) {
        setTextinBox(val)
    }

    function fetchApiCall() {
        console.log("API called")
        console.log("at... " + global.baseURLAndPort + "/")
        fetch(global.baseURLAndPort + "/", {
          "method": "GET",
          "headers": {
            "name": "haha..."
          }
        })
          .then(response => response.json())
          .then(response => {
            console.log(response.response);
            getTextinBox(response.response);
          })
          .catch(err => {
            console.log("OOPS")
            getTextinBox("Oops....");
          });
    }

    
const styles = StyleSheet.create({
    bigbox: {
        display: "flex",
        backgroundColor: "gray",
        height: Dimensions.get('window').height / 2,
        padding: "5%",
        margin: "5%",
        width: "100%"
    },
    imagebox: {
        display: "flex",
        height: "60%",
        backgroundColor: "black",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "gray"
    },
    textbox: {
        display: "flex",
        height: "30%",
        borderRadius: 20,
        borderWidth: 3,
        padding: "5%",
        backgroundColor: "white",
    },
    spacing: {
        display: "flex",
        height: "10%",
        backgroundColor: "gray",
    }

  });

    return(
        <View style={styles.bigbox}>
            <View style={styles.imagebox}>    
            </View>
            <View style={styles.spacing}>
            </View>
            <View style={styles.textbox}>
                <Text>{textinBox}</Text>
            </View>
            <View>
                <Button title="api call" onPress={fetchApiCall}></Button>
            </View>
        </View>
    )   
}

export default Arena;