import React, {useEffect, useState} from 'react';
import useCustomMetaMaskHook from "./customMetaMaskHook";
import Web3 from "web3";

/**
 * @fixme: to clean this up
 */
const useCryptoHook = () => {

    const {connect, metaState, getAccounts} = useCustomMetaMaskHook();
    const [result, setResult] = useState<string>("");

    const connectWallet = async () => {

        if (!metaState.isAvailable) {
            setResult("Please install MetaMask browser extension, then refresh this window.");
            return;
        }

        if (!metaState.isConnected) {
            setResult("If you cancel your connection process, please refresh window and try again.");
            try {
                await connect(Web3);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const disconnectWallet = () => {
        setResult("Please disconnect directly from your MetaMask plugin, then refresh window!");
    }

    const checkAccount = () => {
        setResult("Please connect your wallet!");

        if (metaState?.account.length > 0) {
            const myAccount = metaState?.account[0];
            setResult(myAccount);
        }
    }

    const triggerAccountFetch = () => {
        getAccounts();
    }

    const changeNetwork = async () => {
        // @ts-ignore
        if (process?.title == "node" || !window?.ethereum) return;

        try {
            // @ts-ignore
            if (!window.ethereum) throw new Error("No crypto wallet found");
            // @ts-ignore
            const switchResp = await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        "chainId": `0x${Number(4).toString(16)}`, // @ref: https://chainid.network/chains.json
                    }
                ]
            });

            if (switchResp == null) {
                setResult("You have already added Rinkeby to your networks!");
            }

        } catch (err) {
            console.log(err);
        }
    };

    const networkChanged = (chainId: string) => {
        triggerAccountFetch();
        console.log({chainId});
    };

    useEffect(() => {
        // @ts-ignore
        if (process?.title == "node" || !window?.ethereum) return;
        // @ts-ignore
        window?.ethereum.on("chainChanged", networkChanged);

        return () => {
            // @ts-ignore
            window?.ethereum.removeListener("chainChanged", networkChanged);
        };
    }, []);

    useEffect(() => {
        // @ts-ignore
        if (process?.title == "node" || !window?.ethereum) return;
        // @ts-ignore
        window?.ethereum.on("disconnect", triggerAccountFetch);

        return () => {
            // @ts-ignore
            window?.ethereum.removeListener("disconnect", triggerAccountFetch);
        };
    }, []);

    useEffect(checkAccount, [metaState?.account]);
    useEffect(triggerAccountFetch, []);

    return {result, metaState, disconnectWallet, connectWallet, changeNetwork};
};

export default useCryptoHook;
