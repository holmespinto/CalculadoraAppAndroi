/* eslint-disable @typescript-eslint/no-shadow */
import { useRef, useState } from 'react';
enum Operadores {
    sumar, restar, multiplicar, dividir
  }

export const useCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>();

    const clear = () => {
      setNumero('0');
      setNumeroAnterior('0');
    };

    const btndelete = (numero: string) => {
      if (numero.length === 0) {
        setNumero('0');
      }
      setNumero(numero.slice(0, -1));
    };
    const cambiarNumPorAnterior = () => {
      if (numero.startsWith('.')) {
        setNumeroAnterior(numero.slice(0, -1));
      } else {
        setNumeroAnterior(numero);
      }
      setNumero('0');
    };

    const armarNumero = (numeroText: string) => {
      //no aceptar doble punto
      if (numero.includes('.') && numeroText === '.') { return; }
      //no aceptar doble punto
      if (numero.startsWith('0') || numero.startsWith('-0')) {
        //puntodecimal
        if (numeroText === '.') {
        } else if (numero.startsWith('0')) {
          setNumero(numeroText);
          //evaluar si hay ceros y hay un punto
        } else if (numeroText === '0' && numero.includes('.')) {
          setNumero(numero + numeroText);
          //evaluar si es diferente de cero y tiene un punto
        } else if (numeroText === '0' && !numero.includes('.')) {
          setNumero(numeroText);
          //evaluar 0.000
        } else if (numeroText === '0' && !numero.includes('.')) {
          setNumero(numero);
        } else {
          setNumero(numero + numeroText);
        }
      } else {
        setNumero(numero + numeroText);
      }
    };
    const positivoNegativo = () => {
      if (numero.includes('-')) {
        setNumero(numero.replace('-', ''));
      } else {
        setNumero('-' + numero);
      }
    };

    const btnDividir = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.dividir;
    };
    const btnMultiplicar = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.multiplicar;
    };
    const btnSumar = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.sumar;
    };
    const btnResta = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.restar;
    };
    const calcular = () => {
      const num1 = Number(numero);
      const num2 = Number(numAnterior);
      switch (ultimaOperacion.current) {
        case Operadores.sumar:
          setNumero(`${num1 + num2}`);
          break;
        case Operadores.restar:
          setNumero(`${num2 - num1}`);
          break;
        case Operadores.multiplicar:
          setNumero(`${num2 * num1}`);
          break;
        case Operadores.dividir:
          setNumero(`${num2 / num1}`);
          break;
      }
    };
    return {
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
    };
};