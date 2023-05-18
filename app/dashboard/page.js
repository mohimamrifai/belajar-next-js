const posts = [
  {
    'judul': 'Tutorial HTML',
    'slug' : 'tutorial-html'
  },
  {
    'judul': 'Pengenalan CSS',
    'slug' : 'pengenalan-css'
  },
  {
    'judul': 'Panduan Belajar JavaScript',
    'slug' : 'panduan-belajar-javascript'
  },
  {
    'judul': 'Tips dan Trik PHP',
    'slug' : 'tips-dan-trik-php'
  },
  {
    'judul': 'Memahami Konsep MVC',
    'slug' : 'memahami-konsep-mvc'
  }
];


import React from 'react'
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Daftar blog post</h3>
      <ul className="posts">
        {posts.map((p) => (
          <li><a href={`/post/${p.slug}`}>{p.judul}</a></li>
        ))}
      </ul>
    </div>
  )
}

