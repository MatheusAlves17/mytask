import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  headerInfoTasks: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  boxLeftInfo: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginLeft: 35,
  },
  boxLeftText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  boxRightInfo: {
    flexDirection: 'row',
    marginLeft: 160,
  },
  boxRightText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  boxCountTasks: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    padding: 2,
    width: 25,
    height: 19,
    textAlign: "center",
    borderRadius: 99,
  },
  listTasks:{
    alignItems: 'center'
  }
});
