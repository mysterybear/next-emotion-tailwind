export const Range = ({ name, state, ...props }) => {
  const onChange = ({ target: { value }}) => {
    state[1](p => ({ ...p, [name]: parseInt(value) }));
    console.log(state[0]);
  }
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="range" id={name} value={state[0][name]} onChange={onChange} {...props}/>
    </div>
  )
}
