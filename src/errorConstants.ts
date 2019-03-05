import { IRPCError } from "./types.d";

/**
 * @module
 * @description
 * @see {@link https://www.jsonrpc.org/specification#id2}
 */

/**
 * Parse error
 * @description Error for invalid JSON was recieved by the server.
 * An
 */

export const ERROR_PARSE_CODE = -32700;
export const ERROR_PARSE_MESSAGE = "Parse error";
export const ERROR_PARSE: IRPCError = {
	code: ERROR_PARSE_CODE,
	message: ERROR_PARSE_MESSAGE,
};

/**
 * Invalid request error
 */

export const ERROR_INVALID_REQUEST_CODE = -32600;
export const ERROR_INVALID_REQUEST_MESSAGE = "Invalid Request";
export const ERROR_INVALID_REQUEST: IRPCError = {
	code: ERROR_INVALID_REQUEST_CODE,
	message: ERROR_PARSE_MESSAGE,
};

/**
 * Method not found error
 */

export const ERROR_METHOD_NOT_FOUND_CODE = -32601;
export const ERROR_METHOD_NOT_FOUND_MESSAGE = "Method not found";
export const ERROR_METHOD_NOT_FOUND: IRPCError = {
	code: ERROR_METHOD_NOT_FOUND_CODE,
	message: ERROR_METHOD_NOT_FOUND_MESSAGE,
};

/**
 * Invalid params
 */
export const ERROR_INVALID_PARAMS_CODE = -32602;
export const ERROR_INVALID_PARAMS_MESSAGE = "Invalid params";
export const ERROR_INVALID_PARAMS: IRPCError = {
	code: ERROR_INVALID_PARAMS_CODE,
	message: ERROR_INVALID_PARAMS_MESSAGE,
};

/**
 * Invalid params
 */
export const ERROR_INTERNAL_ERROR_CODE = -32603;
export const ERROR_INTERNAL_ERROR_MESSAGE = "Internal error";
export const ERROR_INTERNAL_ERROR: IRPCError = {
	code: ERROR_INVALID_PARAMS_CODE,
	message: ERROR_INVALID_PARAMS_MESSAGE,
};

export const ERROR_RESERVED_SERVER_ERROR_CODES = [-32000, -32099];
export const ERROR_SERVER_ERROR_MESSAGE = "Server error";
