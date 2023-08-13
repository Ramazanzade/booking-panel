const monthYearElement = document.getElementById('monthYear');
const calendarDaysElement = document.querySelector('.calendar-days');
const selectedDateElement = document.getElementById('selectedDate');

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

updateCalendar();

document.getElementById('prevMonthBtn').addEventListener('click', () => {
    if (currentMonth > 0) {
        currentMonth--;
    } else {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

document.getElementById('nextMonthBtn').addEventListener('click', () => {
    if (currentMonth < 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

calendarDaysElement.addEventListener('click', event => {
    const dayElement = event.target.closest('.calendar-day');
    if (dayElement) {
        const selectedDay = dayElement.textContent;
        selectedDateElement.textContent = `${currentYear}-${currentMonth + 1}-${selectedDay}`;
    }
});


function updateCalendar() {
    monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    calendarDaysElement.innerHTML = '';

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); 

  for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyDayElement = document.createElement('div');
        emptyDayElement.classList.add('calendar-day', 'empty-day');
        calendarDaysElement.appendChild(emptyDayElement);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        calendarDaysElement.appendChild(dayElement);
    }
}


function getMonthName(monthIndex) {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthIndex];
}

calendarDaysElement.addEventListener('click', event => {
    const dayElement = event.target.closest('.calendar-day');
    if (dayElement) {
        document.querySelectorAll('.calendar-day.selected').forEach(el => {
            el.classList.remove('selected');
        });

        dayElement.classList.add('selected');

        const selectedDay = dayElement.textContent;
        selectedDateElement.textContent = `${currentYear}-${currentMonth + 1}-${selectedDay}`;
    }
});



const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.style.backgroundColor = 'rgba(236, 239, 242, 1)';
            }
        });

        if (button.style.backgroundColor !== 'green') {
            button.dataset.originalColor = button.style.backgroundColor;
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = button.dataset.originalColor || '';
        }
    });
});


calendarDaysElement.addEventListener('click', () => {
    const calendar1Div = document.querySelector('.selectbuton1');
    
    calendar1Div.style.display = 'flex';
});


const nextButton = document.getElementById('nextButton');
let calendarSelected = false;
let calendar1ButtonSelected = false;

calendarDaysElement.addEventListener('click', () => {
    const calendar1Div = document.querySelector('.calendar1');
    
    calendar1Div.style.display = 'block';
    calendarSelected = true;

    checkNextButtonStatus();
});

button1.addEventListener('click', () => {
    calendar1ButtonSelected = true;

    checkNextButtonStatus();
});

button2.addEventListener('click', () => {
    calendar1ButtonSelected = true;

    checkNextButtonStatus();
});

button3.addEventListener('click', () => {
    calendar1ButtonSelected = true;

    checkNextButtonStatus();
});

function checkNextButtonStatus() {
    if (calendarSelected && calendar1ButtonSelected) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', 'disabled');
    }
}

nextButton.addEventListener('click', (event) => {
    if (!calendar1ButtonSelected) {
        event.preventDefault(); 
        document.querySelector('.select').style.display = 'block';
    }
});

