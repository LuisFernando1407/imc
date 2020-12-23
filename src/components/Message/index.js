import React from 'react'
import { View, Text } from './style'

export default class Message extends React.Component {

    render() {
        return (
            <View borderColor={this.props.color}>
                <Text color={this.props.color}>{this.props.message}</Text>
            </View>
        )
    }
}