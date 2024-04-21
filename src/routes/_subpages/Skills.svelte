<script lang="ts">
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';
	import tippy from 'tippy.js';
    import Page from '../+page.svelte';
	//import 'tippy.js/dist/tippy.css';

    let techList = [
        {
            section: 'Languages',
            caption: 'Programming languages I build my projects with.',
            tech: [
                {
                    icon: 'simple-icons:typescript',
                    alt: 'TypeScript'
                },
                {
                    icon: 'simple-icons:javascript',
                    alt: 'JavaScript'
                },
                {
                    icon: 'simple-icons:python',
                    alt: 'Python'
                },
                {
                    icon: 'simple-icons:c',
                    alt: 'C'
                },
                {
                    icon: 'simple-icons:cplusplus',
                    alt: 'C++'
                },
                {
                    icon: 'cib:java',
                    alt: 'Java'
                }
            ]
        },
        {
            section: 'Web Frameworks',
            caption: 'Frameworks, server environments and database systems that power my web projects.',
            tech: [
                {
                    icon: 'simple-icons:svelte',
                    alt: 'Svelte'
                },
                {
                    icon: 'simple-icons:tailwindcss',
                    alt: 'Tailwind'
                },
                {
                    icon: 'simple-icons:nextdotjs',
                    alt: 'Next.js'
                },
                {
                    icon: 'simple-icons:nodedotjs',
                    alt: 'Node.js'
                },
                {
                    icon: 'simple-icons:bun',
                    alt: 'Bun'
                },
                {
                    icon: 'simple-icons:fastapi',
                    alt: 'FastAPI'
                },
                {
                    icon: 'simple-icons:drizzle',
                    alt: 'Drizzle ORM'
                },
                {
                    icon: 'fontisto:mysql',
                    alt: 'MySQL'
                },
                {
                    icon: 'simple-icons:mongodb',
                    alt: 'MongoDB'
                }
            ]
        },
        {
            section: 'Hardware Tech',
            caption: 'Tools I use to draft and assemble my electronic and embedded systems.',
            tech: [
                {
                    icon: 'arcticons:oscilloscope',
                    alt: 'Measurement Equipment'
                },
                {
                    icon: 'game-icons:soldering-iron',
                    alt: 'THT/SMT Soldering'
                },
                {
                    icon: 'file-icons:kicad',
                    alt: 'KiCad'
                },
                {
                    icon: 'simple-icons:autocad',
                    alt: 'AutoCAD'
                },
                {
                    icon: 'simple-icons:multisim',
                    alt: 'NI Multisim'
                },
                {
                    icon: 'file-icons:matlab',
                    alt: 'MATLAB'
                },
                {
                    icon: 'simple-icons:arduino',
                    alt: 'Arduino'
                },
                {
                    icon: 'file-icons:vhdl',
                    alt: 'HDL (Verilog/VHDL)'
                },
                {
                    icon: 'simple-icons:espressif',
                    alt: 'ESP-IDF'
                }
            ]
        },
        {
            section: 'Software Tech',
            caption: 'Services that help me develop and launch software.',
            tech: [
                {
                    icon: 'simple-icons:visualstudiocode',
                    alt: 'Visual Studio Code'
                },
                {
                    icon: 'devicon-plain:eclipse',
                    alt: 'Eclipse'
                },
                {
                    icon: 'devicon-plain:putty',
                    alt: 'PuTTy'
                },
                {
                    icon: 'simple-icons:git',
                    alt: 'Git'
                },
                {
                    icon: 'file-icons:tortoisesvn',
                    alt: 'TortoiseSVN'
                },
                {
                    icon: 'simple-icons:ubuntu',
                    alt: 'Ubuntu 22.04'
                },
                {
                    icon: 'simple-icons:docker',
                    alt: 'Docker'
                },
                {
                    icon: 'simple-icons:cloudflare',
                    alt: 'CloudFlare'
                },
                {
                    icon: 'simple-icons:vercel',
                    alt: 'Vercel'
                }
            ]
        }
    ];
    
	onMount(() => {
        let skillIcons = document.querySelectorAll('.skill-icon');
        skillIcons.forEach((skillIcon) => {
            tippy(skillIcon);
        });
    });
</script>

<section class="flex">
    <div class="mx-8">
    {#each techList as section}
        <span class="font-semibold text-xl text-black/90 dark:text-white/90">{section.section}</span>
        <br>
        <span class="text-base text-black/75 dark:text-white/75">{section.caption}</span>
        <br>
        <div class="border dark:border-neutral-700/30 rounded-lg bg-black/10 dark:bg-black/40 inline-grid grid-flow-col auto-cols-max grid-rows-1 gap-4 px-4 mt-2">
            {#each section.tech as skill}
            <div class="grid grid-cols-1 justify-items-center py-4 skill-icon" data-tippy-content={skill.alt} aria-label={skill.alt}>
                <Icon icon={skill.icon} class="text-2xl dark:text-white text-black/80"></Icon>
            </div>
            {/each}
        </div>
        <br><br>
    {/each}
    </div>
</section>