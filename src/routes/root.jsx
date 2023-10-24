import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Outlet } from "react-router-dom";

export default function Root() {
    const [isCheck, setIsCheck] = useState(false)
    return (
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
                            <AiOutlineBars />
                        </label>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}