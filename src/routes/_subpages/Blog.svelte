<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import type { Post } from '$lib/types';
    let posts: Post[]
    onMount(async () => {
        const response = await fetch(import.meta.env.VITE_URL + '/api/blog');
        posts = await response.json();
        
    });
</script>

<section>
    <div class="mx-8">
    {#if posts}
        {#each posts as post}
            <a href="blog/{post.slug}" class="text-lg underline underline-offset-4 decoration-1 text-black/80 dark:text-white/80">{post.title}</a>
            <span class="text-black/60 dark:text-white/60">  </span><span class="text-black/25 dark:text-white/25 ml-1">{post.date.substring(5).replace('-', '/')}</span>
            <div><span class="text-black/60 dark:text-white/60">{post.desc} </span></div>
            <br>
        {/each}
    {:else}
    <p class="text-black/75 dark:text-white/75">No blog posts found.</p>
    {/if}
    </div>
</section>