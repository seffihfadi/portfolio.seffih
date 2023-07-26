import { whatCanIDo } from "../utils/localData"
import Do from "./parts/Do"

const CanDo = () => {
  return (
    <section className="do" id="do">
      <div className="container">
        <h1 className="title">what can i do ?</h1>
        <div className="grid grid-cols-12 gap-6">
        {whatCanIDo.map((canDo, i) => 
          <Do key={i} canDo={canDo} />
        )}
        </div>
      </div>
    </section>

  )
}

export default CanDo