const api = new GhostContentAPI({
  url: 'https://simplytim.io',
  key: '3f1548bbe04059efbc3960e2c1',
  version: "v5.0"
});

// fetch 4 posts, including related tags and authors
api.posts.browse({limit: 4})
.then((posts) => {
  var content = `<div class="divTable tbl"><div class="divTableBody">`;
  var postnum = 0;
  posts.forEach((post) => {
    if (postnum == 0 || postnum == 2) { content += '<div class="divTableRow">'; }
    content += `<div class="divTableCell">`;
    if (postnum == 0) { content += `<img src='img/new.gif' alt='blinking new indicator' />&nbsp;` }
    content += `<a href="${post.url}" target="_blank" class="tdn">${post.title}</a>`;
    content += `</div>`;
    if (postnum == 1 || postnum == 3) { content += '</div>'; }
    postnum += 1;
  });
  content += `</div></div>`
  document.getElementById('blogPost').innerHTML = content;
})
.catch((err) => {
  console.error(err);
});


//3f1548bbe04059efbc3960e2c1