<script>
    import { afterNavigate } from '$app/navigation';

	import '../app.css'
	import './styles.css';

	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { navigating, page } from '$app/stores';

	// mounting variable, used for page transition
	let mnt = false;
	onMount(() => {
		mnt = true;

	})
</script>

<div class="app" >

	

	{#if mnt}
	<main class="flex flex-col flex-1 px-4 w-full" id="mainwrapper" transition:blur={{ amount: 10, duration: 300}}>
		<slot />
	</main>
	{/if}

	<footer class="je-footer invisible md:visible md:fixed flex flex-col w-full text-center bottom-1 text-black/30 dark:text-white/30 m-2 select-none">© 2024 Jack Engle • powered by SvelteKit and Bun</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	main {
		max-width: 50rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
