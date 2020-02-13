
export default ({ name, value, setter, min = 0, max = 10, step = 1, ...props }) => {
  const onChange = ({ target: { value }}) => {
    setter(parseInt(value));
  }
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type="range" id={name} value={value} onChange={onChange} min={min} max={max} step={step} {...props}/>
    </div>
  )
}
