import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from './config/firebase';
import './Fingerprint.scss';

const Fingerprint = () => {
    const [data, setData] = useState(0);
    let history = useHistory();

    const setRoute = () => {
        history.push("/product")
    };


    useEffect(() => {
        const myitems = firebase.database().ref('/').child('ConfidenceRate');
        myitems.on('value', (datasnap) => {
            console.log(datasnap.val());
            setData(datasnap.val());
        })



    });

    if (data > 50) {
        setRoute();
    };


    return (
        <>
            <div class="animated animatedFadeInUp fadeInUp" >
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div class="sign">
                    <span class="fast-flicker"><h1 style={{  color: 'red' }}>Please Enter your Authentication using fingerprint sensor</h1>
                    </span>
                </div>
                <img style={{ marginLeft: '850px' }} src='https://iconarchive.com/download/i96082/iconsmind/outline/Fingerprint-2.ico' alt='Some Problem' />
            </div>
        </>
    );

}

export default Fingerprint;