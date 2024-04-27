<script>
	import Icon from '@iconify/svelte';

	let projectsList = [
		{
			title: 'ESP32 Mouse-Remote',
			desc: 'Handheld device with the functionality of a mouse and the form factor of a TV remote.',
			icons: ['simple-icons:c', 'simple-icons:espressif', 'simple-icons:opensourcehardware', 'simple-icons:bluetooth'],
			link: 'https://github.com/kayaked/esp32-ble-mouse-remote'
		},
		{
			title: '/resistance',
			desc: 'Easily find resistance values in Ohms for any color-coded resistor ⚡',
			icons: ['simple-icons:javascript', 'simple-icons:html5', 'simple-icons:css3'],
			link: 'https://static.jackengle.net/resistance/'
		},
		{
			title: 'Jailbrush',
			desc: 'Simple Qt5 theme package creator, packager and SSH installer for jailbroken iOS (legacy tool)',
			icons: ['simple-icons:python', 'simple-icons:qt', 'simple-icons:gnubash'],
			link: 'https://github.com/kayaked/jailbrush'
		},
		{
			title: 'Challenge Bot',
			desc: 'Chatbot for gaming leaderboards, ingame user stats and moderation on Discord',
			icons: ['simple-icons:discord', 'simple-icons:python', 'simple-icons:mongodb', 'simple-icons:googlecloud'],
			link: 'https://github.com/kayaked/challenge-bot'
		},
		{
			title: 'jackengle.net',
			desc: 'Personal website / project hub',
			icons: ['simple-icons:svelte', 'simple-icons:tailwindcss', 'simple-icons:typescript', 'simple-icons:bun'],
			link: 'https://github.com/kayaked/jackengle.net/'
		},
		{
			title: 'Construktor (Coming Soon)',
			desc: 'Free online music poster designer 🎧',
			icons: ['simple-icons:react', 'simple-icons:nextdotjs', 'simple-icons:typescript', 'simple-icons:unocss'],
			link: ''
		}
	];
</script>

<section>
	<h1 class="mx-8 mb-4 text-4xl font-semibold block md:hidden text-black/90 dark:text-white">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 px-6 md:px-3 gap-4 justify-between text-neutral-300">
		{#each projectsList as project}
		<a href={project.link}><div class="flex flex-col p-.7 transition duration-100 h-32 rounded-lg dark:bg-black/30 bg-black/10 hover:bg-black/20 dark:hover:bg-black/95 text-black dark:text-white">
			<h3 class="text-base font-semibold"><strong>{project.title}</strong></h3>
			<p>{project.desc}</p>
			<div class="flex flex-row inline gap-2 mt-auto ml-1 mb-1">
				{#each project.icons as iconID}
					<Icon class="flex flex-row items-center" icon={iconID} />
				{/each}
			</div>
		</div>
		</a>
		{/each}
</section>