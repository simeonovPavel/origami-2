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
import ErrorPage from './pages/error'
// import { Suspense } from "react"

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/profile/:userid" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation

// const LazyPublications = React.lazy(() => import('./pages/publications')) 
// const LazyShareThoughtsPage = React.lazy(() => import('./pages/share-thoughts')) 
// const LazyProfile = React.lazy(() => import('./pages/profile')) 
// const LazyLogin = React.lazy(() => import('./pages/login')) 
// const LazyRegister = React.lazy(() => import('./pages/register')) 
// const LazyErrorPage = React.lazy(() => import('./pages/error')) 

// const LazyNavigation = () => {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Suspense fallback={<h1>Loading...</h1>}> 
//                     <Route path="/" exact component={LazyPublications} />
//                     <Route path="/share" component={LazyShareThoughtsPage} />
//                     <Route path="/profile/:userid" component={LazyProfile} />
//                     <Route path="/login" component={LazyLogin} />
//                     <Route path="/register" component={LazyRegister} />
//                     <Route component={LazyErrorPage} />
//                 </Suspense>
//             </Switch>
//         </BrowserRouter>
//     )
// }

// export default LazyNavigation