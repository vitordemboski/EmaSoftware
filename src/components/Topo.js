
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import axios from 'axios'


export default class Topo extends Component {
    constructor(props) {
        super(props)
        this.state = { Itens: '' }
    }
    componentWillMount() {
        //requisição http
        axios.post('http://portal.ema.net.br/api/configuracoes')
            .then(response => {
                this.setState({ Itens: response.data })
            })
            .catch(() => {
                console.log('Erro ao recuperar os dados')
            })
    }
    render() {
        return (

            <View style={{ backgroundColor: this.state.Itens.COR }}>
                <View style={styles.Topo}>
                    <Image style={styles.imagem} st source={require('../../img/ema.png')} />
                    <Text style={styles.titulo}>Ema Software</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    Topo: {
        height: 60,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 1,
    },
    titulo: {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff',
        marginTop: 15,
        paddingRight: 65,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    },
    imagem: {
        height: 65,
        width: 65,
    }
});
