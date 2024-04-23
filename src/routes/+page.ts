// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
import { json } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types';

// Loads all blog posts
// Potentially use separate .ts - Redundant as of now
// https://joyofcode.xyz/sveltekit-markdown-blog#posts-api-endpoint reference
export async function load() {
    let posts: BlogPost[] = [];

    const paths = import.meta.glob('/src/posts/*.md', {eager: true});

    for(const path in paths) {
        const file = paths[path];

        if(file && typeof file == 'object' && 'metadata' in file) {
            const meta = file.metadata as Partial<BlogPost>;
            meta.slug = path.split('/').at(-1)?.split('.')[0];
            const post = {...meta} satisfies BlogPost;
            if(post.live) posts.push(post);
        }
    }

    posts = posts.sort((i, j) => new Date(j.date).getTime() - new Date(i.date).getTime());

    return { posts };
}