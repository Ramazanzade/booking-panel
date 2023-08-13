document.addEventListener('DOMContentLoaded', function () {
    const confirmationForm = document.querySelector('.confirmation-form');
    const nextButton = document.getElementById('nextButton');
    const modal = document.getElementById('modal');
    const selectedStaffName = new URLSearchParams(window.location.search).get('selectedStaff');
    const selectedStaffElement = document.querySelector('.notep');

    if (selectedStaffName) {
        selectedStaffElement.textContent = selectedStaffName;
    }

    nextButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (confirmationForm.checkValidity()) {
            modal.style.display = 'block';
            modal.querySelector('.modal-content').textContent = 'Confirmation successfully completed!';
        } else {
            alert('Please fill out all required fields.');
        }
    });

    const closeModalButton = document.getElementById('closeModalButton');

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
        confirmationForm.reset();
    });
});
