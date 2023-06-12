console.log('JS OK')

// * PHASE 1

// ? Functions //*******************/
// Crate ready to inject template from an object
function objectToString(object) {
    let string = '<div class="card col col-4 py-3 text-center">';
    let substring = '<div class="card-body">';

    // For every key in object create a template
    for (let key in object) {

        if (key === 'photo') {
            string += `<img src="./img/${object['photo']}" class="card-img-top" alt="photo"></img>`
        }

        else if (key === 'name') {
            substring += `<h5 class="card-title">${object['name']}</h5>`
        }

        else if (key === 'job') {
            substring += `<p class="card-text">${object['job']}</p>`
        }
    }

    // Close substring tag
    substring += '</div>';
    // Add substring and close string
    string += substring + '</div>';

    return string;
}
// ? *******************************/

// LINK DOM ELEMENTS
const rowElement = document.querySelector('.row');

// Crate objects array
const team = [
    {
        name: "Wayne Barnett",
        job: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        job: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        job: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        job: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        job: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        job: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

// Crate var to inject
let toInject = '';

// Create string for every array element
for (let i = 0; i < team.length; i++) {
    toInject += objectToString(team[i]);
}

// Inject result in DOM
rowElement.innerHTML = toInject;