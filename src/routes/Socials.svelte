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
<a href="mailto:jackengle25@gmail.com" id="email-icon"><Icon icon="mdi:email"/></a>
<a href="https://www.linkedin.com/in/john--engle/" id="linkedin-icon"><Icon icon="mdi:linkedin"/></a>
<a href="https://github.com/kayaked" id="github-icon"><Icon icon="mdi:github"/></a>
<span class="hidden md:inline">•</span>