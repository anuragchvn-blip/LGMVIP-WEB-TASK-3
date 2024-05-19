document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const imageLink = document.getElementById('imageLink').value || 'https://via.placeholder.com/50';
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked'))
                        .map(skill => skill.value)
                        .join(', ');

    // Create student card
    const studentCard = document.createElement('div');
    studentCard.classList.add('wrapper');
    studentCard.innerHTML = `
        <div class="textInfoContainer">
            <p class="userName">${name}</p>
            <p>${gender}</p>
            <p>${email}</p>
            <p><a href="${website}" target="_blank">${website}</a></p>
            <p>${skills}</p>
        </div>
        <div class="imageContainer">
            <img src="${imageLink}" alt="${name}" class="userImage">
        </div>
        <button class="userDeleteBtn" onclick="this.parentElement.remove()">+</button>
    `;

    // Append student card to student list
    document.getElementById('studentList').appendChild(studentCard);

    // Clear form
    document.getElementById('enrollmentForm').reset();
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('enrollmentForm').reset();
});
