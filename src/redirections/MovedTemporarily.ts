/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";
const CODE = 302;

export class MovedTemporarily extends Exception {

    name: string = 'MOVED_TEMPARORARILY';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}