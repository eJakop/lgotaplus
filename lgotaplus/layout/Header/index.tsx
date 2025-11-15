import StyledText from "@/componets/StyledText";
import { COLORS } from "@/constatns/ui";
import { StyleSheet, View } from "react-native";

const Header = ()=>{
    return(
        <View style={styles.container }>  
            <View style={styles.headerMainContent}>
                <StyledText>To DO</StyledText> 
            </View>
            <StyledText>1212</StyledText> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 3,
        paddingTop: 80,
        paddingBottom: 15,
        paddingHorizontal: 20,
        backgroundColor: COLORS.PRIMERY_BACKGROUND
    },
    headerMainContent:{ 
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    }
})

export default Header;