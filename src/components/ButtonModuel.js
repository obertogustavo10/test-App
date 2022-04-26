import React from 'react';
import {Form} from 'react-bootstrap';

export default function ButtonModuel({ initialState, id, onChange, value}) {
  //State
  const [checked, setChecked] = React.useState(initialState);

  const onClick=(checked)=>{
    setChecked(checked);
    onChange(id, checked, value);

}
  return (
    <Form.Check 
      type="switch"
      label="Employee details"
      onClick={e => onClick(e.target.checked, e.target.value)}
      checked={checked}
    />                       
  )
}
