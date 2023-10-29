"use client"
import { useState } from "react";
import { ValidationForm, ValidationError, InitialState } from "./index"
import { MultipleChoiceQuestion, SingleChoiceQuestion, TextEntryQuestion } from "./questions-form";
import { questions } from "./data";

const ContactForm = () => {

  const [state, setState] = useState(InitialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = ValidationForm(state.data);
    
    if (Object.keys(errors).length === 0) {
      console.log("Form Data:", state);
      setState({ ...state, submitting: true });

      setTimeout(() => {
        setState({ ...InitialState, submitting: false, completedField: true });
      }, 2000);
    }
    else {
        setState({...state, errors});
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    for (var index = 0; index < state.data.length; index++) {
      if(item.question == (name)){
        setState({
          ...state,
          data:[
              ...state.data, {
              "question" : name,
              "type" : item.type,
              "values": value,
            }
            
          ],
        })
      }
    };
    
  };

  return (
    <form onSubmit={handleSubmit}>

      {questions.map((q, index) => {
        const error = state.errors && state.errors[q.question];
        if (q.type === "qcm") {
          return <div key={index}>{MultipleChoiceQuestion(q.question, state.data[index].values, handleInputChange, error)} </div>
        } else if (q.type === "champs") {
          return <div key={index}>{TextEntryQuestion(q.question, state.data[index].values, handleInputChange, error)}</div>
        } else{
          return <div key={index}>{SingleChoiceQuestion(q.question, state.data[index].values, handleInputChange, error)}</div>
        }
      })}

      <button type="submit" disabled={state.submitting || state.completedField}>
        {state.submitting ? 'Submitting...' : 'Envoyer'}
      </button>
      {state.completedField && <p>Thank you for your submission!</p>}
    </form>
  );
};

export default ContactForm;
