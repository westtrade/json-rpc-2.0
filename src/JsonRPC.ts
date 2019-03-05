/**
 * @link https://www.jsonrpc.org/specification#response_object
 */
export default class JsonRPC {
	private methods = {};
	private middlewares = [];

	constructor(methods: void | any = {}) {
		this.methods = methods;
	}

	public use = (...middlewares) => {
		this.middlewares;
	}

	/**
	 * Add
	 */
	public add = (name: string, callback: any) => {
		this.methods[name] = callback;
	}

	public call = async (
		name: string,
		data: any,
		returnResponse: boolean = false,
	) => {
		try {
			const result = this.methods[name](...data);
			if (condition) {
			}
		} catch (error) {
			const rpcError = new RPCError(error);
		}
	}

	public discover = async () => {};

	/**
	 * makeResponse
	 */
	public makeResponse() {}
}

const wrapResponse = async (executedPromise) => {
	try {
		const result = await executedPromise();
	}
}





export class RPCError extends Error implements TRPCError {
	code: number = 0;
	message: string = '';
	data: any;


	/**
	 *
	 */
	constructor(error) {
		super()
	}

	toJSON = (): TRPCError  => {
		const { code = 0, message = '', data} = this
		const result: TRPCError =  {
			code, message
	  }

		return result
	}
	
}





export class RPCResponse {
	private method: string;
	private result: any;
	private error: RPCError;

	/**
	 *
	 */
	constructor(method: string, result: any) {
		this.method = method	
	}

	setError = (error: RPCError) => {
		this.error = error
	}
	


	public toJSON(): TRPCResponse {
		const result: TRPCResponse = {
			jsonrpc: "2.0",
			method: this.method
		};

		if (this.error) {
			result.error = this.error.toJSON()
		}


		return result;
	}
}
