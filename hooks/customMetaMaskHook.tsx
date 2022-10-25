import React from 'react';
import {useMetamask} from "use-metamask";

export interface IMetamask {
    connect: (Web3Interface: any, settings?: {}) => Promise<void>;
    getAccounts: ({requestPermission}?: {
        requestPermission: boolean;
    }) => Promise<any>;
    getChain: () => Promise<{
        id: any;
        name: string;
    }>;
    metaState: {
        isAvailable: boolean;
        account: any[];
        chain: {
            id: any;
            name: string;
        };
        isConnected: boolean;
        web3: any;
    };
}

/**
 * useMetamask hook wrapped here as it gives "window not defined" error on SSR
 */
const useCustomMetaMaskHook = () => {
    let _metamask = {} as IMetamask;
    if (process?.title == 'browser') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        _metamask = useMetamask();
    }
    return _metamask;
};

export default useCustomMetaMaskHook;
