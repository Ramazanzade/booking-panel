
const staffList = document.querySelector('.staff-list');

const staff = [
    {
        "id": 1,
        "name": "Alex Rosetta",
        "email": "alexyrosetta@gmail.com",
        "image": "unsplash_279xIHymPYY.png"
    },
    {
        "id": 2,
        "name": " Maria Jule",
        "email": "alexyrosetta@gmail.com",
        "image": "unsplash_IF9TK5Uy-KI.png"
    },
    {
        "id": 3,
        "name": "Nizam Ramazanzade",
        "email": "alexyrosetta@gmail.com",
        "image": "unsplash_279xIHymPYY.png"
    },
    {
        "id": 4,
        "name": "Alex Rosetta",
        "email": "alexyrosetta@gmail.com",
        "image": "unsplash_IF9TK5Uy-KI.png"
    },
    
];

function populateStaffList() {
    staffList.innerHTML = '';

    staff.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'staff-item';

        const image = document.createElement('img');
        image.src = `asset/imge/${item.image}`;
        image.className = 'staff-image';

        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'staff-details';

        const name = document.createElement('h1');
        name.textContent = item.name;
        name.className = 'staff-name';

        const email = document.createElement('p');
        email.textContent = item.email;
        email.className = 'staff-email';

        listItem.appendChild(image);

        detailsContainer.appendChild(name);
        detailsContainer.appendChild(email);

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
        window.location.href = 'Service.html'; 
    } else {
        document.querySelector('.select').style.display = 'block';
    }
});




