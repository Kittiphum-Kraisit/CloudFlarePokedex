/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		}
	}
	// interface Session {}
	// interface Stuff {}
}

export async function post({ request, platform }) {
	const counter = platform.env.COUNTER.idFromName('A');
  }