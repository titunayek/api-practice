function loadAlbam(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data));
}
loadAlbam();

 function displayAlbums(albams){
    const albumCotainer = document.getElementById('albams');
    for(const albam of albams){
        const p = document.createElement('p');
        p.innerText = album.title;
        albumCotainer.appendChild(p);
    }
 }
