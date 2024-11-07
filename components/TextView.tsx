import { Text, TextStyle } from 'react-native';

type TextViewProps = {
    children?: React.ReactNode;
    customStyle?: TextStyle;
};

export function TextView({ children, customStyle = {} }: TextViewProps) {
    const defaultStyle: TextStyle = {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#000',
    };

    return <Text style={[defaultStyle, customStyle]}>{children}</Text>;
}
