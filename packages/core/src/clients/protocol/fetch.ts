import fetch from 'isomorphic-unfetch';
import {
	HttpRequest,
	HttpResponse,
	HttpTransferOptions,
	Method,
} from '../types/http';
import { TransferClient } from '../types/core';

const shouldSendBody = (method: Method) =>
	!['HEAD', 'GET', 'DELETE'].includes(method);

export const fetchTransferClient: TransferClient<
	HttpRequest,
	HttpResponse,
	HttpTransferOptions
> = {
	// TODO: implement options when finalized
	send: async (request, options) => {
		const resp = await fetch(request.destination, {
			method: request.method,
			headers: request.headers,
			body: shouldSendBody(request.method)
				? (request.body as BodyInit) // TODO: type guard
				: undefined,
		});
		const httpResponse = {
			statusCode: resp.status,
			headers: Array.from(resp.headers.entries()).reduce(
				(prev, [key, value]) => {
					prev[key.toLowerCase()] = value;
					return prev;
				},
				{} as Record<string, string>
			), // TODO: or use Object.fromEntries if Node.js 12 is supported.
			body: null,
		};
		if (resp.body) {
			const bodyWithMixin = Object.assign(resp.body, {
				text: () => resp.text(),
				blob: () => resp.blob(),
				json: () => resp.json(),
			});
			return {
				...httpResponse,
				body: bodyWithMixin,
			};
		}
		return httpResponse;
	},
};
