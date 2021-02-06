import React from "react"
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom"

import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation