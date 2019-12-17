import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png')

export default class CenaServicos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF'}}>
                <StatusBar backgroundColor='#19D1C8' />
                <BarraNavegacao voltar  navigator={this.props.navigator} corFundo='#19D1C8' />
                <View style={estilos.cabecalho}>
                    <Image source={detalheServicos} />
                    <Text style={estilos.txtTitulo}>Nossos Serviços</Text>
                </View>
                <View style={estilos.detalheServicos}>
                    <Text style={estilos.txtDetalheServico}>- Consultoria</Text>
                    <Text style={estilos.txtDetalheServico}>- Processos</Text>
                    <Text style={estilos.txtDetalheServico}>- Acompanhamento de Projetos</Text>
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create ({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 25
    },
    detalheServicos: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheServico: {
        fontSize: 18,
        marginLeft: 20
    }
})