<script lang="ts">
    import { page } from '$app/stores';
    import Icon from '@iconify/svelte';
    
    document.body.style.overflow = "hidden";

    if(localStorage.theme == "dark") {
        let footer = document.getElementsByClassName('je-footer')[0];
        footer.style.color = "white"; 
        footer.style.opacity = "0.3";
    }

    // For some reason, on my end TW has very limited functionality in this file. Luckily the page is very simple, so it's been styled mostly in plain CSS.
</script>

<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="text-align: center;" class={localStorage.theme == "light" ? "text-black/75" : "text-white/75"}>
        <h1 class="" style="font-size:6rem; line-height: 130%">{$page.status}</h1>
        <h3 class="text-lg">{$page.status==404 ? "This page could not be found." : $page.error.message}</h3>
        <div class={localStorage.theme == "light" ? "text-black/75" : "text-white/75"} style="line-height: 300%">
            <span class="link404" tabindex="0" role="button" on:keypress={() => history.back()} on:click={() => history.back()}>
                <Icon icon="tabler:arrow-back-up" class="inline"/>
                Back
            </span>

            <span style="margin-left: 0.25em; margin-right: 0.25em;">•</span> 

            <a class="link404" tabindex="0" role="button" href="/">
                <Icon style="vertical-align: middle; margin-top: -3px;" icon="material-symbols:home" class="inline"/>
                Home
            </a>
        </div>
    </div>
</div>

{#if localStorage.theme == "light"}
<style>
.link404:hover {
    color: black;
    opacity: 0.9;
}
</style>
{:else}
<style>
.link404:hover {
    color: white;
    opacity: 0.9;
}
</style>
{/if}