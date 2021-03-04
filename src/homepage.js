import logo from './logo.svg';
import './App.css';
import './index.css';
import React, { Component ,useState} from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { Button} from 'react-bootstrap';
import {list} from './Bloglist.js';
import {Link} from 'react-router-dom'
import db from './firebase.config';
import ReadMoreReact from 'read-more-react';
function Card(props)
{
    var heading=props.heading;
    const [count, setCount] = useState(0);
    const [state,setState]=useState(0);
    getlikes();
    function addlikes (props)
    {
        var blogRef = db.collection("blogs");
        console.log(state);
        if (state==1)
            return;
        blogRef.doc(heading).set({
            likes:count+1,
        });
        getlikes();
        setState(1);
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
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 ml-10 w-full">
                <img class="w-full" src={props.data1} alt="Cricfever"/>
                <div class="px-2 py-10">
                    <div class="font-bold text-xl mb-2">{props.heading1}</div>
                    <p class="text-grey-darker text-base">
                        <ReadMoreReact text={props.description}
                        min={100}
                        ideal={100}
                        max={100}
                        readMoreText={<p><a href={"/"+props.id} style={{color:'blue'}}>.........................Read More</a></p>}/>
                    </p>
                </div>
                <button type="button" class="btn btn-light" onClick={addlikes}>👍{count} </button>
            </div>
    );
}
function Home() {
    return (
        <div className="App">
            <div class="shadow-lg p-3 mb-5 rounded head">CRICFEVER</div>
            <div class="row">
                    {list.map((user) => (
                        <div class="col-md-3">
                        <Card
                            XI={user.XI}
                            XII={user.XII}
                            heading1={user.heading1}
                            data1={user.data1}
                            description={user.description}
                            id={user.id}
                            data={user.data}
                            text={user.text}
                            heading={user.heading}
                            link={user.link}
                            like={user.likes}
                        />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Home;
