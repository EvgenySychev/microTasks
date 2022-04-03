import React from "react";
import {FilterType} from "../App";

type ArrayCurrentMoneyType ={
    banknots: string
    value: number
    number: string
}

type AnotherNewComponentPropsType = {
    currentMoney1: Array<ArrayCurrentMoneyType>
    callBack: (name: FilterType) => void
}


export const AnotherNewComponent = (props:AnotherNewComponentPropsType) => {

    return(
        <>
            <ul>
                {props.currentMoney1.map((objFromMoneyArray, index) => {
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
                <button onClick={() => props.callBack('all')}>all</button>
                <button onClick={() => props.callBack('RUBLS')}>RUBLS</button>
                <button onClick={() => props.callBack('Dollars')}>Dollars</button>
            </div>
        </>
    )
}
