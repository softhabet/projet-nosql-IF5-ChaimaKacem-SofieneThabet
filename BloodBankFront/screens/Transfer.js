import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StyledButtom, ButtomText, MsgBox } from "../components/styles";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { IP_ADRESS } from "@env";

const ipAdress = IP_ADRESS;
const Transfer = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const [category, setCategory] = useState("A");
  const [subCategory, setSubCategory] = useState("PLUS");
  const [city, setCity] = useState("Paris");
  const [inputFrom, setInputFrom] = useState(0);

  const [cityTo, setCityTo] = useState("ville");
  const [inputTo, setInputTo] = useState(0);

  const getQuantityP = async (pourcentage) => {
    try {
      const response = await fetch(
        `http://${ipAdress}:3000/api/v1/bank/${category}/${subCategory}/${city}/${pourcentage}`
      )
        .then((res) => res.json())
        .then((json) => {
          setInputFrom(json.quantity);
        });
    } catch (error) {
      console.log("error");
    }
  };
  const getQuantityTo = async (cityTo) => {
    try {
      const response = await fetch(
        `http://${ipAdress}:3000/api/v1/bank/${category}/${subCategory}/${cityTo}`
      )
        .then((res) => res.json())
        .then((json) => {
          setInputTo(json.quantity);
        });
    } catch (error) {
      console.log("error");
    }
  };
  const getQuantityFrom = async (city) => {
    try {
      const response = await fetch(
        `http://${ipAdress}:3000/api/v1/bank/${category}/${subCategory}/${city}`
      )
        .then((res) => res.json())
        .then((json) => {
          setInputFrom(json.quantity);
        });
    } catch (error) {
      console.log("error");
    }
  };
  
  
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const handleMessageDone = (message, type = "DONE") => {
    setMessage(message);
    setMessageType(type);
  };
  const handleMessageError = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  const transfer = async (category, subCategory, city, cityTo, inputFrom) => {
    try {
      const response = await fetch(
        `http://${ipAdress}:3000/api/v1/bank/transfer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: category,
            subCategory: subCategory,
            cityFrom: city,
            cityTo: cityTo,
            quantity: inputFrom,
          }),
        }
      );
      if (response.status == 200) {
        handleMessageDone("done");
        getQuantityTo(cityTo);
      } else if (response.status == 400) {
        handleMessageError("insufficient amount");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer</Text>
      <View style={styles.headerContainer}>
        <Picker
          selectedValue={category}
          style={{
            width: 150,
            flexWrap: "wrap",
            paddingRight: 5,
            color: "#fff",
          }}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
        >
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="AB" value="AB" />
          <Picker.Item label="O" value="O" />
        </Picker>
        <Picker
          selectedValue={subCategory}
          style={{
            width: 150,
            flex: 1,
            flexWrap: "wrap",
            paddingRight: 5,
            color: "#fff",
          }}
          onValueChange={(itemValue, itemIndex) => setSubCategory(itemValue)}
        >
          <Picker.Item label="PLUS" value="PLUS" />
          <Picker.Item label="MOINS" value="MOINS" />
        </Picker>
      </View>
      <View>
        <Text
          style={{
            paddingTop: 25,
            marginLeft: 10,
            fontSize: 20,
            color: "#fff",
          }}
        >
          FROM
        </Text>
        <View style={styles.headerContainer}>
          <Picker
            selectedValue={city}
            style={{ height: 10, width: 150, flexWrap: "wrap", color: "#fff" }}
            onValueChange={(itemValue, itemIndex) => {
              setCity(itemValue);
              getQuantityFrom(itemValue);
            }}
          >
            <Picker.Item label="Paris" value="Paris" />
            <Picker.Item label="Dijon" value="Dijon" />
            <Picker.Item label="Nice" value="Nice" />
            <Picker.Item label="Lille" value="Lille" />
          </Picker>
          <Text
            style={{
              paddingRight: 10,
              marginLeft: 170,
              marginTop: 15,
              color: "#fff",
            }}
          >
            {inputFrom}
          </Text>
        </View>
        <View
          style={{
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <StyledButtom onPress={() => getQuantityP(25)}>
            <ButtomText> 25% </ButtomText>
          </StyledButtom>
          <StyledButtom onPress={() => getQuantityP(50)}>
            <ButtomText>50%</ButtomText>
          </StyledButtom>
          <StyledButtom onPress={() => getQuantityP(75)}>
            <ButtomText>75%</ButtomText>
          </StyledButtom>
          <StyledButtom onPress={() => getQuantityP(100)}>
            <ButtomText>100%</ButtomText>
          </StyledButtom>
        </View>
        <View>
          <Text
            style={{
              paddingTop: 50,
              marginLeft: 10,
              fontSize: 20,
              color: "#fff",
            }}
          >
            TO
          </Text>
          <View style={styles.headerContainer}>
            <Picker
              selectedValue={cityTo}
              style={{
                height: 50,
                width: 150,
                flex: 1,
                flexWrap: "wrap",
                paddingRight: 5,
                color: "#fff",
              }}
              onValueChange={(itemValue, itemIndex) => {
                setCityTo(itemValue);
                getQuantityTo(itemValue);
              }}
            >
              <Picker.Item label="Ville" />
              <Picker.Item label="Paris" value="Paris" />
              <Picker.Item label="Dijon" value="Dijon" />
              <Picker.Item label="Nice" value="Nice" />
              <Picker.Item label="Lille" value="Lille" />
            </Picker>
            <Text
              style={{
                flex: 0,
                paddingRight: 10,
                marginLeft: 170,
                marginTop: 15,
                color: "#fff",
              }}
            >
              {inputTo}
            </Text>
          </View>
        </View>
      </View>
      <StyledButtom
        onPress={() => {
          transfer(category, subCategory, city, cityTo, inputFrom);
        }}
      >
        <ButtomText>Transferer</ButtomText>
      </StyledButtom>
      <MsgBox type={messageType}>{message}</MsgBox>
      <StyledButtom onPress={() => {navigation.navigate("StockAdmin")} }>
          <ButtomText>Quitter</ButtomText>
        </StyledButtom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    color: "#FA8072",
    paddingBottom: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Transfer;
