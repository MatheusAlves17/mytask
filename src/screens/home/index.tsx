import { View } from "react-native";
import { Header } from "../../components/header";
import { TasksList } from "../../components/tasks-list";

import { styles } from "./styles";
export function Home(){
    return(
        <View style={styles.container}>
            <Header/>
        </View>
    )
}