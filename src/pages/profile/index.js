import React, { Component } from 'react'
import styles from './index.module.css'
import PageWrapper from '../../components/page-layout'
import Title from '../../components/title'
import Origamis from '../../components/origamis'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "TODO: FIX DB", //null
            posts: "TODO: FIX DB" //null 
        }
    }

    // componentDidMount() {
    //     // console.log(this.props.match.params.userid)
    //     this.getUser(this.props.match.params.userid)
    // }

    // getUser = async (id) => {
    //     const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
    // if(!response.ok) {
    //     this.props.history.push('/error')
    // }
    //     const user = await response.json()

    //     this.setState({
    //         username: user.username,
    //         posts: user.posts && user.posts.length
    //     })
    // }

    render() {
        const {
            username,
            posts
        } = this.state

        if(!username) {
            return (
                <PageWrapper>
                    <div>Loading...</div>
                </PageWrapper>
            )
        }

        return (
            <PageWrapper>
                <Title title="Profile" />
                <div>
                    <p>User: {username}</p>
                    <p>Posts: {posts}</p>

                </div>
                <Origamis length={3} />
            </PageWrapper>
        )
    }

}

export default Profile