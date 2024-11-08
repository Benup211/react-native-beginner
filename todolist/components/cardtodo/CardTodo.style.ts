import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        backgroundColor:"white",
        borderRadius:13,
        paddingHorizontal:20,
        height:115,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize:25
    },
    image: {
        width:25,
        height:25
    },
});
