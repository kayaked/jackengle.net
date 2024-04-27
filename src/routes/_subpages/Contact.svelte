<script lang="ts">
	import dolly from '$lib/images/dolly.jpg';

	let submitted = 0;
	const submit = async (event: Event) => {
		submitted = 1;
		const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));
		const resp = await fetch(import.meta.env.VITE_URL + '/api/contact',
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			}
		);

		const { status } = await resp.json();
		if(status == 200) submitted = 2;
		else {
			submitted = 3;
		}
	}
</script>

<section>
	<h1 class="mx-8 mb-2 text-4xl font-semibold block md:hidden text-black/90 dark:text-white">Contact Me</h1>
	<div class="mx-6 grid grid-cols-1 md:grid-cols-3 gap-5">
		<div class=" py-2 md:p-0 md:col-span-2">
			<div class="p-4 bg-black/25 dark:bg-black/25 rounded-lg dark:border dark:border-neutral-700/30">
				<form method="POST" on:submit|preventDefault={submit}>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<input required type="text" name="name" class="inline-block bg-white/50 dark:bg-white/5 p-3 rounded-lg text-black dark:text-white placeholder:text-black/60 dark:placeholder:text-white/75" placeholder="Name">
						<input required type="email" name="email" class="inline-block bg-white/50 dark:bg-white/5 p-3 rounded-lg text-black dark:text-white placeholder:text-black/60 dark:placeholder:text-white/75" placeholder="E-mail">
					</div>
					<textarea required name="message" class="w-full mt-4 bg-white/50 dark:bg-white/5 min-h-[8rem] md:min-h-[15rem] rounded-lg p-3 text-black dark:text-white placeholder:text-black/60 dark:placeholder:text-white/75" placeholder="Message (Body)"></textarea>
				<input type="submit" class="cursor-pointer p-3 mt-3 w-full rounded-lg bg-neutral-900/50 text-white/80 text-lg font-medium dark:hover:text-white/90 hover:bg-black/90 hover:text-white" value="Send Message" />
				</form>
			</div>
			<div class="text-center w-full my-3 text-black/30 dark:text-white/30 text-sm">
				{#if submitted == 1}
				submitting...
				{:else if submitted == 2}
				form submitted!
				{:else if submitted == 3}
				submission failed, try again later
				{/if}
			</div>
		</div>
		<span class="text-black/80 dark:text-white/80 leading-7 mx-2">
			<p class="mb-2">Reach out by leaving a message!</p>
			<p>Alternatively, you can email me at 
				<a class="underline underline-offset-4 decoration-1 text-black/60 hover:text-black/75 dark:text-white/60 dark:hover:text-white/50" href="mailto:jackengle25@gmail.com">jackengle25@gmail.com</a>, connect with me on 
				<a class="underline underline-offset-4 decoration-1 text-black/60 hover:text-black/75 dark:text-white/60 dark:hover:text-white/50" href="https://www.linkedin.com/in/john--engle/">LinkedIn</a>, or follow me on 
				<a class="underline underline-offset-4 decoration-1 text-black/60 hover:text-black/75 dark:text-white/60 dark:hover:text-white/50" href="https://github.com/kayaked">GitHub</a>.
			</p>
			<img src={dolly} class="max-w-64 md:max-w-full m-auto h-auto mt-5 rounded-lg brightness-75" alt="Dog"/>
		</span>
	</div>
</section>