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
  