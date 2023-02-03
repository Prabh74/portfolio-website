import { useEffect } from "react"
import "./cursor.css"

export default function Cursor(){

    useEffect(() => {
        const root = document.getElementById("root")
        const cursor = document.getElementById("cursor")

        root.addEventListener('mousemove', (e) => {
            // console.log(`x: ${e.x}`, `y: ${e.y}`)
            cursor.style.top = `${e.y- cursor.offsetHeight/2}px`
            cursor.style.left = `${e.x - cursor.offsetWidth/2}px`
        })
    }, [])

    return(
        <div id="cursor">

        </div>
    )
}