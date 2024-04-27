<script lang="ts">
    import Icon from '@iconify/svelte';
    import Socials from './Socials.svelte';
	import { blur } from 'svelte/transition';

    let navDisp: boolean = false;

	let storedTab = localStorage.tabReIndex;
    /**
     * @type {any[]}
     */
    export let tabs: any[] = [];
    export let tabActive = storedTab ? storedTab : 'home';
    // checks for a current storedtab upon load (tab is set in localStorage upon navigating to a subdomain, as seen in their page.svelte)
	if(storedTab && storedTab != 'home') {
		window.history.pushState({urlPath: `/${storedTab}`}, '', `/${storedTab}`);
		localStorage.setItem('tabReIndex', 'home')
	}
    
    // tracks current active page section and controls shallow routing for this component's interacations
    const tabClickHandler = (/** @type {string} */ tabLabel) => {
		if(tabActive==tabLabel) return;
		tabActive = tabLabel;
		for(let tab in tabs) {
			if(tabActive == tabs[tab].label) {
                // url path string to be routed to, corresponding to the tab name, or root if homepage tab
				let shallow = `/${tabs[tab].label == 'home' ? '' : tabs[tab].label}`;
                // push the route state
				window.history.pushState({urlPath: shallow}, '', shallow);

                // note: sveltekit has its own features for shallow routing, but they're unavailable in my dev env and js must be enabled regardless
			}
		}
		
	}

    const toggleTabbar = () => {
        if(navDisp) {
            // add new display
            document.querySelector('.p-dismissal')?.classList.add('hidden');
            document.querySelector('.p-navbar')?.classList.add('hidden');

            // remove old display
            document.querySelector('.p-dismissal')?.classList.remove('block');
            document.querySelector('.p-navbar')?.classList.remove('grid');
            
            navDisp = false;
        } else {
            // add new display
            document.querySelector('.p-dismissal')?.classList.add('block');
            document.querySelector('.p-navbar')?.classList.add('grid');

            // remove old display
            document.querySelector('.p-dismissal')?.classList.remove('hidden');
            document.querySelector('.p-navbar')?.classList.remove('hidden');

            navDisp = true;
        }
    }
    // https://svelte.dev/repl/cf05bd4a4ca14fb8ace8b6cdebbb58da?version=4.2.12
</script>

<div class="hidden md:block">
    <nav class="p-1 w-auto mx-5 md:mx-0 hidden backdrop-blur-sm bg-black/5 dark:bg-neutral-700/10 border-solid border border-gray-400 dark:border-neutral-700/30 md:flex rounded-lg md:w-8/12 text-gray-900 dark:text-white justify-center">
        <ul class="mx-3 p-0 m-0 h-12 flex justify-center align-center list-none bg-contain">
            {#each tabs as tab}
            <li
                class="{(tabActive === tab.label ? 'active' : '')} h-full px-[0.5rem]"
                style={tab.label === 'home' ? "padding-left: 0.25rem;" : ''} 
            >
                <span
                    on:click={tabClickHandler(tab.label)}
                    on:keydown={tabClickHandler(tab.label)}
                    role="link"
                    tabindex="0"
                    class="{tabActive === tab.label ? 'font-medium drop-shadow cursor-default' : 'font-normal hover:text-black dark:hover:text-white/80 cursor-pointer'} hover:drop-shadow flex h-full items-center px-[0.5rem] no-underline text-[1.2rem]"
                >{tab.label}</span>
            </li>
            {/each}
        </ul>
    </nav>
</div>

<div class="flex items-center md:hidden h-14 bg-black/5 z-20 dark:bg-neutral-700/10 border-solid border-b border-gray-400 dark:border-neutral-700/30 p-3 text-gray-900 dark:text-white"  >
    <div on:click={() => toggleTabbar()} on:keydown={() => toggleTabbar()} role="button" tabindex="0">
        <Icon icon="mdi:hamburger-menu" class="text-4xl cursor-pointer" />
    </div>
</div>
<div class="backdrop-blur-md hidden h-full w-full absolute z-10 fixed md:hidden p-dismissal cursor-default" role="button" tabindex="0" on:click={() => toggleTabbar()} on:keydown={() => toggleTabbar()}>

</div>
<div class="h-auto w-full absolute top-14 bg-neutral-300 dark:bg-neutral-950 z-20 hidden py-5 grid-rows-1 md:hidden p-navbar gap-5  text-gray-900 dark:text-white border-solid border-b border-gray-400 dark:border-neutral-700/30" transition:blur={{ amount: 10, duration: 300}}>
    <nav>
        <ul class="grid gap-3 grid-cols-2">
            {#each tabs as tab}
            <li>
                <span
                    on:click={tabClickHandler(tab.label)}
                    on:click={() => toggleTabbar()}
                    on:keydown={tabClickHandler(tab.label)}
                    on:keydown={() => toggleTabbar()}
                    role="link"
                    tabindex="0"
                    class="{tabActive === tab.label ? 'font-medium drop-shadow cursor-default' : 'font-normal hover:text-black dark:hover:text-white/80 cursor-pointer'} hover:drop-shadow flex h-full items-center px-[0.5rem] no-underline text-[1.4rem] justify-center"
                >{tab.label}</span>
            </li>
            {/each}
            <div class="flex justify-center items-center">
                <div class="grid grid-flow-col auto-cols-max justify-items-center gap-3">
                    <Socials/>
                </div>
            </div>
        </ul>
    </nav>
</div>
<br>
{#each tabs as tab}
    {#if tabActive == tab.label}

    <div class="md:px-0 px-2">
        <svelte:component this={tab.component}/>
    </div>
    {/if}
{/each}
