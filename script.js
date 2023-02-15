//Les donnees de l'application
const classe = {
    nom : 'L3 GL',
    semaine : '13/02/2023 - 17/02/2023',
    effectif: 34,
    planning: [
        [
            {module: 'Python', prof: 'Aly NIANG', duree: 3, debut: 9, salle:'201'},
            {module: 'PHP', prof: 'Wane', duree: 4, debut: 13, salle:'101'},
        ],[],[],[],[],
        [
            {module: 'Java', prof: 'NIASS', duree: 4, debut: 12, salle:'info'}
        ]
    ]
};
//
const colors = ['#da974b','#E8B01F','#DBCB89','#71BCF3','#E0474C','#7FB8B4','#B2B1B1','#9F4C9D','#0073BC'];
const cards = document.querySelectorAll('.card');
const select = document.querySelector("#select");

const divClasses = document.querySelector('#classes');
const divEnseignants = document.querySelector('#enseignants');
const divSalles = document.querySelector('#salles');

const addCours = document.querySelectorAll('.add-cours');
const selectModule = document.querySelector('#select_module');
const selectEnseignant = document.querySelector('#select_enseignant');
const selectDebut = document.querySelector('#select_debut');
const selectFin = document.querySelector('#select_fin');
const selectSalle = document.querySelector('#select_salle');
const errorModal = document.querySelector('.error-modal');
const btnSaveModal = document.querySelector('#save');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#closeModal');
let jour = 0;


printPlanning();


//EVENTS
addCours.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        //Recuperer le btnPlus
        jour = e.target.getAttribute('day') - 1;
        //Ovrir le modal
        modal.classList.toggle('open');
    })
});


//FUNCTIONS
function printPlanning(){//Afficher le planning de la classe
    //effacer tous les cours du planning actuel
    cleanCours();
    //Parcourir les cours de la classe actuelle et afficher les donnees
    classe.planning.forEach((p,i) => {
        const jour = document.querySelector(`#day_${i + 1}`);
        //Parcourir les cours du jour
        p.forEach(c => {
            let posColor = Math.floor(Math.random() * colors.length);
            jour.appendChild(createDivCours(c.debut,c.duree,colors[posColor],c.module,c.prof,c.salle));
        });
    });
}

function createDivCours(debut, duree, color, module, prof, salle){
    col = debut - 8;

    const div = document.createElement('div'); //<div></div>
    div.className = 'cours';

    const spanDelete = document.createElement('span');
    spanDelete.innerText = 'x';
    spanDelete.className = 'delete-cours';

    const small1 = document.createElement('small');
    small1.innerText = prof;

    const small2 = document.createElement('small');
    small2.innerText = salle;

    const h3 = document.createElement('h3');
    h3.innerText = module;

    div.style.backgroundColor = color;
    div.style.width = `${ duree * 10 }%`;
    div.style.marginLeft = `${ col * 10 }%`

    div.append(spanDelete,small1,h3,small2);
    return div;    
}

function cleanCours(){
    const coursContents = document.querySelectorAll('.day-content');
    coursContents.forEach(cours => {
        cours.innerHTML = ''
    });
}