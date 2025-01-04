<script lang="ts">
	import { type PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
	{#each data.content as content}
		<p>
			{@html content.content}
		</p>
	{/each}
</section>