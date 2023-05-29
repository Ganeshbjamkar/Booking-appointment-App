document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointment-form');
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const appointmentsList = document.getElementById('appointments-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = nameInput.value;
      const date = dateInput.value;
      const time = timeInput.value;
  
      // Create a new appointment object
      const appointment = { name, date, time };
  
      // Add the appointment to local storage
      const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      storedAppointments.push(appointment);
      localStorage.setItem('appointments', JSON.stringify(storedAppointments));
  
      // Clear form inputs
      nameInput.value = '';
      dateInput.value = '';
      timeInput.value = '';
  
      // Display the updated appointments list
      displayAppointments();
    });
  
    function displayAppointments() {
      // Clear the existing list
      appointmentsList.innerHTML = '';
  
      // Retrieve the stored appointments from local storage
      const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
  
      // Add each appointment to the list
      storedAppointments.forEach(function(appointment) {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${appointment.name}, Date: ${appointment.date}, Time: ${appointment.time}`;
        appointmentsList.appendChild(listItem);
      });
    }
  
    // Initial display of appointments
    // displayAppointments();
  });
  
 ///// Delete appointment

 // Retrieve appointments from local storage (if any)
var appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// Function to render appointments on the web page
function renderAppointments() {
  var appointmentsList = document.getElementById('appointments-list');
  appointmentsList.innerHTML = '';

  appointments.forEach(function(appointment, index) {
    var appointmentItem = document.createElement('li');
    appointmentItem.textContent = appointment.name + ' - ' + appointment.date + ' - ' + appointment.time;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteAppointment(index);
    });

    appointmentItem.appendChild(deleteButton);
    appointmentsList.appendChild(appointmentItem);
  });
}

// Function to delete an appointment
function deleteAppointment(index) {
  appointments.splice(index, 1);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  renderAppointments();
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var dateInput = document.getElementById('date');
  var timeInput = document.getElementById('time');

  var appointment = {
    name: nameInput.value,
    date: dateInput.value,
    time: timeInput.value
  };

  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  renderAppointments();

  nameInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
}

// Add event listener to the form
var appointmentForm = document.getElementById('appointment-form');
appointmentForm.addEventListener('submit', handleFormSubmit);

// Initial rendering of appointments
renderAppointments();


//// Adding Edit option in web page

function renderAppointments() {
  var appointmentsList = document.getElementById('appointments-list');
  appointmentsList.innerHTML = '';

  appointments.forEach(function(appointment, index) {
    var appointmentItem = document.createElement('li');
    appointmentItem.textContent = appointment.name + ' - ' + appointment.date + ' - ' + appointment.time;

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editAppointment(index);
    });

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteAppointment(index);
    });

    appointmentItem.appendChild(editButton);
    appointmentItem.appendChild(deleteButton);
    appointmentsList.appendChild(appointmentItem);
  });
}


function editAppointment(index) {
  var appointment = appointments[index];

  // Populate the form fields with the appointment data
  var nameInput = document.getElementById('name');
  var dateInput = document.getElementById('date');
  var timeInput = document.getElementById('time');

  nameInput.value = appointment.name;
  dateInput.value = appointment.date;
  timeInput.value = appointment.time;

  // Remove the appointment from the list and local storage
  appointments.splice(index, 1);
  localStorage.setItem('appointments', JSON.stringify(appointments));
  renderAppointments();
}


function handleFormSubmit(event) {
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var dateInput = document.getElementById('date');
  var timeInput = document.getElementById('time');

  var appointment = {
    name: nameInput.value,
    date: dateInput.value,
    time: timeInput.value
  };

  // Check if there is an appointment being edited
  var editIndex = appointments.findIndex(function(appointment) {
    return appointment.isEditing === true;
  });

  if (editIndex !== -1) {
    // Update the existing appointment
    appointments[editIndex] = appointment;
  } else {
    // Add a new appointment
    appointments.push(appointment);
  }

  localStorage.setItem('appointments', JSON.stringify(appointments));
  renderAppointments();

  // Clear the form inputs
  nameInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
}







