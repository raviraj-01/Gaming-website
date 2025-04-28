const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/valo1.mp4','videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4'];

let index = 0;  //for which video is playing currently
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];
    if(index === 4){
        index = -1;   //  if we put 0 then 1st video will never play again
    }
})