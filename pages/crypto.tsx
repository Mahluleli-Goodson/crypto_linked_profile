import React from 'react';
import useCryptoHook from "../hooks/cryptoHook";
import {NavMenuEnum} from "../content/nav";
import NavBar from "../components/navbar/navbar";

const MetaMaskPage = () => {
    const {result, metaState, disconnectWallet, connectWallet, changeNetwork} = useCryptoHook();

    return (
        <>
            <NavBar current={NavMenuEnum.CRYPTO}/>
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col border-[0.01em] max-w-[500px] w-full p-2 items-center">
                    <span>{result}</span>
                    <button
                        className="py-2 bg-archen text-center rounded-full w-full my-2 mt-4"
                        onClick={metaState?.isConnected ? disconnectWallet : connectWallet}
                    >
                        {metaState?.isConnected ? "Disconnect Wallet" : "Connect Wallet"}
                    </button>

                    <button
                        className="py-2 bg-lumino-2 text-center rounded-full w-full my-2 mt-4"
                        onClick={changeNetwork}
                    >
                        Add Rinkeby
                    </button>
                </div>
            </div>
        </>
    );
};

export default MetaMaskPage;
