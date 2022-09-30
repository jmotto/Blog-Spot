const commentFormHandler = async function (event) {
	event.preventDefault();

    const post_id = document.querySelector('.new-comment-form').dataset.postid;
    
    const comment_description = document.querySelector('#comment_description').value.trim();

    if ( comment_description) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
          } else {
            alert("failed to create comment");
          }
        
    }
};

document
	.querySelector('.new-comment-form')
	.addEventListener('submit', commentFormHandler);