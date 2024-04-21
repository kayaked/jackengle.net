export async function load({ params }) {
    /* @vite-ignore */
    const post = await import(`/src/routes/blog/[slug]/${params.slug}.md`);

    return {
        content: post.default,
        meta: post.metadata
    };
}