export async function load({ params }) {
    /* @vite-ignore */
    const post = await import(`/src/lib/posts/${params.slug}.md`);

    return {
        content: post.default,
        meta: post.metadata
    };
}