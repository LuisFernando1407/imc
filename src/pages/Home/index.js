import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native'

import { View } from '../Home/style'

import EditText from '../../components/EditText'
import Message from '../../components/Message'
import Button from '../../components/Button'

const Home = ( { navigation } ) => {
    const { width } = Dimensions.get('window')

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [message, setMessage] = useState({
        text: '', 
        color: ''
    })

    const handleWeight = (weight) => {
        setWeight(weight.replace(",", "."))
    }
    
    const handleHeight = (height) => {
        setHeight(height.replace(",", "."))
    }

    const getSituation = () => {
        let result = (weight / (height * height)).toFixed(2)
    
        if(!isFinite(result)) {
            setMessage({
                text: "Operação inválida",
                color: "#CE2400"
            })
            return
        }

        /**
         * The correct thing would be not to have multiple ifs nested
         */
        if(result < 17) {
            setMessage({
                text: "Muito abaixo do peso",
                color: "#CE2400"
            })   
            return     
        }

        if(result >= 17 && result <= 18.49) {
            setMessage({
                text: "Abaixo do peso",
                color: "#CE2400"
            })   
            return     
        }

        if(result >= 18.50 && result <= 24.99) {
            setMessage({
                text: "Peso normal",
                color: "#0056CB"
            })   
            return     
        }

        if(result >= 25 && result <= 29.99) {
            setMessage({
                text: "Acima do peso",
                color: "#CE2400"
            })   
            return     
        }

        if(result >= 30 && result <= 34.99) {
            setMessage({
                text: "Obesidade I",
                color: "#CE2400"
            })   
            return     
        }

        if(result >= 35 && result <= 39.99) {
            setMessage({
                text: "Obesidade II (severa)",
                color: "#CE2400"
            })   
            return     
        }

        if(result > 40) {
            setMessage({
                text: "Obesidade III (mórbida)",
                color: "#CE2400"
            })   
            return     
        }
        
    }

    return (
        <View width={(width - 40)}>

            <Text style={{fontSize: 16, marginBottom: 5}}>Infome o peso em Kg</Text>
            <EditText 
                style={{marginTop: 20}}
                placeholder="Peso (Kg)"
                onChangeText={handleWeight}
                maxLength={3}
                />

            <Text style={{fontSize: 16, marginTop: 20, marginBottom: 5}}>Infome a altura em cm</Text>
            <EditText 
                placeholder="Altura (cm)"
                onChangeText={handleHeight}
                />

            { message.color !== '' && message.text !== '' ? 
                <>
                    <Message
                        color={message.color} 
                        message={message.text}
                        />
                </> : <><Text style={{fontSize: 16, marginTop: 20}} >Preencha os dados do formulário acima para calcular seu IMC 😁</Text></>
            }
                
            <Button handle={getSituation} title="Calculate"/>

        </View>
    )
}

export default Home