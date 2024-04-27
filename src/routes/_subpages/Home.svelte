<script lang="ts">
import prototype from '$lib/images/prototype.jpg';
import Socials from '../Socials.svelte';
import ColorMode from '../ColorMode.svelte';
</script>

<section>
    <div class="mx-8 text-black/80 dark:text-white/80 text-base">
        <h1 class="text-5xl mt-24 md:mt-0 font-semibold text-black dark:text-white md:hidden">Jack Engle</h1>
        <h2 class="md:text-4xl font-semibold text-black dark:text-white/100 hidden md:block">Welcome!</h2>

        <p class="my-5 leading-7"><span class="inline md:hidden">S</span><span class="hidden md:inline">I'm Jack, a s</span>oftware / hardware engineer studying Computer Engineering at the University of Dayton. I'm currently based in <span class="text-black/90 dark:text-white/70 font-medium">northeast Cincinnati, Ohio</span> and working in Mason.</p>
		<div class="my-2">
			<p class="mx-1 text-3xl flex gap-9 mt-3 text-black dark:text-white/60 md:hidden">
                <Socials/>
			</p>
		</div>
        <div class="flex flex-col-reverse md:flex-row mx-1">
            <div>
                <h2 class="text-3xl font-semibold mb-2 text-white md:hidden">About Me</h2>
                <p class="leading-7">In 2018, some friends and I started our first collaborative Python project on GitHub, and I've been self-learning and building in tech ever since. Recently, I've been most interested in
                    <a class="underline underline-offset-4 decoration-1 text-black/60 hover:text-black/75 dark:text-white/60 dark:hover:text-white/50" href="https://www.figma.com/">UI design with Figma</a>, 
                    <a class="underline underline-offset-4 decoration-1 text-black/60 hover:text-black/75  dark:text-white/60 dark:hover:text-white/50" href="https://nextjs.org/">web development with Next.js</a>, and 
                    <a class="underline underline-offset-4 decoration-1 text-black/60 hover:text-black/75  dark:text-white/60 dark:hover:text-white/50" href="https://github.com/kayaked">STM32-based embedded system design</a>.
                </p>
                <p class="my-3 leading-7">
                In the past, I've worked on projects that help communities grow and automate complex processes. Usually I host and link to my projects here, so keep an eye out! 👍
                </p>
            </div>
            <div class=" md:mx-8  my-8 md:my-0">
                <img src={prototype} class="md:mt-0 max-w-[90%] md:max-w-full m-auto h-auto rounded-lg brightness-75" alt="Prototype Version of a Wireless Remote"/>    
            </div>
        </div>
    </div>
</section>