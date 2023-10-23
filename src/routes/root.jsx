import { useState } from "react";

export default function Root() {
    const [isCheck, setIsCheck] = useState(false)
    return (
        <>
            <div id="sidebar">
                <h1 className="text-red-600">React Router Contacts</h1>
                <button className="btn">Button</button>
            </div>
            
            <input type="checkbox" checked={isCheck ? "checked" : ""} className="checkbox" onClick={()=>setIsCheck(!isCheck)} />
            <div id="detail"></div>
        </>
    );
}