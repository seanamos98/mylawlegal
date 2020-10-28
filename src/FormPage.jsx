import React, { useState } from 'react';

import FormGenerator from './FormGenerator';

 const FormPage = () => {
   const [ formField, setFormField ] = useState('');
   const [ results, setResults ] = useState([])
  
    return (
        <>
          <FormGenerator formField={formField} setFormField={setFormField} results = {results}  setResults={setResults}/>
          
        </>
    )
}
export default FormPage;