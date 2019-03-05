export interface IRPCRequest {}

export interface IRPCError {
	code: number;
	message: string;
	data?: any;
}

export interface IRPCResponse {
	jsonrpc: "2.0";
	method: string;
	result?: any;
	error?: IRPCError;
}
