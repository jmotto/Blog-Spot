const commentFormHandler = async function (event) {
	event.preventDefault();

    // const post_id = document.querySelector('.new-comment-form').id;
    const urlArray = window.location.href.split("/");
    const post_id = urlArray[urlArray.length -1];
    console.log(post_id);
    const description = document.querySelector('#comment_description').value.trim();
    console.log(description);
    if ( description) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                description,
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