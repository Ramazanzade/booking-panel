
const staffList = document.querySelector('.staff-list');

    const services = [
        {
            "id": 1,
            "name": "Oral hygiene",
            "image": "unsplash_MLJHxQ5qxxY.png",
            "duration": "1 hour",
            "price": 50.00,
        },
        {
            "id": 2,
            "name": "Implants",
            "image": "unsplash_yo01Z-9HQAw.png",
            "duration": "1 hour 30 minutes",
            "price": 120.00,
        }
        ,
        {
            "id": 3,
            "name": "Check up ",
            "image": "unsplash_fmB7IdFjhTM.png",
            "duration": "1 hour 12 minutes",
            "price": 140.00,
        },
        {
            "id": 4,
            "name": "Implants",
            "image": "unsplash_MLJHxQ5qxxY.png",
            "duration": "1 hour 30 minutes",
            "price": 120.00,
        },
    
];

function populateStaffList() {
    staffList.innerHTML = ''; 

    services.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'staff-item';

        const image = document.createElement('img');
        image.src = `asset/imge/${item.image}`;
        image.className = 'staff-image';

        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'staff-details';

        const name = document.createElement('h1');
        name.textContent = item.name; 
        name.className = 'service-name';

        const duration = document.createElement('p');
        duration.textContent = item.duration;
        duration.className = 'staff-email';

const price = document.createElement('span');
price.textContent = `${item.price}$`;
price.className = 'staff-price';
detailsContainer.appendChild(price);


        listItem.appendChild(image);
        
        detailsContainer.appendChild(name);
        detailsContainer.appendChild(duration);

        listItem.appendChild(detailsContainer);

        staffList.appendChild(listItem);
    });
}

populateStaffList();
let ListItem = null;

function removeSelection() {
    if (ListItem) {
        ListItem.classList.remove('selected');
    }
}

function toggleSelection(item) {
    removeSelection();
    item.classList.add('selected');
    ListItem = item;
}

staffList.addEventListener('click', (event) => {
    const listItem = event.target.closest('.staff-item');
    if (listItem) {
        toggleSelection(listItem);
    }
});

document.querySelector('.staff_button').addEventListener('click', (event) => {
    event.preventDefault();
    
    const selectedItems = staffList.querySelectorAll('.staff-item.selected');
    
    if (selectedItems.length > 0) {
        window.location.href = 'datetime.html';
    } else {
        document.querySelector('.select').style.display = 'block';
    }
});