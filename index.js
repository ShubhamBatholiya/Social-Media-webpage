// side bar

const menuItems = document.querySelectorAll(".menu-item");


// massages 

const massagesNotification=document.querySelector('#massage-notification');

const massages= document.querySelector('.massages');

const massage = massages.querySelectorAll('.massage');

const massageSearch=document.querySelector('#massage-search');
 



// remove active class from all menu items

const changeActiveItem=() => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


menuItems.forEach(item => {
    item.addEventListener('click',()=> {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notifications-popup').style.display='none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display='none';
        }
    })
})


// *********************** MASSAGES ***********************

// search chat

massageSearch.addEventListener('keyup', searchMassage);
// highlight on massages

massagesNotification.addEventListener('click',()=> {
    massages.style.boxShadow = '0 0 1rem var(--color-primary)';
    massagesNotification.querySelector('.notification-count').style.display='none';
    setTimeout(() => {
        massages.style.boxShadow = 'none';
    },2000)
})

// search chat

const searchMassage = () => {
    const val = massageSearch.value.toLowerCase();
    massages.forEach(user => {
        let name = user.querySelectorAll("h5").textContent.toLowerCase();

        if(name.indexOf(val) !=-1){
            user.style.display='flex';
        } else{
            user.style.display='none';
        }
    })
}


  