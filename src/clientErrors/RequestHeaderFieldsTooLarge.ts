/**
 * @module clientErrors
 */ /** */
import {Exception} from "../exception";
const CODE = 429;

export class RequestHeaderFieldsTooLarge extends Exception {

    name: string = 'REQUEST_HEADER_FIELDS_TOO_LARGE';
    status: number = CODE;

    constructor(message: string) {
        super(CODE, message);
    }
}