


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{
    displayNames(data);
    showAllBtn();
})
.catch(error => console.error('Error', error));

const body = document.querySelector('body');
function displayNames(data){
    data.forEach((user) => {
        // & CREATE CONTAINER
        const userDataContainer = document.createElement('div');
        userDataContainer.classList.add('user-data-container');
        // !CREATE BUTTONS
        const moreBtn = document.createElement('button');
        moreBtn.classList.add('more-btn');
        moreBtn.textContent = 'Show more';
        // ^ create ELEMENTS
        const nameElement = document.createElement('h3');
        const usernameElement = document.createElement('h3');
        const emailElement = document.createElement('h3');        
        const cityElement = document.createElement('h3');
        const phoneElement = document.createElement('h3');
        const companyElement = document.createElement('h3');

        // !CLASSES

        cityElement.classList.add('hidden');
        phoneElement.classList.add('hidden');
        companyElement.classList.add('hidden');

        // ~ ASSIGN TEXTCONTENT TO CORRESPONDING DATA
        nameElement.textContent = user.name;
        usernameElement.textContent = user.username;
        emailElement.textContent = user.email;
        cityElement.textContent = user.address.city;
        phoneElement.textContent = user.phone;
        companyElement.textContent = user.company.name;

        moreBtn.addEventListener('click', ()=>{
            if(moreBtn.textContent == 'Show more'){
                moreBtn.textContent = 'Show less';
                cityElement.classList.add('active');
                phoneElement.classList.add('active');
                companyElement.classList.add('active');
            }
            else{
                moreBtn.textContent = 'Show more';
                cityElement.classList.remove('active');
                phoneElement.classList.remove('active');
                companyElement.classList.remove('active');
            }
        });

        

        userDataContainer.appendChild(nameElement);
        userDataContainer.appendChild(usernameElement);
        userDataContainer.appendChild(emailElement);
        userDataContainer.appendChild(cityElement);
        userDataContainer.appendChild(phoneElement);
        userDataContainer.appendChild(companyElement);
        userDataContainer.appendChild(moreBtn);

        body.appendChild(userDataContainer);
    });
};


const showAll = document.querySelector('.show-all');
function showAllBtn(){
    showAll.addEventListener('click',()=>{
        const showBtns = document.querySelectorAll('.more-btn');
        const textElements = document.querySelectorAll('.hidden');
        if(showAll.textContent == 'show all'){
            showAll.textContent = 'Hide all'
            textElements.forEach(element => {
                element.classList.add('active');
            });
            showBtns.forEach(element => {
                element.textContent = 'Show less';
            });
            
        }
        else{
            showAll.textContent = 'Show all';
            textElements.forEach(element => {
                element.classList.remove('active');
            });
            showBtns.forEach(element => {
                element.textContent = 'Show more';
            });
        }
    })

}
