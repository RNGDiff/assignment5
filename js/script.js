
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data =>{ displayNames(data);})
.catch(error => console.error('Error', error));

const body = document.querySelector('body');
function displayNames(data){
    data.forEach((user) => {

        // & CREATE CONTAINER
        const userDataContainer = document.createElement('div');
        userDataContainer.classList.add('user-data-container');
        const extraDatacontainer = document.createElement('div');
        extraDatacontainer.classList.add('extra-data-container');

        // const titleContainer = document.createElement('div');
        // titleContainer.classList.add('title-container');


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

        // const titleName = document.createElement('h3');
        // const titleUsername  = document.createElement('h3');
        // const titleEmail  = document.createElement('h3');
        // const titleCity  = document.createElement('h3');
        // const titlePhone  = document.createElement('h3');
        // const titleCompany  = document.createElement('h3');


        // !CLASSES
        cityElement.classList.add('hidden');
        phoneElement.classList.add('hidden');
        companyElement.classList.add('hidden');

        // ~ ASSIGN TEXTCONTENT TO CORRESPONDING DATA
        // nameElement.textContent = user.name;
        // usernameElement.textContent = user.username;
        // emailElement.textContent = user.email;
        // cityElement.textContent = user.address.city;
        // phoneElement.textContent = user.phone;
        // companyElement.textContent = user.company.name;
        nameElement.textContent = `Name: ${user.name}`;
        usernameElement.textContent = `Username: ${user.username}`;
        emailElement.textContent = `Email: ${user.email}`;
        cityElement.textContent = `City: ${user.address.city}`;
        phoneElement.textContent = `Phone: ${user.phone}`;
        companyElement.textContent = `Company: ${user.company.name}`;

        // !Show more btns to display more data
        moreBtn.addEventListener('click', ()=>{
            extraDatacontainer.classList.toggle('active')
            if(moreBtn.textContent == 'Show more'){
                moreBtn.textContent = 'Show less';

            }
            else{
                moreBtn.textContent = 'Show more';
            }
        });

        // ^ Append to container
        userDataContainer.appendChild(nameElement);
        userDataContainer.appendChild(usernameElement);
        userDataContainer.appendChild(emailElement);
        extraDatacontainer.appendChild(cityElement);
        extraDatacontainer.appendChild(phoneElement);
        extraDatacontainer.appendChild(companyElement);
        userDataContainer.appendChild(moreBtn);
        // ^ Append container to body
        body.appendChild(userDataContainer);
        body.appendChild(extraDatacontainer);

    });
};

//!Apply js code after sites loaded in
document.addEventListener("DOMContentLoaded", function () {
// ^ Get showbtn
    const showAllbtn = document.querySelector('.show-all');
    showAllbtn.addEventListener('click', ()=>{
// & Get showmore buttons and all our extra data text elements
        const showMoreBtns = document.querySelectorAll('.more-btn');
        const moreInfo = document.querySelectorAll('.extra-data-container');
        // ~ Once showbtn is clicked we wanna change text of the btns and display the extra data/info
        if(showAllbtn.textContent === 'Show all'){
            showAllbtn.textContent = 'Hide all';

            moreInfo.forEach(info =>{
                info.classList.add('active');
            });
            showMoreBtns.forEach(btn =>{
                btn.textContent = 'Show less'
                
            });
        }
        // ! Reverse...
        else{
            showAllbtn.textContent = 'Show all';

            moreInfo.forEach(info =>{
                info.classList.remove('active');
            });
            showMoreBtns.forEach(btn =>{
                btn.textContent = 'Show more'
                
            });
        };
    });
});



