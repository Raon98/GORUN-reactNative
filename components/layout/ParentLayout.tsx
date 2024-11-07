import { View, StyleSheet } from "react-native";

export default function ParentLayout({ header, menuBar }) {
    return <>
        <View style={styles.container}>
            <View>
                {header}
            </View>
            <View style={styles.menubar}>
                {menuBar}
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    menubar: {
        flex: 1
    }
});