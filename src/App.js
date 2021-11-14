import './App.css';
import {useState} from "react";
import NameEntry from './NameEntry';
import NameFunc from './NameFunc';
import Student from './Student';

function App() {
    return (
        <div className="App-header">
             Data Entry Form by Robertha A.D
            <Student/>
            <NameEntry/>
            <NameFunc/>
        </div>
    );
}

export default App;
