import axios from "axios";

export const fetchStringInteger = async (stringNum: string) => {
    const resp = await axios.get(`/api/convert?integer=${stringNum}`);
    return resp.status == 200 ? resp.data.result : resp.data.error;
};
