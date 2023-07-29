import { heroData } from '../../utils/localData'
import Theme from "./Theme"


const Head = () => {
  return (
    <div className="flex absolute left-0 top-0 justify-between items-center py-2 px-6 w-full z-20">
      <div className="flex justify-center items-center">
        <span className="hidden mx-2 md:block">{heroData.phone}</span>
        <span className="hidden mx-2 md:block">{heroData.email}</span>
      </div>
      <Theme />
    </div>
  )
}

export default Head