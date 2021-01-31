import React, {useEffect, useState} from "react";
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from "./Profile.module.css"
import avatar from "./../../static/avatar.jpeg"
import {useParams} from "react-router-dom";
import getProfile from "../../actions/profile";

const Profile = () => {
    const {username} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProfile(username))
    }, [username, dispatch]);

    const profileData = useSelector(state => state.profileData)
    console.log(profileData)

    return (
        <div>
            <Row className={styles.profile}>
                <Col md="6" className={styles.avatar_settings}>
                    {/*{!currentUser.avatar &&
                    <div>
                        <img className={styles.avatar} src={avatar} alt="avatar"/>
                        <button className={styles.edit_profile_button}>
                            <Link>Edit profile</Link>
                        </button>
                    </div>
                    }
                    {!currentUser.avatar &&
                    <img className={styles.avatar} src=""/> // Подгружать аватар
                    }*/}
                </Col>
                <Col md="6">
                    <div className={styles.profile_info}>
                        <div className={styles.profile_top}>
                            {/*<p>Username: {userInfo}</p>
                            <p>Username: {currentUser.username}</p>
                            <p>Username: {currentUser.username}</p>
                            <p>Username: {currentUser.username}</p>
                            <p>Username: {currentUser.username}</p>
                            <p>Username: {currentUser.username}</p>
                            <p>Username: {currentUser.username}</p>*/}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Profile;
