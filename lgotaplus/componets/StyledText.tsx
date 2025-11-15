import { COLORS } from "@/constatns/ui";
import { StyleSheet, Text, TextProps } from "react-native";


type StyledTextProbs = TextProps;

const StyledText:React.FC<StyledTextProbs> = ({style,...props}) =>{
    return <Text style={[styles.base]} {...props}/> 
}

const styles = StyleSheet.create({
    base:{
        color: COLORS.PRIMERY_TEXT
    }
})

export default StyledText