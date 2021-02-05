import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './App.module.css'
import "./App.module.css";

import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";

import {history} from "./helpers/history";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [showScroll, setShowScroll] = useState(false)
    const {user: currentUser} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    window.addEventListener('scroll', checkScrollTop)
    return (

        <div className={styles.main_wrapper}>
            <Header/>
            <div className={styles.top_scroll} onClick={scrollTop}
            style={{height:2000, display:showScroll ? 'flex': 'none'}}
            >
                <p>Up ↑</p>
            </div>
            <div className={styles.content}>
                <Navbar/>
                <Content/>
            </div>
        </div>

    );
};

export default App;
