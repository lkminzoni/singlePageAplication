// This file made to simulate server
const data = [
    {
        "id":"text1",
        "img":"./assets/img/img_01.jpg",
        "title":"Title 1 - First title content",
        "body":"(Text1) SLorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi blanditiis voluptas, aliquam omnis nihil nobis mollitia ex veniam expedita accusantium temporibus sequi quasi autem vitae dignissimos soluta eius distinctio laboriosam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi blanditiis voluptas, aliquam omnis nihil nobis mollitia ex veniam expedita accusantium temporibus sequi quasi autem vitae dignissimos soluta eius distinctio laboriosam."

    },
    {
        "id":"text2",
        "img":"./assets/img/img_02.jpg",
        "title":"Title 2 - Second titel content",
        "body":"(Text2) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi blanditiis voluptas, aliquam omnis nihil nobis mollitia ex veniam expedita accusantium temporibus sequi quasi autem vitae dignissimos soluta eius distinctio laboriosam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi blanditiis voluptas, aliquam omnis nihil nobis mollitia ex veniam expedita accusantium temporibus sequi quasi autem vitae dignissimos soluta eius distinctio laboriosam."
    
        },
        {
            "id":"text3",
            "img":"./assets/img/img_03.jpg",
            "title":"Title 3 - Third title content.",
            "body":"(Text3) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi blanditiis voluptas, aliquam omnis nihil nobis mollitia ex veniam expedita accusantium temporibus sequi quasi autem vitae dignissimos soluta eius distinctio laboriosam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi blanditiis voluptas, aliquam omnis nihil nobis mollitia ex veniam expedita accusantium temporibus sequi quasi autem vitae dignissimos soluta eius distinctio laboriosam."
        
            }
]



const btnToText = document.querySelectorAll('.navbar-item')
const textTitle = document.querySelector('.main-text-title')
const textBody = document.querySelector('.main-text-body')
let img = document.querySelector('img')
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


function changeContent(e){
    if(e.target.classList.contains('navbar-item') || e.target.parentElement.classList.contains('navbar-item')){
        getContent(e.target.innerText.toLowerCase().split(' ').join(''))
    }
}

function getContent(id){
    data.filter((e) => {
        if(e.id === id){
            img.src = e.img
            textTitle.innerText = e.title;
            textBody.innerText = e.body
            
        }
    })
}

function filterContent(element){

            data.filter(e => {
                if(e.title.toLowerCase().includes(element.target.value)){
                    img.src = e.img
                   textTitle.innerText = e.title;
                   textBody.innerText = e.body

                }else{
                    return
                }
            })

}

function activeClass(item){
   btnToText.forEach( e => {
       if(e.classList.contains('active')){
           e.classList.remove('active')
       }
   })

   if(item.target.classList.contains('navbar-item')){
        item.target.classList.add('active')
   }else if(item.target.parentElement.classList.contains('navbar-item')){
    item.target.parentElement.classList.add('active')
   }
}

// Listeners
btnToText.forEach(item => {
    item.addEventListener('click', changeContent)
})
btnToText.forEach(item => {
    item.addEventListener('click', activeClass)
})

input.addEventListener('keyup',filterContent)

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

getContent('text1')



