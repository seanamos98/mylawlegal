import React from 'react'


 const FormGenerator = ({ formField, setFormField, results, setResults}) => {

  
   const handleChange = (e) => {
     console.log(e.target.value);
     setFormField(e.target.value);

   }
   const handleSubmit = (e) => {
     e.preventDefault();
     setResults([
       ...results, {formField, id: Math.random() * 1000}
     ]);
     setFormField('')
   };
    return (
        <div className='container'>
       <form onSubmit={handleSubmit}>
         <label>What is the name of the officer in question?</label>
          <input onChange={handleChange} value={formField} type="text" id="officerName" name="officerName" placeholder="Name of the officer,.." />
       <label>When was the date of the incidence?</label>
       <input onChange={handleChange} value={formField} type="date" id="date" name="date"  />
       <label>How much is the bribe paid?</label>
       <input onChange={handleChange} value={formField} type="number" id="amount" name="amount" placeholder="#2000..." />
        
    
    <input type="submit" value="Submit" />
  </form>
        </div>
    )
}
export default FormGenerator;