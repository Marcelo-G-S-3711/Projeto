document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMode');
    const body = document.body;

    // Verificar se o usuário já tem uma preferência de tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        toggleProfilePicture(savedTheme);
    }

    // Adicionar um ouvinte de evento para alternar entre os modos claro e escuro
    toggleButton.addEventListener('click', function () {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            toggleProfilePicture('light');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            toggleProfilePicture('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    function toggleProfilePicture(theme) {
        const profilePictureContainerLight = document.getElementById('profile-picture-container-light');
        const profilePictureContainerDark = document.getElementById('profile-picture-container-dark');

        if (theme === 'light') {
            profilePictureContainerLight.style.display = 'flex';
            profilePictureContainerDark.style.display = 'none';
        } else {
            profilePictureContainerLight.style.display = 'none';
            profilePictureContainerDark.style.display = 'flex';
        }
        
    }
    function toggleButtonIcon(theme) {
        const buttonIcons = toggleButton.querySelectorAll('.fas');

        buttonIcons.forEach(icon => {
            icon.classList.toggle('fa-sun', theme === 'light');
            icon.classList.toggle('fa-moon', theme === 'dark');
        });
    }

});
