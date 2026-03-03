let minBody = document.querySelector('.box-card');
let search = document.querySelector('#search');
let cirlcl = document.querySelector('.cirlcl');
let serchslider = document.querySelector('.serchslider');
let locsaver = localStorage.getItem('them');
cirlcl.onclick = toggl
let content = {
    serise:[],
    ser:[],
}
if(localStorage.them == 'light'){
    light()
}else{
    darke()
}
// INSTALL API
async function install(){

    document.querySelector('.loading').style.display = "flex";
    document.querySelector('.box-card').style.display = "none";

    const a = await fetch('https://api.tvmaze.com/shows')
    const respons = await a.json()
   content.serise = respons
    bulde()

    document.querySelector('.loading').style.display = "none";
    document.querySelector('.box-card').style.display = "flex";
}

// BULDE
function bulde(){
    for(let i = 0; i < content.serise.length;i++){
        content.ser.push({
            name : content.serise[i].name,
            img: content.serise[i].image.original,
            language: content.serise[i].language,
            runtime: content.serise[i].runtime,
            rating: content.serise[i].rating.average,
        })
        
    }
    
     gets()
}

// CREAT CARDS
function buldeCard(a){
    let r = '';
        r+=`
        
        <a href="#"class="card">
            <img src="${a.img}" alt="">
            <div class="info">
                <span><p>Rating: ${a.rating} / runtime: ${a.runtime}</p></span>
                <h3>${a.name}</h3>
            </div>
        </a>
        
        `
    
    minBody.innerHTML += r
}

// CREAT CARDS SEARCH
function buldeCardser(a){
    let r = '';
        r=`
        
        <a href="#"class="card">
            <img src="${a.image.original}" alt="">
            <div class="info">
                <span><p>Rating: ${a.rating.average} / runtime: ${a.runtime}</p></span>
                <h3>${a.name}</h3>
            </div>
        </a>
        
        `
        serchslider.innerHTML = r
        
}

// RENDER CARDS
function gets(){
    let r = '';
    for(let i = 0; i < content.ser.length;i++){
        let a = content.ser[i];
        buldeCard(a)
    }
  
}

// INSTAL API SEARCH & RENDER SERCH CARDS
async function instalsl(val){
    const a = await fetch(`https://api.tvmaze.com/search/shows?q=${val}`)
    const respons = await a.json()
   
   if(search.value != ''){
    for(let i = 0; i < respons.length;i++){
        let a =  respons[i].show;
        buldeCardser(a)
      }
    serchslider.style.display = 'flex';
    
}else{
    serchslider.style.display = 'none';
}
    
}

// light them
function light(){
    document.body.classList.add('light')
    localStorage.setItem('them','light');
    cirlcl.style.transform= 'translateX(20px)'
}

// darke them
function darke(){
    document.body.classList.remove('light')
    localStorage.setItem('them','dark');
    cirlcl.style.transform= 'translateX(0px)'
}

// Toggle
function toggl(){
    if(localStorage.them != 'light'){
        light()
    }else{
        darke()
    }
}

install()

