<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    export let data = $page.data;
</script>

<section>
    <div class="mx-8">
    {#if data.posts}
        {#each data.posts as post}
            <a href="blog/{post.slug}" class="text-xl font-semibold underline underline-offset-4 decoration-1 text-black/80 dark:text-white/80 dark:hover:text-white/60 hover:text-black">{post.title}</a>
            <span class="text-black/60 dark:text-white/60">  </span><span class="text-black/25 dark:text-white/25 ml-1">{post.date.substring(5).replace('-', '/')}</span>
            <div><span class="text-black/60 dark:text-white/60">{post.desc} </span></div>
            <br>
        {/each}
    {:else}
    <p class="text-black/75 dark:text-white/75">No blog posts found.</p>
    {/if}
    </div>
</section>