import React, { Component } from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-layout'
import Title from '../../components/title'
import SubmiteButton from '../../components/button/submite-button'
import Input from '../../components/input'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    render() {
        const {
            email,
            password
        } = this.props

        return (
            <PageWrapper>
                <div className="container">
                    <Title title="Login" />
                    <Input
                        value={email}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Email"
                        id="email"
                    />
                    <Input
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="Password"
                        id="password"
                    />
                    <SubmiteButton title="Login" />
                </div>
            </PageWrapper>
        )
    }
}

export default LoginPage