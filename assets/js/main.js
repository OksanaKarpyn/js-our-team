let row = document.querySelector('.row');





function cards(user, ruolo, img) {
// card
    let elementDiv = document.createElement('div')
    elementDiv.style.width = '12rem'
    elementDiv.className = 'card'
    elementDiv.style.backgroundColor = 'white'
    row.appendChild(elementDiv)
// img
    let elemImg = document.createElement('img')
    elemImg.className = 'card-img-top'
    elemImg.style.width='100%'
    elemImg.src = img
    elementDiv.append(elemImg);
    // title
    let nameUser = document.createElement('h3')
    nameUser.style.paddingTop='10px'
    nameUser.style.color='#7F7A74'
    nameUser.style.fontSize='100%'
    nameUser.innerHTML += user
    elementDiv.appendChild(nameUser)
    // subtitle
    let subtitle = document.createElement('h5')
    subtitle.style.color='#A09D99'
    subtitle.style.fontSize='x-small'
    subtitle.innerHTML = ruolo
    elementDiv.appendChild(subtitle)
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
    let nameUser = singleElements.name;
    let role = singleElements.role;
    let imgSrl= './assets/img/'
    let img = `${imgSrl}${singleElements.image}`
    cards(nameUser, role, img)
}

