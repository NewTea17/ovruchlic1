let switchMode = document.getElementById('switchMode');
switchMode.addEventListener('click', () => {
    let theme = document.getElementById('theme');

    if(theme.getAttribute('href') == 'style.css') {
        theme.href = 'dark-theme.css';
    } else {
        theme.href = 'style.css';
    }
});