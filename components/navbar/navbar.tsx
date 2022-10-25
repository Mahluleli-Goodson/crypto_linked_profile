import React, {FC} from 'react';
import Image from "next/image";
import {menus} from "../../content/nav";
import Link from "next/link";

const NavBar: FC = () => {
    return (
        <div className="py-2 px-10 flex justify-between border-b-[0.01em] border-slate-600 mx-2 items-center">
            <Image className="" src="/assets/happy_logo.svg" alt="logo" width="30" height="30"/>
            <ul className="flex">
                {
                    menus.map((menu, idx) =>
                        <li key={idx}
                            className="mx-2 backdrop-opacity-0 bg-lumino-1 hover:bg-lumino-2 backdrop-blur-xl
                            rounded-full px-10 py-1 cursor-pointer">
                            <Link href={menu.link}>{menu.title}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default NavBar;
