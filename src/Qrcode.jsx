import React, { useState } from 'react'
import './Qr.css'
const Qrcode = () => {
     const [img,setImg] = useState("https://i.pinimg.com/originals/4b/cb/1f/4bcb1fb72d1d08efa44efa5ceb712ec7.gif")
     const[loading,setLoading] =useState(false)
     const[qrData,setQrdata]= useState("")
     const[qrSize,setQrSize]= useState("")
   async function generrateqr () {
    setLoading("true")

     try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}*${qrSize}&data=${encodeURIComponent(qrData)}`
      
      setImg(url)
     }
     catch 
     (eror){
         console.error("error generating qr coe",eror)
     }
     finally{
        setLoading("false")
     }
   }
   function downloadqr(){
    fetch(img).then((Response) => Response.blob()) .then ((blob) => {
 const link=document.createElement("a")
 link.href=URL.createObjectURL(blob)
 link.download="qrcode.png";
 document.body.appendChild(link)
 link.click()
 document.body.removeChild(link)


    })
   }
  return (
    <div className='container'>
        <h1>QR CODE GENERATER</h1>

        <img src={img} alt="" className='qr-img' />
        <div>
            <label htmlFor="datainput" className='input-lab'> Data for QR code</label>
            <input type="text"  value={qrData} id='datainput'  placeholder='Enter data for r code' onChange={(e) =>setQrdata(e.target.value)}/>
            <label htmlFor="sizeinput" className='input-lab'>image size (e.g.,150) </label>
            <input type="number" value={qrSize} id='sizeinput'   placeholder='Enter data for qr code' onChange={(e) =>setQrSize(e.target.value)}/>
            
            <button className='generate' onClick={generrateqr} disabled= {loading}>generate QR code</button>
            <button className='download'onClick={downloadqr} >Download QR code</button>
        </div>
       <p className='jk'>Designed by <a href="" className='j'>Jk</a></p>
    </div>
  )
}

export default Qrcode
