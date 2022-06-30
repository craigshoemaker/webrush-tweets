<script>
	import { onMount } from "svelte";

	let tweetText = "Loading...";

	onMount(async () => {
		const res = await fetch(`/api/composeTweet`);
		tweetText = await res.text();
	});
</script>

<main>
	<h1>Web Rush tweet composer</h1>
	<p><a href="https://quillbot.com/" target="_blank">Paraphraser</a></p>
	<textarea bind:value={tweetText}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	textarea {
		width: 70%;
		height: 20rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
