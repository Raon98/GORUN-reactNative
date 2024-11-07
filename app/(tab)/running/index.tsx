import { StyleSheet, View } from 'react-native'
import MiddleRunning from '../_component/MiddleRunning'
import RunningOption from '../_component/RunningOption'

export default function Running() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <MiddleRunning />
        <RunningOption />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
