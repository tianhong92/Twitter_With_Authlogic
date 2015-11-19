//$(document).ready(function() {
$(document).on("ready page:load", function(){
    $("#new_post").on("ajax:success", function (e, data, status, xhr) {
        $("#posts").prepend(data);
        //$("#content_table").prepend(data);
    }).on("ajax:error", function (e, xhr, status, error) {
        // failure
        // do something
        alert('tweet not saved');
    });
});


//$(document).ready(function(){
//    $("p").on("click", function(){
//        alert("The paragraph was clicked.");
//    });
//});
//$("#post_message").textareaCounter({ limit: 100 });
//$("#post_message").on('keyup',textareaCounter({ limit: 100 }));

$(document).ready(function() {
    function checkLen()
    {
        var maxChars = 140;
        if (this.value.length > maxChars) 
                     this.value = this.value.substring(0,maxChars);
        var curr = maxChars - this.value.length;
        document.getElementById("words-count").innerHTML = curr.toString();
    };

    $("#post_message").on('keyup',checkLen);
});
