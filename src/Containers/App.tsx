import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const list: Array<string> = ['hii', 'bii', 'lii', 'nii', 'dii'];

const App = () => {

    const showList = list.map((item, idx) => (<Text key={idx}>{item}</Text>));

    return (
        <View style={styles.container}>
            <Text>Hello Linoy!</Text>
            {showList}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;