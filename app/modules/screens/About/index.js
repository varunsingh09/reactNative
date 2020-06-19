import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../../styles/index';

class About extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'Ben',
      },
      {
        id: 1,
        name: 'Susan',
      },
      {
        id: 2,
        name: 'Robert',
      },
      {
        id: 3,
        name: 'Mary',
      }
    ]
  }
  onAlertItem = (item) => {
    console.warn(item.name)
  }
  render() {
    return (
      <View>
        {
          this.state.names.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerList}
              onPress={() => this.onAlertItem(item)}>
              <Text style={styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}
export default About
