for(let i = 0 ; i<700;i++){
    document.write(`
    <div><img src="https://picsum.photos/id/${i}/536/354"/></div>
    
    `)
}
let imgs = document.querySelectorAll('img')
let wrapper = document.querySelector('.wrapper')
let img = document.querySelector('.wrapper img')




for(let j=0; j < imgs.length; j++){
    imgs[j].addEventListener('click', () =>{
        wrapper.style.transform = 'translateY(0%)'
        let getImg = imgs[j].getAttribute("src")
        img.setAttribute("src",getImg)

    })
} 
wrapper.addEventListener('click',() =>{
    wrapper.style.transform = 'translateY(-130%)'
}) 