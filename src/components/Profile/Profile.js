import React, {useEffect} from "react";
import {Link, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Row} from "react-bootstrap";
import styles from "./Profile.module.css"
import avatar from "./../../static/avatar.jpeg"
import {useParams} from "react-router-dom";
import getProfile from "../../actions/profile";

const Profile = () => {
    const dispatch = useDispatch()

    const {username} = useParams()

    useEffect(() => {
        dispatch(getProfile(username))
    }, [dispatch, username])

    const {profileData} = useSelector(state => state.profile)
    return (
        <div>
            <Row className={styles.profile}>
                <Col md="6">
                    <div className={styles.profile_info}>
                        <div className={styles.profile_top}>
                            <p>Username: {profileData.username}</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Profile;
