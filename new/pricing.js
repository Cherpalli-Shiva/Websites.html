const reviews = [ 
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
    
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("role");
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
const nextBtn = document.querySelector(".next-btn");


// set current item 
let currentItems = 3;

window.addEventListener('DOMContentLoaded',function() {
    showPerson(currentItems)
})

// show person based on item

function showPerson() {
    const item = reviews[currentItems]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}


// show next person

nextBtn.addEventListener('click',function () {
    currentItems++
    if(currentItems > reviews.length - 1) {
        currentItems = 0;
    }
    showPerson()
})

randomBtn.addEventListener('click',function() {
    currentItems = Math.floor(Math.random () * reviews.length)
    showPerson()
})

prevBtn.addEventListener('click',function() {
    currentItems--
    if(currentItems < 0){
        currentItems = reviews.length -1;
    }
    showPerson()
})

