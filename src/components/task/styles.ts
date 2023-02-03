import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        minWidth: 327,
        maxWidth: 327,
        height: 64,
        padding: 8,
        backgroundColor: '#333333',
        borderRadius: 4,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskTitle:{
        marginLeft: 12,
        color: '#F2F2F2',
        fontSize: 14,
        textAlign: 'center',

    }
})