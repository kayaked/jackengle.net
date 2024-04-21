<script lang="ts">
	let storedTab = localStorage.tabReIndex;
    /**
     * @type {any[]}
     */
    export let tabs: any[] = [];
    export let tabActive = storedTab ? storedTab : 'home';
	if(storedTab && storedTab != 'home') {
		window.history.pushState({urlPath: `/${storedTab}`}, '', `/${storedTab}`);
	}

	let blurDelay = 0;
    
    const tabClickHandler = (/** @type {string} */ tabLabel) => () => {
		tabActive = tabLabel;
		for(let tab in tabs) {
			if(tabActive == tabs[tab].label) {
				let shallow = `/${tabs[tab].label == 'home' ? '' : tabs[tab].label}`;
				window.history.pushState({urlPath: shallow}, '', shallow);
				localStorage.setItem('tabReIndex', tabs[tab].label);
			}
		}
		
	}
    // https://svelte.dev/repl/cf05bd4a4ca14fb8ace8b6cdebbb58da?version=4.2.12
</script>

<nav class="backdrop-blur-sm bg-black/5 dark:bg-neutral-700/10 border-solid border border-gray-400 dark:border-neutral-700/30 rounded-lg w-8/12 text-gray-900 dark:text-white">
    <ul class="mx-3">
        {#each tabs as tab}
        <li
            class={tabActive === tab.label ? 'active' : ''}
            style={tab.label === 'home' ? "padding-left: 0.25rem;" : ''} 
        >
            <span
				on:click={tabClickHandler(tab.label)}
				on:keydown={tabClickHandler(tab.label)}
				role="link"
				tabindex="0"
				class="{tabActive === tab.label ? 'font-medium drop-shadow' : 'font-normal'} hover:drop-shadow"
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

	nav {
		display: flex;
		justify-content: center;
		padding: 0.3rem 2rem;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		padding: 0 0.5rem;
	}

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
