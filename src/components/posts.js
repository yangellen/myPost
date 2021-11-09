import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div>
      <center><h1>Post List</h1></center>
      {posts.map((post) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{post.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{post.username}</h6>
            <p class="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Posts