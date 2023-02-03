import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    backgroundColor: '#1A1A1A',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'flex-start'
},
  header: {
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    width: '100%',
    height: 173
  },
  logo: {
    height: 32,
    width: 110.34,
    marginTop: 70,
    marginBottom: 40,
    position: 'relative'
  },
  form: {
    // width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 150
  },
  input: {
    backgroundColor: "#262626",
    color: '#f6f6f6',
    borderRadius: 6,
    padding: 16,
    height: 54,
    width: 271,
    marginRight: 4,
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
