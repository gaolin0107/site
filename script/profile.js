    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const picture = localStorage.getItem('userPicture');

    if (name) document.querySelector('.user-name').textContent = name;
    if (email) document.querySelector('.user-email').textContent = email;
    if (picture) document.querySelector('.profile-picture').src = picture;