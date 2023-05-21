/* eslint-disable @typescript-eslint/no-shadow */

import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/ThemeApp';
import { ButtonCal } from '../components/ButtonCal/ButtonCal';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    clear,
    btndelete,
    armarNumero,
    positivoNegativo,
    btnDividir,
    btnMultiplicar,
    btnSumar,
    btnResta,
    calcular,
    numAnterior,
    numero,
  } = useCalculadora();
  return (
    <>
      <View style={styles.calContainer}>
        <Text style={styles.header}>Calculator</Text>
        {
          (numAnterior !== '0') ?
            <Text style={styles.resulthijo}>{numAnterior}</Text> :
            ''
        }
        <Text style={styles.result}
          numberOfLines={1}
          adjustsFontSizeToFit
        >{numero}</Text>

        {/*PRIMER FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'C'} action={clear} />
          <ButtonCal title={'+/-'} action={positivoNegativo} />
          <ButtonCal title={'del'} action={btndelete} numero={numero} />
          <ButtonCal title={'%'} action={btnDividir} textcolor={'white'} bgcolor={'#FF9427'} />
        </View>

        {/*II FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'7'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'8'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'9'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'X'} bgcolor={'#FF9427'} action={btnMultiplicar} />
        </View>
        {/*III FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'4'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'5'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'6'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'-'} bgcolor={'#FF9427'} action={btnResta} />
        </View>
        {/*IV FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'1'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'2'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'3'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'+'} bgcolor={'#FF9427'} action={btnSumar} />
        </View>
        {/*V FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'0'} bgcolor={'#335050'} ancho action={armarNumero} />
          <ButtonCal title={'.'} bgcolor={'#335050'} action={armarNumero} />
          <ButtonCal title={'='} bgcolor={'#FF9427'} action={calcular} />
        </View>
      </View></>
  );
};
