<script lang="ts">
import Icon from '@iconify/svelte';
import ColorMode from './ColorMode.svelte';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { onMount } from 'svelte';

onMount(() => {
    tippy('#github-icon', { content: 'GitHub'});
    tippy('#linkedin-icon', { content: 'LinkedIn'});
    tippy('#email-icon', { content: 'Email'});
});
</script>

<!--<a href="#top"><Icon icon="mdi:question-mark-circle-outline" class="text-2xl hidden md:block"/></a>-->
<a href="mailto:jackengle25@gmail.com" id="email-icon" class="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70"><Icon icon="mdi:email"/></a>
<a href="https://www.linkedin.com/in/john--engle/" id="linkedin-icon" class="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70"><Icon icon="mdi:linkedin"/></a>
<a href="https://github.com/kayaked" id="github-icon" class="text-black dark:text-white hover:text-black/70 dark:hover:text-white/70"><Icon icon="mdi:github"/></a>
<span class="hidden md:inline text-black dark:text-white cursor-default">•</span>