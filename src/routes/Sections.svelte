<script lang="ts">
	let storedTab = localStorage.tabReIndex;
    /**
     * @type {any[]}
     */
    export let tabs: any[] = [];
    export let tabActive = storedTab ? storedTab : 'home';
	if(storedTab && storedTab != 'home') {
		window.history.pushState({urlPath: `/${storedTab}`}, '', `/${storedTab}`);
		localStorage.setItem('tabReIndex', 'home')
	}

	let blurDelay = 0;
    
    const tabClickHandler = (/** @type {string} */ tabLabel) => () => {
		tabActive = tabLabel;
		for(let tab in tabs) {
			if(tabActive == tabs[tab].label) {
				let shallow = `/${tabs[tab].label == 'home' ? '' : tabs[tab].label}`;
				window.history.pushState({urlPath: shallow}, '', shallow);
			}
		}
		
	}
    // https://svelte.dev/repl/cf05bd4a4ca14fb8ace8b6cdebbb58da?version=4.2.12
</script>

<nav class="w-auto mx-5 md:mx-0 hidden backdrop-blur-sm bg-black/5 dark:bg-neutral-700/10 border-solid border border-gray-400 dark:border-neutral-700/30 md:flex rounded-lg md:w-8/12 text-gray-900 dark:text-white p-navbar justify-center">
    <ul class="mx-3 p-0 m-0 h-12 flex justify-center align-center list-none bg-contain">
        {#each tabs as tab}
        <li
            class={(tabActive === tab.label ? 'active ' : '') + 'h-full px-[0.5rem]'}
            style={tab.label === 'home' ? "padding-left: 0.25rem;" : ''} 
        >
            <span
				on:click={tabClickHandler(tab.label)}
				on:keydown={tabClickHandler(tab.label)}
				role="link"
				tabindex="0"
				class="{tabActive === tab.label ? 'font-medium drop-shadow' : 'font-normal'} hover:drop-shadow flex h-full align-center "
			>{tab.label}</span>
        </li>
        {/each}
    </ul>
</nav>
<br>
{#each tabs as tab}
    {#if tabActive == tab.label}
    <div>
        <svelte:component this={tab.component}/>
    </div>
    {/if}
{/each}

<style>




	nav span {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		text-decoration: none;
		font-size: 1.2rem;
		transition: color 0.2s linear;
		cursor: pointer;
	}

	span:hover {
		color: var(--color-theme-2);
	}
</style>
