import React, {ChangeEvent, useEffect, useState} from 'react';
import {fetchStringInteger} from "../utils/apiUtil";
import {useRouter} from "next/router";

const useTestIntegerHook = () => {

    const [result, setResult] = useState<string>("Enter an integer value");
    const [inputValue, setInputValue] = useState<string>("");
    const [loadStatus, setLoadStatus] = useState<string | undefined>(undefined);

    const router = useRouter();
    const {query: {integer: queryInteger}} = router;

    const handleSubmit = () => {
        doResultFetch(inputValue);
    }

    const doResultFetch = (inputString: string) => {
        setLoadStatus("please wait...");

        fetchStringInteger(inputString)
            .then(res => setResult(res))
            .catch(err => {

                setResult(err.response.data.error);

            })
            .finally(() => {

                setLoadStatus(undefined);
                setInputValue("");

            });
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const stringValue = event.target.value?.trim();
        setInputValue(stringValue);
    }

    const handleQueryPassedInt = () => {
        // @ts-ignore
        if (!queryInteger || queryInteger?.trim() == "") return;
        doResultFetch(queryInteger as string);
    }

    useEffect(handleQueryPassedInt, [router.isReady]);

    return {result, inputValue, loadStatus, handleOnChange, handleSubmit};
};

export default useTestIntegerHook;
