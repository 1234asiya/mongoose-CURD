// $(document).on("ajaxComplete", function () {
//     $(".log").text("Triggered ajaxComplete handler.");
// });
$(document).on("ajaxComplete", function (event, xhr, settings) {
    console.log(settings.url)
    if (settings.url === "ajax/test.html") {
        $(".log").text("Triggered ajaxComplete handler. The result is " +
            xhr.responseText);
    }
});
$(document).ready(function () {
    $(".trigger").on("click", function () {
        $(".result").load("ajax/test.html");
    });
})

