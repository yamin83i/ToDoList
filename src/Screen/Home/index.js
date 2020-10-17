import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

class Home extends React.Component {
  state = {
    data: [],
    input: '',
  };
  adddata = () => {
    const adddata = this.state.input;
    this.state.data.push(adddata);
    this.setState({
      data: this.state.data,
      input: '',
    });
  };
  delete = (element) => {
    const remove = element;
    const datafilter = this.state.data.filter((value, key) => {
      return remove != key;
    });
    this.setState({data: datafilter});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 30, color: '#444444'}}>To Do List</Text>
        </View>
        <ScrollView style={{flex: 1}}>
          {this.state.data.map((value, key) => {
            return (
              <View style={styles.inputbox} key={key}>
                <View style={{width: '5%', backgroundColor: '#0A9EBE'}}></View>
                <View
                  style={{width: '80%', justifyContent: 'center', padding: 5}}>
                  <Text>{value}</Text>
                </View>
                <View style={styles.delete}>
                  <Icon
                    name="trash-2"
                    size={34}
                    color="#FFFFFF"
                    onPress={() => this.delete(key)}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.indata}>
          <View style={styles.end}>
            <TextInput
              style={styles.inputtext}
              value={this.state.input}
              onChangeText={(teks) => this.setState({input: teks})}
              placeholder="Tulis Kegiatan"
            />

            <View>
              <Icon
                color="#0A9EBE"
                name="plus-square"
                size={34}
                onPress={() => this.adddata()}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    elevation: 5,
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  indata: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    elevation: 30,
  },
  inputbox: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    elevation: 5,
  },
  inputtext: {
    height: 39,
    borderColor: 'gray',
    borderWidth: 1,
    width: '85%',
    marginRight: 10,
    borderRadius: 13,
    padding: 7,
  },
  end: {
    width: '95%',
    alignItems: 'center',
    flexDirection: 'row',
    height: '8%',
    justifyContent: 'center',
  },
  delete: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A90101',
  },
});
