const signups = JSON.parse(localStorage.getItem('sign-ups')) || [];
const output = document.getElementById('output');
const total = document.getElementById('total');
const filter = document.getElementById('filter');

function displaySignups() {
    if(signups.length === 0) {
        output.innerHTML = '<p>No sign-ups recorded</p>';
        total.textContent = '0';
        return;
    }

    let list = (filter.value === "all" ? signups : signups.filter(s => s.club === filter.value));

    if (list.length === 0) {
        output.innerHTML = '<p>No sign-ups for the selected club</p>';
        total.textContent = '0';
        return;
    }

    let html = '<table><tr><th>Birthday</th><th>Club</th><th>Email</th><th>Full Name</th><th>Grade Level</th><th>Phone</th><th>Short Essay</th><th>Status</th><th>Student ID</th></tr>';

    list.forEach(s => {
        html += `<tr>
                    <td>${s.birthday}</td>
                    <td>${s.club}</td>
                    <td>${s.email}</td>
                    <td>${s.fullName}</td>
                    <td>${s.gradeLevel}</td>
                    <td>${s.phone}</td>
                    <td>${s.shortessay}</td>
                    <td>${s.status}</td>
                    <td>${s.studentID}</td>
                 </tr>`;
    });

    html += '</table>';
    output.innerHTML = html;
    total.textContent = list.length;
}

filter.addEventListener('change', displaySignups);
displaySignups();
