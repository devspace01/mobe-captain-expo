import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131313",
    paddingHorizontal: 15,
  },
  mainContainer: { flex: 1, height: 100, backgroundColor: "#131313" },

  logo: {
    alignSelf: "flex-end",
    width: 40,
    height: 65,
    resizeMode: "contain",
    marginTop: 35,
  },
  imgBox: {
    position: "relative",
    width: 290,
    height: 290,
    alignSelf: "center",
    marginTop: -10,
  },
  Img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  round: {
    width: "90%",
    height: "90%",
    borderColor: "#EB9E4C",
    borderWidth: 1,
    borderRadius: 500 / 2,
    position: "absolute",
    left: "5%",
    right: 0,
    top: "5%",
    bottom: 0,
  },
  loginTxt: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    marginTop: 30,
    marginBottom: 20,
  },
  orTxt: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  scanBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "33%",
    alignSelf: "center",
    marginBottom: 30,
  },
  scanTxt: {
    color: "#EB9E4C",
    marginRight: 10,
    paddingVertical: 10,
  },
  scanIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
