document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const date = document.getElementById('date').value;
    const assignedBy = document.getElementById('assigned-by').value;
    const department = document.getElementById('department').value;
    const remarks = document.getElementById('remarks').value;
    const pcPrinter = document.getElementById('pc-printer').value;
  
    const scheduleItem = document.createElement('div');
    scheduleItem.classList.add('schedule-item');
    scheduleItem.innerHTML = `
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Assigned by:</strong> ${assignedBy}</p>
      <p><strong>Department:</strong> ${department}</p>
      <p><strong>Remarks:</strong> ${remarks}</p>
      <p><strong>Number of PC / Printer:</strong> ${pcPrinter}</p>
    `;
  
    document.getElementById('schedule-list').appendChild(scheduleItem);
  
    // Clear form fields
    document.getElementById('schedule-form').reset();
  });
  