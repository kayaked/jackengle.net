<script>
    import Icon from '@iconify/svelte';

	// @ts-ignore
	import Projects from './_subpages/Projects.svelte';
	import Skills from './_subpages/Skills.svelte';
	import Blog from './_subpages/Blog.svelte';
	import Contact from './_subpages/Contact.svelte';
	import Sections from './Sections.svelte';
	import Home from './_subpages/Home.svelte';

	import ColorMode from './ColorMode.svelte';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
    import { onMount } from 'svelte';

	// sections object
	let tabs = [
		{
			label: "home",
			component: Home
		},
		{
			label: "projects",
			component: Projects
		},
		{
			label: "technologies",
			component: Skills
		},
		{
			label: "blog",
			component: Blog
		},
		{
			label: "contact",
			component: Contact
		}
	]
	// dark/light mode loads
    if(localStorage.theme == "light" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches)) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
	onMount(() => {
		tippy('#github-icon', { content: 'GitHub'});
		tippy('#linkedin-icon', { content: 'LinkedIn'});
		tippy('#email-icon', { content: 'Email'});
	});
</script>

<svelte:head>
	<title>Jack Engle</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mt-3">
	<br><br>
	<div class="flex justify-between">
		<a href="/">
			<h1 class="invisible md:visible mb-4 pointer text-black dark:text-white">
				Jack Engle
			</h1>
		</a>
		<div class="text-right my-2">
			<p class="invisible md:visible text-black/80 dark:text-white/80">
				20 y/o computer engineer / student based in <span class="font-semibold">Cincinnati, OH</span>
				<br>
			</p>
			<p class="text-right text-lg flex flex-row-reverse gap-2 my-1  text-black dark:text-white">
				<a href="#top"><Icon icon="mdi:question-mark-circle-outline" class="text-2xl"/></a>
				<a href="mailto:jackengle25@gmail.com" id="email-icon"><Icon icon="mdi:email" class="text-2xl"/></a>
				<a href="https://www.linkedin.com/in/john--engle/" id="linkedin-icon"><Icon icon="mdi:linkedin" class="text-2xl"/></a>
				<a href="https://github.com/kayaked" id="github-icon"><Icon icon="mdi:github" class="text-2xl"/></a>
				<span>•</span>
				<ColorMode/>
			</p>
		</div>
	</div>


</section>
<Sections {tabs} />

<style>

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		flex: 0.6;
		opacity: 0.9;
	}

	h1 {
		font-size: 3rem;
		font-weight: bold;
	}

	h3 {
		width: 100%;
		font-size: 1.25rem;
		font-weight: normal;
		margin-block: 0.5em;
	}


	/*.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}*/
</style>
