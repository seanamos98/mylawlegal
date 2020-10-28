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
          <h2>Police Brutality Report Form</h2>
       <form onSubmit={handleSubmit}>
         <label>What is the name of the officer in question?</label>
          <input onChange={handleChange} value={formField} type="text" id="officerName" name="officerName" placeholder="Name of the officer,.." required/>
       <label>When was the date of the incidence?</label>
       <input onChange={handleChange} value={formField} type="date" id="date" name="date" required />
       <label>How much is the bribe paid?</label>
       <input onChange={handleChange} value={formField} type="number" id="amount" name="amount" placeholder="#2000..." required/>
        <label >Location</label>
    <select id="location" name="location">
      <option value="location">Lagos, yaba</option>
      <option value="canada">Enugu</option>
      <option value="usa">Benue, Makurdi</option>
    </select>
    
    <input type="submit" value="Submit" />
  </form>
        </div>
    )
}
export default FormGenerator;