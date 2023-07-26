import { footerData } from '../../utils/localData'


const Touch = ({ contact, setContact }) => {
  return (
    <>
    {contact 
    ?
      <>
        <div className="flex justify-between items-center">
          <h2 className="capitalize text-3xl">{footerData.contact.touch}</h2>
          <button className='btn-switch' onClick={() => { setContact(!contact)} }>feedback</button>
        </div>
        <p className="my-4 font-bold">{footerData.contact.text}</p>
        <div className="con">
          <span className="material-symbols-rounded mx-3 font-bold">map</span>
          <span>{footerData.contact.address}</span>
        </div>
        <div className="con">
          <span className="material-symbols-rounded mx-3 font-bold">mail</span>
          <span>{footerData.contact.email}</span>
        </div>
        <div className="con">
          <span className="material-symbols-rounded mx-3 font-bold">phone</span>
          <span>{footerData.contact.phone}</span>
        </div>
      </>
    :
      <>
        <div className="flex justify-between items-center">
          <h2 className="capitalize text-3xl">{footerData.feedback.touch}</h2>
          <button className='btn-switch' onClick={() => { setContact(!contact)} }>contact</button>
        </div>
        <p className="my-4 font-bold">{footerData.feedback.text}</p>
      </>
    }
    </>
  )
}

export default Touch