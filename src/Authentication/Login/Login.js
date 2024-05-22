import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Dimensions,
  Text,
  View as Box,
  TouchableOpacity as TouchableBox,
} from "react-native";
import Input from "./Input";
import Button from "./Button";
import { styles } from "./style";

const obj = {
  name: "John",
  name1: "",
  name2: "-",
  age: 30,
  address: {
    street: "",
    city: "New York",
    country: "-",
    zipcode: "10001",
  },
  hobbies: ["reading", "", "-"],
  contacts: [
    {
      type: "email",
      value: "john@example.com",
    },
    {
      type: "phone",
      value: "",
    },
    {
      type: "address",
      value: {
        street: "123 Main St",
        city: "",
        country: "-",
        zipcode: "",
      },
    },
  ],
};

const Login = ({ navigation }) => {
  const [emailAdd, setEmailAdd] = useState("");
  const [number, setNumber] = useState();
  const [IsScanner, setIsScanner] = useState(false);

  useEffect(() => {
    cleanObject();
  }, []);

  const validateString = (value) => {
    let newValue = "";
    if (value !== "" && value !== "-") {
      newValue = value;
    } else if (value === "-" || value === "") {
      newValue = null;
    }
    return newValue;
  };

  const validateObject = (val) => {
    const newObject = { ...val };
    Object.entries(val).forEach(([key, value]) => {
      if (value === "-" || value === "") {
        delete newObject[key];
      } else if (value !== "" && value !== "-") {
        newObject[key] = value;
      }
    });
    return newObject;
  };

  const validateArrayNew = (val) => {
    let newArr = [];
    val.filter((re, i) => {
      if (typeof val[i] == "object") {
        if (validateObject(re)) {
          newArr[i] = validateObject(re);
        }
      } else if (typeof val[i] == "string") {
        if (validateString(re)) {
          newArr[i] = re;
        }
      }
    });

    return newArr;
  };

  const validateArray = (val) => {
    let checkIfObj = false;
    checkIfObj =
      typeof val[0] === "string"
        ? false
        : typeof val[0] === "object"
          ? true
          : false;

    const newVal = [...val];

    val.map((e, i) => {
      let val = checkIfObj ? e.value : e;
      if (
        (typeof val === "string" && val === "-") ||
        (typeof val === "string" && val === "")
      ) {
        delete newVal[i];
      } else if (typeof val === "string" && val !== "" && val !== "-") {
        newVal[i] = checkIfObj ? { type: val } : val;
      } else if (typeof val === "object") {
        newVal[i].value = Array.isArray(val)
          ? validateArray(val)
          : validateObject(val);
      }
    });

    return newVal.filter((e) => e !== undefined);
  };

  const cleanObject = () => {
    let result = { ...obj };
    Object.entries(obj).forEach(([key, value]) => {
      switch (typeof value) {
        case "string":
          if (validateString(value) == null) {
            delete result[key];
          } else if (validateString(value) !== null) {
            result[key] = validateString(value);
          }
          break;
        case "object":
          if (Array.isArray(value)) {
            result[key] = validateArray(value);
          } else if (!Array.isArray(value)) {
            result[key] = validateObject(value);
          }
          break;

        default:
        // code block
      }
    });
    console.log("-----result------");
    console.log(result);
    console.log("-----result------");
  };

  return (
    <Box style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <KeyboardAvoidingView
        enabled
        style={{ flexGrow: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 50 : -20}
      >
        <ScrollView bounces={false} style={{ flex: 1 }}>
          <Image
            source={require("../../assets/logo/logo.png")}
            style={styles.logo}
          />
          <Box style={styles.imgBox}>
            <Image
              source={require("../../assets/loginImg/loginImg.png")}
              style={styles.Img}
            />
            <Box style={styles.round} />
          </Box>
          <Text style={styles.loginTxt}>Login</Text>
          <Input
            placeholder={"Enter Email"}
            // keyboardType={'number-pad'}
            style={{ marginBottom: 10 }}
            onChangeText={(val) => setEmailAdd(val.trim())}
          />
          <Input
            placeholder={"Enter Password"}
            keyboardType={"number-pad"}
            onChangeText={(val) => setNumber(val)}
          />
          <Text style={styles.orTxt}>Or</Text>
          <TouchableBox
            style={styles.scanBtn}
            onPress={() => setIsScanner(!IsScanner)}
          >
            <Text style={styles.scanTxt}>Scan QR Code</Text>
            <Image
              source={require("../../assets/scan/scan.png")}
              style={styles.scanIcon}
            />
          </TouchableBox>
        </ScrollView>
        <Box>
          <Button
            title={"Login"}
            BtnStyle={{
              marginBottom: 10,
              marginTop: 10,
              paddingVertical: 15,
            }}
            onPress={() => {}}
          />
        </Box>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default Login;
