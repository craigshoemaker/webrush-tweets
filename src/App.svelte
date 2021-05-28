<script>
	import { onMount } from "svelte";

	let tweetText = "";

	onMount(async () => {
		const res = await fetch(`/api/composeTweet`);
		tweetText = await res.text();
	});
</script>

<main>
	<h1>Web Rush tweet composer</h1>
	<textarea bind:value={tweetText}>Loading...</textarea>
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
