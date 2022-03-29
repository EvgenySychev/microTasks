import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    let [a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a);
    }

    const onClickHandlerNull = () => {
        setA(a=0);
    }

    return (
        <div className='App'>
            <h1> {a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerNull}>null</button>
        </div>
    )

    /*const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const topCars = [
        {manufacturer: "BMW", model: 'm5cs'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "Audi", model: 'rs6'},
    ]*/

    /*
        return (
            <div className="App">

                {/!*<NewComponent students={students}/>*!/}
                <NewComponent topCars={topCars}/>


                {/!*<div>
                    <h3>What to learn</h3>
                    <div>
                        <input/>
                        <button>+</button>
                    </div>
                    <ul>
                        <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                        <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                        <li><input type="checkbox" checked={false}/> <span>React</span></li>
                    </ul>
                    <div>
                        <button>All</button>
                        <button>Active</button>
                        <button>Completed</button>
                    </div>
                </div>*!/}
            </div>
        );*/
}

export default App;
