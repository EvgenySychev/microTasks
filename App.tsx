import React, {Fragment, useState, MouseEvent} from 'react';
import './App.css';
import {Button} from "./component/Button";
import {NewComponent} from "./NewComponent";
import {AnotherNewComponent} from "./component/AnotherNewComponent";

export type FilterType = 'all'|'Dollars'|'RUBLS'

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType> ('all')

    let currentMoney = money;

    if (filter === 'Dollars') {

        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }

    if (filter === 'RUBLS') {

        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>

            <AnotherNewComponent currentMoney1={currentMoney} callBack={onClickFilterHandler}/>
            {/*<ul>
                {currentMoney.map((objFromMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArray.banknots}</span>
                            <span>{objFromMoneyArray.value}</span>
                            <span>{objFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
            </div>*/}
        </>


    )

}


export default App;


//******************************************* Button *************************************************************
/*const Button1Foo =(subscriber:string, age:number, address:string)=>{
    console.log (subscriber)
}

const Button2Foo =(subscriber:string)=>{
    console.log (subscriber)
}

const Button3Foo =()=>{
    console.log ('I am stupid button')
}

return (

    <div className='App'>
        <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('I am Vasya',21,'Minsk')}/>
        <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('I am Ivan')}/>
        <Button name={'I am stupid button'} callBack={() => Button3Foo()}/>
    </div>

)*/


/*const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    console.log('My Name Is VASYA')
}

const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    console.log('My Name Is IVAN')
}*/
/*const onClickHandler = (name:string) => {
    console.log(name)
}*/

/*const foo1 = (event:MouseEvent<HTMLButtonElement>) => {
    console.log('100200')
}

const foo2 = (item:number) => {
    console.log(item)
}*/
/*<button onClick={ foo1} > 1 </button>
<button onClick={(event:MouseEvent<HTMLButtonElement>) => foo2(100200)} > 2 </button>*/


/*  return (

      <div className='App'>

          {/!*<button onClick={(event) => {console.log('Hello')}}> MyYouTubeChanel-1</button>*!/}
          <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler('VASYA')} > MyYouTubeChanel-1 </button>
          <button onClick={(event:MouseEvent<HTMLButtonElement>) => onClickHandler( 'IVAN')} > MyYouTubeChanel-2 </button>

      </div>

  )*/


//******************************************* useState *************************************************************
/*let [a, setA] = useState(1)

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
)*/
//******************************************* metod map **********************************************************
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

