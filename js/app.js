//Random paveikslelio funkcija

const imgNumber = ()=>{
    return Math.floor(Math.random()*10);
}

document.querySelector('.button-show').addEventListener('click', ()=>{

    for(let i=0; i<10;i++){
        const list = document.createElement('li');
        list.className ='col-sm-3 crop';
        list.style.listStyle = 'none';
        
        const img = document.createElement('img');
        img.style.height = '223px';
        img.style.width = '315px';
        img.style.padding = '2px'; 
        img.src = `img/${i}.jpg`;
    
        list.appendChild(img);
    
        document.querySelector('ul').appendChild(list);
    }    
    document.querySelector('.button-show').style.display = 'none';
})


document.querySelector('.button-randomize').addEventListener('click', () => {
    const images = document.querySelectorAll('.crop img');
    
    // Create an array of unique indices
    const uniqueIndices = [];
    while (uniqueIndices.length < 10) {
        const randomIndex = imgNumber();
        if (!uniqueIndices.includes(randomIndex)) {
            uniqueIndices.push(randomIndex);
        }
    }

    // Apply the new shuffled indices to the images
    images.forEach((image, index) => {
        image.src = `img/${uniqueIndices[index]}.jpg`;
    });
});

document.querySelector('ul').addEventListener('dblclick', (event) => {    
    const targetImage = event.target;
    targetImage.src = 'img/11.gif';
    targetImage.style.height = '223px';
    targetImage.style.width = '315px';
    targetImage.style.padding = '2px';

});