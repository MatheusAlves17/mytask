import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TasksList } from "../tasks-list";
import { useState } from "react";

export function Header() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([])
  function handleTaskAdd(){
    setTasks((prevState) => [...prevState, task])
    setTask('')
    console.log('tasks array', tasks)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./Logo.png")} style={styles.logo} />
        {/* <Text style={{color:'#fff'}}>{task}</Text> */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image source={require('./plus.png')}/>
            {/* <Plus style={{height:100, width: 100}}/> */}
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#1A1A1A'}}>
        </View>
      </View>
      <TasksList tasks={tasks}/>
    </View>
  );
}