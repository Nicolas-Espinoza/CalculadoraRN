import { StyleSheet } from "react-native";

//el gris oscuro es #2D2D2D
//el naranja es #FF9427
export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        //backgroundColor: 'red',
        justifyContent: 'flex-end'
    },
    texto: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: "right"
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: "right"
    },
    fila: {
        flexDirection: "row",
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    btn: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: '300'
    }
});