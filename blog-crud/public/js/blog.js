$(document).ready(function() {
    $.get("/api/posts", function(data) {
        console.log('Your saved post data:')
        console.log(data)
    })
})