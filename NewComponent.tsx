import React from "react";


type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}

type TopCarsPropsType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: TopCarsPropsType) => {

    return (
        <table>
            <tr>
                <th>manufacturer</th>
                <th>model</th>
            </tr>

            {props.topCars.map((objectFromCarsArray, index) => {
                return (
                    <tr>
                        <td>{objectFromCarsArray.manufacturer} </td>
                        <td>{objectFromCarsArray.model}</td>
                    </tr>
                )
            })}

        </table>
    )

    /*export const NewComponent = (props: NewComponentType) => {*/
    /*return (
        <ul>
            {props.students.map((objectFromStudentsArray, index) => {
                return (
                    <li key={objectFromStudentsArray.id}>
                        <span> {objectFromStudentsArray.name}</span>
                        <span> age: {objectFromStudentsArray.age}</span>
                    </li>
                )
            })}

        </ul>
    )*/
}