<script>
	let myValue = 0;
    

    function myRequest() {
    //   fetch("http://localhost:3001/?field1=value1&field2=value2")
      fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007")
      .then(response => response.json())
      .then(data => {
            console.log(data);
            myValue = data;
      }).catch(error => {
        console.log("My error was " + error);
        myValue = error;
        return [];
      });
    }
</script>


<p>Below is a button which makes a request to an HTTP API and shows the response.</p>
<button on:click={myRequest}>
    Response, for a skillionth time. Object requested: {myValue}.
</button>

