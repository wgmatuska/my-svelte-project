<script>
	let myValue;
    function myRequest() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      .then(console.log(response))
      .catch(error => {
        console.log("My error was " + error);
        myValue = error;
        return [];
      });
    }
</script>


<p>Below is a button which makes a request to an HTTP API and shows the response.</p>
<button on:click={myRequest}>
    The response code was {myValue}.
</button>

