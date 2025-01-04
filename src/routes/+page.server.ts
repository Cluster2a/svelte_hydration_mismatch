import type { PageServerLoad } from './$types';
import type { Wrapper } from '$lib/types/content.types';
import test from '$lib/content/test.yaml';

export const prerender = true;

export const load: PageServerLoad = async () => {
    const content: Wrapper = test as Wrapper;

	return {
		content: content.content
	};
};