export async function load({ params }) {
    /* @vite-ignore */
    const post = await import(`./${params.slug}.md`);

    return {
        content: post.default,
        meta: post.metadata
    };
}