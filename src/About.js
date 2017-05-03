import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  Modal,
  Image,
  ListView
} from 'react-native'
import _ from 'lodash'
import LinearGradient from 'react-native-linear-gradient'

class About extends React.Component {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    const data = _.range(1, 500)

    this.state = {
      modalVisibility: true,
      dataSource: ds.cloneWithRows(data)
    }
  }
  renderList (rowData) {
    return (
      <View>
        <Image style={{height: 200, width: 300}}source={{uri: 'https://unsplash.it/200/300/?random'}} />
        <Text>{rowData}</Text>
      </View>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#5AD427', '#A4E786']}
          style={styles.container}
        >
          <Text>About Scene</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderList(rowData)}
          />
          <Button
            title='Show Modal'
            onPress={() => this.setState({modalVisibility: true})}
          />
        </LinearGradient>
        <Modal
          style={styles.modal}
          animationType={'slide'}
          visible={this.state.modalVisibility}
      >
          <Button
            title='Close'
            onPress={() => this.setState({
              modalVisibility: false
            })}
        />
        </Modal>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#bada55'
  },
  header: {
    marginTop: 20
  },
  headerButton: {
    backgroundColor: 'white',
    padding: 20
  },
  modal: {
    height: '25%'
  }
})
export default About
