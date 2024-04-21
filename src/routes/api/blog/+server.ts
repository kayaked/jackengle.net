import { json } from '@sveltejs/kit';
import type { BlogPost } from '$lib/types';

// https://joyofcode.xyz/sveltekit-markdown-blog#posts-api-endpoint reference
export async function GET() {
    let posts: BlogPost[] = [];

    const paths = import.meta.glob('/src/static/posts/*.md', {eager: true});

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

    return json(posts);
}