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

<div class="app flex flex-col" >

	

	{#if mnt}
	<main class="flex flex-col flex-1 px-4 w-full max-w-[50rem] my-0 mx-auto box-border" id="mainwrapper" transition:blur={{ amount: 10, duration: 300}}>
		<slot />
	</main>
	{/if}

	<footer class="je-footer invisible md:visible md:fixed flex flex-col w-full text-center bottom-1 text-black/10 dark:text-white/10 m-2 select-none pb-2">© 2024 Jack Engle • powered by SvelteKit and Bun</footer>
</div>
