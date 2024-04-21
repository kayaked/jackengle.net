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
    h1 {
        font-size: 2.5rem;
        line-height: 1.5;
        font-weight: bold;
    }
    h2 {
        font-size: 2rem;
        line-height: 1.2;
        font-weight: bold;
    }
    h3 {
        font-size: 1.5rem;
        line-height: 0.9;
        font-weight: bold;
    }
    h4 {
        font-size: 1.25rem;
        line-height: 0.75;
        font-weight: bold;
    }
    h5 {
        font-size: 1.125rem;
        line-height: 0.675;
        font-weight: bold;
    }
    h6 {
        font-size: 1rem;
        line-height: 0.6;
        font-weight: bold;
    }
</style>