$(document).ready(function(){
    $("#search-btn").on("click", function(){
        var searchBox = $("#search-box").val();
        var searchTerm = searchBox.split(" ").join("+")
        //to lower case
        //not logging .done method insted of .then??
        $.ajax(`/search-apibook/${searchTerm}`,{ type: "GET"}).then(function() {
            console.log("success!")
          });
    })
})

