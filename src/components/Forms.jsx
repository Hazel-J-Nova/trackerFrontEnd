const Form = (props) => {
  return (
    <div className=''>
      <label htmlFor={props.id} className='form-label'>
        {' '}
        {props.label}{' '}
      </label>
      <div className='icon'>
        <input
          classname={`form-control size ${props.styelClass}`}
          type={props.type}
          id={props.id}
          value={props.value}
          autofocus
          required
        />
      </div>
    </div>
  );
};

export default Form;
