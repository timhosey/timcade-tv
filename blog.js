const api = new GhostContentAPI({
  url: 'https://simplytim.io',
  key: '3f1548bbe04059efbc3960e2c1',
  version: "v5.0"
});

// fetch 5 posts, including related tags and authors
// fetch 5 posts, including related tags and authors
api.posts.browse({limit: 3})
.then((posts) => {
  var content = '';
  var postnum = 0;
  posts.forEach((post) => {
    if (postnum > 0) { content += '<br />'; }
    content += `<br /><a href="${post.url}" target="_blank" class="tdn">${post.title}</a>`;
    postnum += 1;
  });
  document.getElementById('blogPost').innerHTML = content;
})
.catch((err) => {
  console.error(err);
});


//3f1548bbe04059efbc3960e2c1