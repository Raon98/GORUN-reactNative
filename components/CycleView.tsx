import { StyleSheet, View } from 'react-native';

type CycleViewProps = {
    children?: React.ReactNode;
    customStyle?: {
        width?: number;
        height?: number;
        borderWidth?: number;
        borderColor?: string;
        backgroundColor?: string;
        borderRadius?: number;
    };
};

export function CycleView({ children, customStyle = {} }: CycleViewProps) {
    const style = {
        width: customStyle.width || 50,
        height: customStyle.height || 50,
        borderWidth: customStyle.borderWidth || 1,
        borderColor: customStyle.borderColor || '#000',
        backgroundColor: customStyle.backgroundColor || '#fff',
        borderRadius: customStyle.borderRadius || 999,
    };

    return <BaseCycle style={style}>{children}</BaseCycle>;
}

const BaseCycle = ({ children, style }) => {
    return <View style={[styles.baseContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    baseContainer: {
        borderStyle: 'solid',

        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
