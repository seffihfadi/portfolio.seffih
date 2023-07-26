

const Do = ({ canDo }) => {
  return (
    <div className="box">
      <span className="material-symbols-rounded">{canDo.icon}</span>
      <h3>{canDo.name}{canDo?.soon && <span>soon</span>}</h3>
      <p>{canDo.desc}</p>
    </div>
  )
}

export default Do