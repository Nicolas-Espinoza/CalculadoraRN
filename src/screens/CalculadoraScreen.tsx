import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';


//el gris oscuro es #2D2D2D
//gris claro #9B9B9B
//el naranja es #FF9427

export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        clean,
        positivoNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnRestar,
        btnSumar,
        calcular,
        btnMultiplicar
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') &&
                <Text style={styles.texto}>{numeroAnterior}</Text>
            }

            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >{numero}</Text>

            {/* boton */}
            <View style={styles.fila}>
                <ButtonCalc texto='C' color='#9B9B9B' action={clean} />
                <ButtonCalc texto='+/-' color='#9B9B9B' action={positivoNegativo} />
                <ButtonCalc texto='del' color='#9B9B9B' action={btnDelete} />
                <ButtonCalc texto='/' color='#FF9427' action={btnDividir} />
            </View>
            <View style={styles.fila}>
                <ButtonCalc texto='7' action={armarNumero} />
                <ButtonCalc texto='8' action={armarNumero} />
                <ButtonCalc texto='9' action={armarNumero} />
                <ButtonCalc texto='X' color='#FF9427' action={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <ButtonCalc texto='4' action={armarNumero} />
                <ButtonCalc texto='5' action={armarNumero} />
                <ButtonCalc texto='6' action={armarNumero} />
                <ButtonCalc texto='-' color='#FF9427' action={btnRestar} />
            </View>
            <View style={styles.fila}>
                <ButtonCalc texto='1' action={armarNumero} />
                <ButtonCalc texto='2' action={armarNumero} />
                <ButtonCalc texto='3' action={armarNumero} />
                <ButtonCalc texto='+' color='#FF9427' action={btnSumar} />
            </View>

            <View style={styles.fila}>
                <ButtonCalc texto='0' ancho={true} action={armarNumero} />
                <ButtonCalc texto='.' action={armarNumero} />
                <ButtonCalc texto='=' color='#FF9427' action={calcular} />
            </View>

        </View>
    )
}