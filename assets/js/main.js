let row = document.querySelector('.row');


let arrImgSrc = [
    './assets/img/wayne-barnett-founder-ceo.jpg',
    './assets/img/angela-caroll-chief-editor.jpg',
    './assets/img/walter-gordon-office-manager.jpg',
    './assets/img/angela-lopez-social-media-manager.jpg',
    './assets/img/scott-estrada-developer.jpg',
    './assets/img/barbara-ramos-graphic-designer.jpg'
]

for (let i = 0; i <arrImgSrc.length; i++) {
   let card =  cards()
    card.innerHTML += `${arrImgSrc[i]}`
}




function cards() {
    for (let i = 0; i < 6; i++) {
        let elementDiv = document.createElement('div')
        elementDiv.style.width = '14rem'
        elementDiv.className = 'card'
        elementDiv.style.backgroundColor = 'red'
        row.appendChild(elementDiv)

        let elemImg = document.createElement('img')
        elemImg.className = 'card-img-top'
        elemImg.src =arrImgSrc[i]
        elementDiv.append(elemImg);


        return elementDiv
    }


}
let card = cards()
















const team = [{
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

for (let i = 0; i < team.length; i++) {
    let singleElements = team[i]
    console.log(singleElements);
    for (let key in singleElements) {
        document.writeln(singleElements[key])
    }

}












// function cards() {
//     let elementDiv = document.createElement('div')
//     elementDiv.style.width = '18rem'
//     let elemImg = document.createElement('img')
//     elemImg.className = 'card-img-top'
//     elementDiv.append(elemImg);

//     function cardBody() {
//         let cardBody = document.createElement('div')
//         let cardTitle = document.createElement('h5')
//         cardTitle.classList.add('card-title')
//         let paragraf = document.createElement('p')
//         paragraf.classList.add('card-text')
//         paragraf.innerText = `Angela carol`
//         cardBody.appendChild(cardTitle, paragraf)
//     }

//     elementDiv.append(cardBody())
//     return elementDiv + cardBody()
// }
// cards()
// let card = cards()





// row.innerHTML += `${card}`