
import { CycleView, TextView } from '@/components'
import { AntDesign } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
export default function MiddleRunning() {
    return (
        <View style={styles.CycleContainer}>
            <CycleView customStyle={{ borderColor: '#ffffffdd', width: 45, height: 45, backgroundColor: '#fafafa' }}>
                <AntDesign name="setting" size={28} color="black" />
            </CycleView>
            <CycleView customStyle={{ width: 100, height: 100, backgroundColor: '#ffe600', borderColor: '#fff' }}>
                <TextView customStyle={{ fontSize: 18, fontWeight: 600 }}>시작</TextView>
            </CycleView>
            <CycleView customStyle={{ borderColor: '#ffffffdd', width: 45, height: 45, backgroundColor: '#fafafa' }}>
                <AntDesign name="team" size={24} color="black" />
            </CycleView>
        </View>
    )
}

const styles = StyleSheet.create({
    CycleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        marginBottom: 18,
    },
})
