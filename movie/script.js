
// const API_KEY = e8c1be6a736995103a7be1f0889d3eb0;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGMxYmU2YTczNjk5NTEwM2E3YmUxZjA4ODlkM2ViMCIsInN1YiI6IjY1MzA4YmIyOWQ1OTJjMDBlY2NhNTFmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HF5V0mA4wTGE3E-06jSiTT6eS-X9FYYsBKxv0zEgZc8'
    }
  };
  
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => run(data ))
    .catch(err => console.error(err))

// title(제목), overview(내용 요약), poster_path(포스터 이미지 경로),
