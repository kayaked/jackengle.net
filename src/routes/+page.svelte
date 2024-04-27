<script>
    import Icon from '@iconify/svelte';

	// @ts-ignore
	import Projects from './_subpages/Projects.svelte';
	import Skills from './_subpages/Skills.svelte';
	import Blog from './_subpages/Blog.svelte';
	import Contact from './_subpages/Contact.svelte';
	import Sections from './Sections.svelte';
	import SectionsMobile from './SectionsMobile.svelte';
	import Socials from './Socials.svelte';
	import Home from './_subpages/Home.svelte';
    import ColorMode from './ColorMode.svelte';


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
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
</script>

<svelte:head>
	<title>Jack Engle</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hidden md:block mt-3 flex flex-col justify-center flex-[0.6] opacity-90">
	<br class="hidden md:block"><br class="hidden md:block">
	<div class="flex justify-between">
		<a href="/">
			<h1 class="mb-4 pointer text-black dark:text-white text-[3rem] font-bold">
				Jack Engle
			</h1>
		</a>
		<div class="text-right my-2">
			<p class="text-black/80 dark:text-white/80">
				20 y/o computer engineer / student based in <span class="font-semibold">Cincinnati, OH</span>
				<br>
			</p>
			<p class="text-2xl text-right leading-none flex flex-row-reverse gap-2 my-1">
				<Socials/>
				<ColorMode/>
			</p>
		</div>
	</div>


</section>
<Sections {tabs} />