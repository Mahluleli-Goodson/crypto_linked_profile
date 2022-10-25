import type {NextApiRequest, NextApiResponse} from 'next';
import {convertToString} from "../../services/integerTestService";
import {sanitizeInteger} from "../../utils/integerTestUtil";

interface IQueryParams {
    integer: string;
}

// todo: move logic to controller for this
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let {integer} = req.query as unknown as IQueryParams;

    if (!integer) {
        res.status(422).json({error: "[integer] query parameter is required"});
        return;
    }

    integer = sanitizeInteger(integer);

    if (integer.toString() !== parseInt(integer, 10).toString()) {
        res.status(422).json({error: "only integers allowed"});
        return;
    }

    res.status(200).json({result: convertToString(parseInt(integer))})
}
