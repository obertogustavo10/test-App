import React, {useState} from 'react';
//import axios from 'axios';
import { Card} from 'react-bootstrap';
import Avatar from '../img/avataaars.svg'
import { BsCoin, BsCalendarDate  } from "react-icons/bs";
import ButtonModuel from './ButtonModuel';
import '../App.css';

export default function Cards({id, salario, edad, name}) {
    //States
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("1");
    const [indexCard, setIndexCard] = useState("");
    //const [employees, setEmployees] = useState([]);
    // useEffect and Call api
/*             useEffect(() => {
                axios.get('http://dummy.restapiexample.com/api/v1/employees')
                    .then(resp => {
                        setEmployees(resp.data.data);
                        console.log(resp.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }, []) */

          const onCheckboxClicked=(idx, isChecked, valuex)=>{
            console.log(` checkbox numbero ${idx} y estoy checked? --> ${isChecked} --> mi valor es ${valuex}`);
            //Aquí puedes guardar estados si es necesario
            setShow(isChecked);
            setIndexCard(idx);
            setValue(valuex);
          }

  return (
 
            <Card  className="shadowCard"  >
                <Card.Img variant="top" 
                src={Avatar}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
               
                { show ?
                <Card.Text key={id} className="App">
                     <ul className="App">
                        <li className="listCard"><BsCalendarDate/> Edad: {edad}</li>
                        <li className="listCard"><BsCoin/> Salario: {salario}</li> 
                    </ul> 
                </Card.Text>
                :
                false
                }
                    <ButtonModuel
                    initialState={false}
                    id={id}
                    onChange={onCheckboxClicked}
                    value={id}
                    />
                </Card.Body>
            </Card>
            
  )
};
