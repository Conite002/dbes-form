const MultipleChoiceQuestion = (question, values, handleInputChange, error) => (
    <div>
      <label>{question}</label>
      <select onChange={handleInputChange} name={question}>
        {values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
);
  
  const SingleChoiceQuestion = (question, values, handleInputChange, error) => (
    <div>
      <label>{question}</label>
      {values.map((value, index) => (
        <div key={index}>
          <input
            type="radio"
            id={value}
            name={question}
            value={value}
            onChange={handleInputChange}
          />
          <label htmlFor={value}>{value}</label>
        </div>
      ))}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
  
  const TextEntryQuestion = (question, value, handleInputChange, error) => (
    <div>
      <label>{question}</label>
      <input type="text" name={question} onChange={handleInputChange} value={value[0]}/>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
  
export {
  MultipleChoiceQuestion,
  SingleChoiceQuestion,
  TextEntryQuestion
}