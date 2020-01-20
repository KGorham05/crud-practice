$( document ).ready(function() {
    console.log( "ready!" );

    $("#cms").on('submit', (e) => {
        e.preventDefault();
        console.log('clicked submit')

        let newPost = {
            title: $("#post-title").val().trim(),
            body: $("#post-body").val().trim()
        }

        $.post("/api/posts", newPost, function() {
            console.log('in here')
            window.location.href = "/blog"
        })

    })

});