<script lang="ts">
    import Icon from '@iconify/svelte';


	// dark/light mode loads
    if(localStorage.theme == "light" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches)) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
export let data;
console.log(data);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content="20 year old " />
</svelte:head>

<article class="mx-8 lg:mx-0 text-black dark:text-white">
	<br>
    <a href="/blog"><span tabindex="0" role="button" class="text-black/75 dark:text-white/75"><Icon icon="tabler:arrow-back-up" class="inline"/> Back</span></a>
    <br>
    <h1>{data.meta.title}</h1>
    <hr class="h-px border-black dark:border-white" style="opacity: 0.25"/>
    <br>
    <svelte:component this={data.content}/>
</article>

<style>
    @import './styles.css';
</style>