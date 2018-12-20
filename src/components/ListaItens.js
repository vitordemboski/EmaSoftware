
import React, { Component } from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import axios from 'axios'
import Itens from './Itens'

export default class listaItens extends Component {

    constructor(props) {
        super(props)
        this.state = { lista: [] }
    }

    componentWillMount() {
        //requisição http
        axios.post('http://portal.ema.net.br/api/getprocedimentospublicos')
            .then(response => {
                const listaItens = []
                i = 1
                n = i.toString()
                while (response.data[n] != null) {
                    listaItens.push(response.data[n])
                    i++
                    n = i.toString()
                }
                this.setState({ lista: listaItens })

            })
            .catch(() => {
                console.log('Erro ao recuperar os dados')
            })
    }

    render() {


        const screenHeight = Dimensions.get('window').height - 60
        return (
            <ScrollView Style={{ backgroundColor: '#FFF' }}>
                <View style={{ height: screenHeight }}>
                    {this.state.lista.map(item =>
                        <Itens key={item.IDPROCEDIMENTO} item={item} />
                    )}
                </View>
            </ScrollView>
        );
    }
}

