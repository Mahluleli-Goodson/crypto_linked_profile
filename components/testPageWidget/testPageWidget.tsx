import React, {FC} from 'react';
import useTestIntegerHook from "../../hooks/testIntegerHook";
import {NavMenuEnum} from "../../content/nav";
import NavBar from "../navbar/navbar";

const TestPageWidget: FC = () => {
    const {result, inputValue, loadStatus, handleOnChange, handleSubmit} = useTestIntegerHook();

    return (
        <>
            <NavBar current={NavMenuEnum.TEST}/>
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col border-[0.01em] max-w-[500px] w-full p-2 items-center">
                    <span className="m-2 text-center text-lg">{loadStatus ?? result}</span>
                    <input
                        type="text"
                        className="border border-2 text-archen w-full p-1"
                        onChange={handleOnChange}
                        value={inputValue}
                    />
                    <button
                        className="py-2 bg-archen text-center rounded-full w-full my-2 mt-4"
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default TestPageWidget;
