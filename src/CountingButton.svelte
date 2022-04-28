<script>
	let count = 0;

    function incrementCount() {
        count +=1;
    }
</script>


<p>Below is a button which counts the number of times it's been clicked.</p>
<button on:click={incrementCount}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>




<style>
	p {
		color: purple;
		font-family:'Times New Roman', Times, serif;
		font-size: 1.6em;
	}
</style>