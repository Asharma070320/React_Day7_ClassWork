import { useState } from "react"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Main(){
    const notify = (text) => { toast.success(text, {
        position: toast.POSITION.TOP_CENTER
      })};

      const error =(text2)=>{toast.error(text2, {
        position: toast.POSITION.TOP_CENTER
      });}
   
    let[Data,setData]= useState("")
    function getValue(e){
       let store = e.target.value;
    //    console.log(store);
       setData(store)
    }

    let[Planeer,setPlanner] = useState([]);
    // console.log(Data);

   function clickBtn(){
    if(Data==""){
        error("Please Add your Items..🛒")
        
    }else{
        setPlanner([...Planeer, {Subject:Data}])
        notify("Item added to your list")
    }
    
   }

   function deleteBtn(e){
    var as=document.querySelector(".grocery");
    as.remove();
    
   }

   
  function check(e){
    let flag = false;
   let compare= e.target.checked;
    if(compare==flag){
        flag=false;
        console.log(flag)
    }else{
        flag=true;
        console.log(flag)
    }
   
  }
   console.log(Planeer)
   
    return(
        <div className="container">
             <ToastContainer />
            <div className="cardList">
                <h1 className="mid">Grocery Bud</h1>
                <div className="last">
                <input type="text" onChange={getValue} className="inp" placeholder="Enter Item" />
                <button onClick={clickBtn} className="btn">Add Item</button>
                </div>
                <div className="storeGrocery">
                   {
                    Planeer.map((list)=>{
                        return <div className="grocery">
                            <input onChange={check} type="checkbox"  />
                            <h4 className="white">{list.Subject}</h4>
                            <button onClick={deleteBtn} className="highLight">Delete</button>
                        </div>
                    })
                   }
                </div>
            </div>
        </div>
    );
}
export default Main