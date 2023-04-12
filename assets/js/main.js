let row = document.querySelector('.row');





function cards(user, ruolo, img) {

    let elementDiv = document.createElement('div')
    elementDiv.style.width = '14rem'
    elementDiv.className = 'card'
    elementDiv.style.backgroundColor = 'red'
    row.appendChild(elementDiv)



    let elemImg = document.createElement('img')
    elemImg.className = `card-img-top `
    elemImg.src = img
    elementDiv.append(elemImg);




}

















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
    let nameUtente = singleElements.name;
    let role = singleElements.role;
    let img = `./assets/img/${singleElements.image}`
     cards(nameUtente, role, img)
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