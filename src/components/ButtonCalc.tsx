import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto: string) => void;
}

export const ButtonCalc = ({ texto, color = '#2D2D2D', action, ancho = false }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(texto)}>
            <View style={{
                ...styles.btn,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.btnText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}