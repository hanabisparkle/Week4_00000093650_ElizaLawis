import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5, 
    display: "flex"
  }, 
  card: {
    borderWidth: 1, 
    borderColor: "black",
    borderRadius: 8, 
    display: "flex", 
    flexDirection: "row",
    alignItems:"center",
    padding: 8, 
    width: 325,
    gap: 8,
  }, 
  avatar: {
    width: 75, 
    height: 75, 
    borderRadius: 999,
  }, 
  nameText: {
    fontWeight: "bold",
    color:"black"
  },
  emailText: {
    color: "black"
  }, 
  profileBackground: {
    tintColor: "yellow"
  }
});

export default styles;