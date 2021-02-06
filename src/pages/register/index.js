import React, { Component } from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-layout'
import Title from '../../components/title'
import SubmiteButton from '../../components/button/submite-button'
import Input from '../../components/input'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: ""
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
            password,
            rePassword
        } = this.props

        return (
            <PageWrapper>
                <Title title="Register" />
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
                <Input
                    value={rePassword}
                    onChange={(e) => this.onChange(e, 'rePassword')}
                    label="Re-Password"
                    id="re-password"
                />
                <SubmiteButton title="Register" />
            </PageWrapper>
        )
    }
}

export default Register