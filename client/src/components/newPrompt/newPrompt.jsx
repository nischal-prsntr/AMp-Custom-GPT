import { useEffect, useRef, useState } from 'react'
import './newPrompt.css'
import Upload from '../upload/upload';
import { IKImage } from 'imagekitio-react';

const NewPrompt = () => {

  const [img, setImg] = useState({
    isLoading:false,
    error:"",
    dbData:{}
  })

    const endRef = useRef(null)
    useEffect(()=>{
      endRef.current.scrollIntoView({behavior: "smooth"});
    },[]);
    
  return (
    <>
    {img.isLoading && <div className="">Loading...</div>}
    {img.dbData?.filePath &&(
      <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
      path={img.dbData?.filePath}
      width="300"
      transformation={[{width: 300}]}
      />
    )}

    <div className="endChat" ref={endRef}></div>
        <form className="newForm">
            <Upload setImg={setImg}/>
            <input id="file" type='file' multiple={false} hidden/>
            <input type="text" placeholder="Ask me anything..."/>
            <button>
                <img src="/arrow.png" alt=""/>
            </button>
        </form>
    </>
  )
}

export default NewPrompt