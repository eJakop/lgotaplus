import React from 'react';
import { StyleSheet, Text, TextStyle, useWindowDimensions, View, ViewStyle } from 'react-native';


interface TouchableButtonProps {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}



const ResponsiveText:React.FC<TouchableButtonProps> = ({
    title,
    style,
    textStyle,
    }) => {
    const { width, height } = useWindowDimensions();
    
    const getResponsiveFontSize = () => {
        if (width < 320) return 12; 
        if (width < 414) return 16; 
        return 18; 
    };

    return (
        <View style={[styles.container, style]}>
        <Text style={[styles.text, { fontSize: getResponsiveFontSize() }]}>
           
            <Text style={[styles.text, textStyle]}>
                {title}       
            </Text>
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    textAlign: 'center',
    color: '#000000',
  },
});

export default ResponsiveText;