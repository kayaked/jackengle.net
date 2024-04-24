<script lang="ts">
    import Icon from '@iconify/svelte';
    let theme = localStorage.theme;
    
    function swapMode() {
        if(localStorage.theme == "dark") {
            document.documentElement.classList.remove('dark');
            localStorage.theme = "light";
			document.documentElement.style.backgroundImage = 'linear-gradient(#f1f1f1, #d1d1d1)';
        } else if(localStorage.theme == "light") {
        document.documentElement.classList.add('dark');
            localStorage.theme = "dark";
			document.documentElement.style.backgroundImage = 'linear-gradient(#1a1a1a, #080808)';
        }
        theme = localStorage.theme;
    }

</script>

{#if theme == "dark"}
<div on:click={swapMode} on:keypress={undefined} aria-checked="true" aria-label="dark mode toggle" role="switch" tabindex="0" class="m-0 p-0">
    <Icon icon="tdesign:fog-night" class="text-2xl dark:visible cursor-pointer text-black dark:text-white"/>
</div>
{:else}
<div on:click={swapMode} on:keypress={undefined} class="m-0 p-0" aria-checked="true" aria-label="dark mode toggle" role="switch" tabindex="0">
    <Icon icon="tdesign:fog-sunny" class="text-2xl visible cursor-pointer text-black dark:text-white"/>
</div>
{/if}