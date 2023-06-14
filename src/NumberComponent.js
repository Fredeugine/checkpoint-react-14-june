import {useEffect, useState} from "react";


export function NumberComponent(){
    const [data,setData] = useState()
    const [blue,setBlue] = useState()

    useEffect(function (){

       async function Fetch(){
            var response = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
           let fetchedData = await response.json()
           await setData(fetchedData)
        }
        Fetch()

    },[])
    function STLS(){
       localStorage.setItem('a',data)
    }
    function LFS(){
       var  Val = JSON.parse(localStorage.getItem('a'))
        setData(Val)
    }
    useEffect(function (){
        function ODDorEVEN(){
            if ((data % 2) === 0){
                setBlue(true)
            }
            else if ((data % 2) !== 0) {
                setBlue(false)
            }
        }
        ODDorEVEN()
    },[data])



    return (
        <>
            <p className={blue ? 'blue' : 'red'}>{data} is beautifully colored</p>
            <button onClick={()=>{
                setData(data + 1)
            }}>Increment</button>
            <button onClick={()=>{
                STLS()
            }}>Save to local storage</button>
             <button onClick={()=>{
                LFS()
            }}>Load From Storage</button>



        </>
    )
}
// Create a button within the NumberComponent called "Increment".
// - Implement a function that increments the value of the number when the "Increment" button is clicked.