import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from './config/firebase';


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

    if (data > 100) {
        setRoute();
    };


    return (
        <div  >
         
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        
            <h1 style={{marginLeft: '350px',color:'red'}}>Please Enter your Authentication using fingerprint sensor</h1>
            <img style={{marginLeft: '500px'}} src='https://iconarchive.com/download/i96082/iconsmind/outline/Fingerprint-2.ico' alt='Some Problem' />
        </div>
    );

}

export default Fingerprint;