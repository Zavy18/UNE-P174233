document.querySelector("#go")addEventListener("click", (e) => {
    alert();
});

$("#go").on("click", (e) => {
    $.ajax({
        url:"https://coronavirus-19-api.herokuapp.com/all",
        success: function(result){
            $(".main").html(result);
        }
    });
});