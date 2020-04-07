$(function () {
    $("#addBook").on("click", (event) => {
        window.location.pathname = `/add-book`
    });

    $("#editBook").on("click", (event) => {
        const bookID = $("#bookId").html().trim();
        window.location.pathname = `../api/book/` + bookID;
    });

    $("#addToCart").on("click", (event) => {
        const bookID = $("#bookId").html().trim();
        const url = `/api/cart/add/` + bookID;

        $.post(url)
            .then(function () {
                window.location.reload();
            })
            .catch(function (err) {
            console.log(err);
        });
    });
});