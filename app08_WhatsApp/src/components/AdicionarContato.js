import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux'
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions'


class AdicionarContato extends Component {
    renderBtnAdicionar() {
        // if (this.props.loadingLogin) {
        //     return(
        //         <ActivityIndicator size='large'/>
        //     )
        // }
        if (Platform.OS == 'ios'){
            return(
                <View style={{ backgroundColor: '#115E54' }}>
                    <Button 
                        title='Adicionar' 
                        color='#fff'
                        onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)} />
                </View>
            )
        }

    return(
            <Button 
                title='Adicionar' 
                color='#115E54'
                onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)} />
        )
    }

    renderAdicionarContato() {
        if (!this.props.cadastro_resultado_inclusao) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <TextInput
                            placeholder='E-mail'
                            value={this.props.adiciona_contato_email}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            style={{ fontSize: 20, height: 45 }}
                            onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        {this.renderBtnAdicionar()}
                        <Text style={{ color: 'red', fontSize: 20 }}>
                            {this.props.cadastro_resultado_txt_erro}
                        </Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={{ fontSize: 20 }}>
                        Cadastro realizado com sucesso!
                    </Text>
                </View>
            )
        }
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
                {this.renderAdicionarContato()}
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato)