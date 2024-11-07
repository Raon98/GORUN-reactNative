
import { CycleView, TextView } from '@/components'
import { StyleSheet, View } from 'react-native'
export default function RunningOption() {
    return (
        <View style={styles.RunningOptionContainer}>
            <CycleView customStyle={{ width: 60, height: 35, borderColor: '#0a2479', borderRadius: 20 }}>
                <TextView customStyle={{ fontSize: 14, fontWeight: 500 }}>거리</TextView>
            </CycleView>
        </View>
    )
}
const styles = StyleSheet.create({
    RunningOptionContainer: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})