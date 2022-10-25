import React, {FC} from 'react';
import Image from "next/image";
import {menus, NavMenuEnum} from "../../content/nav";
import Link from "next/link";
import Head from "next/head";

interface INavBarProps {
    current?: NavMenuEnum;
}

const NavBar: FC<INavBarProps> = ({current}) => {
    return (
        <>
            <Head>
                <title>{current ?? "Mahluleli Goodson"}</title>
                <link rel="icon" type="image/png" href="/favicon.ico"/>
            </Head>

            <div className="py-2 px-10 flex justify-between border-b-[0.01em] border-slate-600 mx-2 items-center">

                <div className="flex items-center">
                    <Image src="/assets/happy_logo.svg" alt="logo" width="30" height="30"/>
                    <span className="ml-4 italic font-niconne text-grey-100 text-3xl">Mahluleli Goodson</span>
                </div>

                <ul className="flex">
                    {
                        menus.map((menu, idx) => {
                                const activeClass = (menu.title == current) ? "bg-lumino-2" : "bg-lumino-1";

                                return <Link key={idx} href={menu.link}>
                                    <li
                                        className={`mx-2 backdrop-opacity-0 hover:bg-lumino-2 backdrop-blur-xl 
                                    rounded-full px-10 py-1 cursor-pointer ${activeClass}`}
                                    >
                                        {menu.title}
                                    </li>
                                </Link>;
                            }
                        )
                    }
                </ul>
            </div>
        </>
    );
};

export default NavBar;
