import React from 'react';
import {NextPage} from "next";
import NavBar from "../components/navbar/navbar";
import {NavMenuEnum} from "../content/nav";

const ApiDocPage: NextPage = () => {
    return (
        <>
            <NavBar current={NavMenuEnum.DOC}/>
            <div className="py-7 px-4">
                <ul>
                    <li>ENDPOINT: <code className="bg-lumino-2 p-1">[url]/api/convert?integer=XXXX</code></li> <br/>
                    <li>METHOD: <code className="bg-lumino-2 p-1">GET</code></li> <br/>
                    <li>The <code className="bg-lumino-2 p-1">convert</code> endpoint takes only 1 required query string: <code className="bg-lumino-2 p-1">integer</code></li> <br/>
                    <li><code className="bg-lumino-2 p-1">integer</code> can be any integer between 0 and 9,999,999,999</li> <br/>
                </ul>
            </div>
        </>
    );
};

export default ApiDocPage;
