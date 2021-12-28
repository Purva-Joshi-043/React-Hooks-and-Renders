import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [a,setA] = useState(0)
    const [b, setB] = useState(0);
    const logMousePosition = e =>{
        console.log("Mouse Event")
        setA(e.clientX);
        setB(e.clientY)
    }
    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log("Component Unounting code")
            window.removeEventListener("mousemove",logMousePosition)
        }
    },[])
    return (
        <div>
            Hooks A - {a} B - {b}
        </div>
    )
}

export default HookMouse
