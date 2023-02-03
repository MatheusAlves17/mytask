import { Alert, FlatList, Text, View } from "react-native";
import { Task } from "../task";
import { styles } from "./styles";

type TTaskListProp = {
  tasks: string[];
};

export function TasksList({ tasks }: TTaskListProp) {
  function handleOnRemoveTask(title: string){
    console.log('handleOnRemoveTask',title)
    Alert.alert(
      "Confirma exclusão?", `Tem certeza que deseja remover ~${title} da lista de tarefas?`,[
        {
          text: 'Sim',
          // onPress:() => 
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerInfoTasks}>
        <View style={styles.boxLeftInfo}>
          <Text style={styles.boxLeftText}>Criadas</Text>
          <Text style={styles.boxCountTasks}>0</Text>
        </View>
        <View style={styles.boxRightInfo}>
          <Text style={styles.boxRightText}>Concluídas</Text>
          <Text style={styles.boxCountTasks}>0</Text>
        </View>
      </View>
      <View style={styles.listTasks}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task title={item} onRemove={() => handleOnRemoveTask(item)}/>
          )}
        />
      </View>
    </View>
  );
}
