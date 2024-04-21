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
    <div class="prj-grid px-3">
		{#each projectsList as project}
		<a href={project.link}><div class="flex flex-col prj-item rounded-lg dark:bg-black/30 bg-black/10 hover:bg-black/20 dark:hover:bg-black/95 text-black dark:text-white">
			<h3><strong>{project.title}</strong></h3>
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

<style>
	
	.prj-grid {
		color: #ccc;
		display: grid;
		grid-template-columns: repeat(2, minmax(0,1fr));
		grid-auto-rows: 1fr;
		justify-content: space-between;
		gap: 1rem;
	}
	
	.prj-item {
		padding: 0.7rem;
		transition: 0.1s;
		height: 8rem;
	}
</style>