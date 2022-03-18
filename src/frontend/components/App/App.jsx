import React from "react"

export default class App extends React.Component {
    constructor () {
        super()
        this.state = {
            text: ''
        }
    }

    componentDidMount () {
        this.getText()
    }

    async getText () {
        const res = await fetch('/api/hello')
        this.setState({ text: await res.json() })
    }

    render () {
        return (
            <p>{this.state.text}</p>
        )
    }
}