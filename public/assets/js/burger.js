$(function () {
    //click event for changing devoured state
    $(".change-state").on("click", function (event) {

        var id = $(this).data("id"); //grabbing the button id
        var newDevouredState = {
            devoured: true,
            burger_id: id
        }

        //Send PUT requests to change burger state
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                //reload the page to get the updated list
                location.reload();
            }
        );
    });
    //click event for adding a new burger
    $(".create-form").on("submit", function (event) {
        //preventing preventDefault on submit event
        event.preventDefault();

        var newBurger = {
            name: $("#b").val().trim(),
        };

        //validating form for clean entry
        function validateForm() {
            if ($("#b").val().trim() === "") {
                alert("Please enter a burger name.")
                return;
            }
            else {
                //send POST request
                $.ajax("/api/burgers", {
                    type: "POST",
                    data: newBurger
                }).then(
                    function () {
                        location.reload();
                    }
                )
            }
        };
        validateForm();
    });
});