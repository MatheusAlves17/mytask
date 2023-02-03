import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {styles} from './styles';

type TTaskProps={
    title: string
    onRemove: () => void;
}

export function Task({title, onRemove}:TTaskProps){
    return (
        <View style={styles.container}>
            <Text style={styles.taskTitle}>{title}</Text>
            <TouchableOpacity style={{marginLeft: 10, marginRight: 10}} onPress={onRemove}>
                <Image source={require('./trash.png')}/>
            </TouchableOpacity>
        </View>
    )
}