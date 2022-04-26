import React, {useState , useEffect}  from 'react';
import { Spinner,Col, Row, Container,} from 'react-bootstrap';
import axios from 'axios';
import Card from '../components/Card';
import Nabvar from '../components/Nabvar';
import Title from '../components/Title';

export default function Team() {
      //States
      const [employees, setEmployees] = useState([]);

          // useEffect and Call api
          useEffect(() => {
            axios.get('http://dummy.restapiexample.com/api/v1/employees')
                .then(resp => {
                    setEmployees(resp.data.data);
                    console.log(resp.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }, [])
  return (
    <>
    <Nabvar/>
    <Title text={"Team"}/>
    {(employees.length === 24 )? 
    <>
    <Container style={{textAlign: 'center'}}>
      <Row className="justify-content-center ">    
    {employees.map((team, index) => (
      <Col className="row-card" xs={12} sm={12} md={4} lg={3} xl={3}> 
      <Card id={index} key={index} name={team.employee_name} salario={team.employee_salary} edad={team.employee_age}/>
       </Col>
      ))}
        </Row>
    </Container>
    </>
    :
      <div style={{textAlign: 'center'}}>

        <Spinner  animation="border" role="status">
      </Spinner>
      <h1>Cargango los datos de la api.....</h1>
      </div>
     }
    </>
  )
}
