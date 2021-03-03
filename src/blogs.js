import {Home} from './homepage.js'
import logo from './logo.svg';
import './App.css';
import './index.css';
import React, { Component ,useState} from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {list} from './Bloglist.js';
import {Link} from 'react-router-dom'
import db from './firebase.config';
import './App.css';
function Blogdetails(props){
  const route=list[props.match.params.id]
  var heading=route.heading;
    const [count, setCount] = useState(0);
    getlikes();
    function addlikes (props)
    {
        var blogRef = db.collection("blogs");
        blogRef.doc(heading).set({
            likes:count+1,
        });
        getlikes();
    }
    function getlikes (props)
    {
        var docRef = db.collection("blogs").doc(heading);
        docRef.get().then((doc) => {
        if (doc.exists) 
        {
            setCount(doc.data()["likes"]);
        }
        else
        {
            console.log("No such document!");
        }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
  return(
    <div class="full">
    <div class="shadow-lg p-3 mb-5 rounded head">CRICFEVER</div>
    <div class="bg-darkgray py-5 col-md-8 col-sm-12 box">
    <img class="image" src={route.data} alt="Cricfever"/>
      <div class="col-md-12">
        <section class="mx-3">    
        <div class="row">
            <div class="col-md-12">
            <div class="left-content p-3">
                <h2 class="mb-5">{route.heading1}</h2>
                <p class="blogers">{route.description}</p>
                <p class="eleven blogers">{route.XI}</p>
                <p class="eleven blogers">{route.XII}</p>
            </div>
            </div>    
        </div>
        </section>
       </div>
       <a href={route.link}><button type="button" class="btn btn-primary">ScoreCard</button></a>
       <button type="button" class="btn btn-light" onClick={addlikes}>👍{count} </button>
    </div>
    </div>
    )
}
export default Blogdetails;