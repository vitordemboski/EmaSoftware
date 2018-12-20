
import React, { Component } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Card, CardItem, Body } from 'native-base'

export default class Itens extends Component {


    abrirBrowser = id => {
        Linking.canOpenURL('http://portal.ema.net.br/publico#/processos/iniciar/' + id).then(supported => {
            if (supported) {
                Linking.openURL('http://portal.ema.net.br/publico#/processos/iniciar/' + id);
            } else {
                console.log("Não foi possivel abrir esse link: " + 'http://portal.ema.net.br/publico#/processos/iniciar/' + id);
            }
        })
    }
    formatar = texto => {
        return unescape(texto)
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.abrirBrowser(this.props.item.IDPROCEDIMENTO) }}>
                <Card style={styles.container}>
                    <CardItem>
                        <Body>
                            <Text style={styles.procedimento}>{this.props.item.TIPOPROCEDIMENTO}</Text>
                            <Image style={styles.imagem} source={{ uri: 'http://portal.ema.net.br/www/doxportal/images/processos/' + this.props.item.FOTO48 }} />
                            <Text style={styles.texto}>{this.formatar(this.props.item.DESCRICAO)}</Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 15,
        padding: 10,
    },
    texto: {
        margin: 15,
        fontSize: 16,
        color: '#000',
        alignSelf: 'center',
        fontFamily: 'monospace',

    },
    procedimento: {
        fontSize: 22,
        color: '#8346BF',
        marginBottom: 30,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        fontFamily: 'monospace',
    },
    imagem: {
        height: 68,
        width: 68,
        alignSelf: 'center'
    }
});
