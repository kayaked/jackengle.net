export type BlogPost = {
    title: string,
    desc: string,
    author: string,
    date: string,
    live: boolean,
    tags: string[],
    slug: string
}

export type ContactFill = {
    email: string,
    message: string,
    time: Date
}