window.addEventListener ('load', function() {
    var button = document.getElementById('tweet-btn');
    button.addEventListener ('click', function() {
         var comment = document.getElementById('comment-area');
         var timeline = document.getElementById('timeline');
        if(comment.value){
            var newComment = document.createElement('div');
            newComment.textContent = comment.value;
            timeline.appendChild(newComment);
            newComment.classList.add('newComment');
            comment.value = '';
            };
    }); 


});