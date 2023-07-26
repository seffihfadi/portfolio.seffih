

const Coming = ({ coming }) => {
  return (
    <div className="upcoming">
      {coming && coming.map((skill) => 
        <div key={skill.name} className="skill">
          <div className="col-span-2">
            <h4>{skill.percentage}</h4>
          </div>
          <div className="col-span-10">
            <div className="prog">
              <div style={{ width: `${skill.percentage}%` }}>{skill.name}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Coming