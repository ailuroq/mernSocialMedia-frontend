import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Register from "../Register";
import Profile from "./Profile/Profile";
import Photos from "../Photos";
import BoardAdmin from "../BoardAdmin";
import NoFound from "../Errors/NoFound";

const Content = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/:username" component={Profile}/>
                <Route exact path="/:username/games" />
                <Route exact path="/:username/photos" component={Photos}/>
                <Route exact path="/:username/friends" />
                <Route exact path="/admin/admin" component={BoardAdmin}/>
                <Route path="*" component={NoFound}/>
            </Switch>
        </div>
    )
}

export default  Content