////// Theme Buttons //////

const root = document.documentElement;
const themeBtns = document.querySelectorAll('.theme > button');
themeBtns.forEach((btn) => {
    btn.addEventListener('click', handleThemeUpdate);
});
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function handleThemeUpdate(e) {
    switch (e.target.value) {
        case 'dark':
            setTheme('theme-dark');
        break;
    
        case 'calm':
            setTheme('theme-calm');
        break;
    
        case 'light':
            setTheme('theme-light');
        break;
    }
}
(function () {
    if (localStorage.getItem('theme') === 'theme-light') 
    {
        setTheme('theme-light');
    } 
    else if (localStorage.getItem('theme') === 'theme-calm') 
    {
        setTheme('theme-calm');
    } 
    else // (localStorage.getItem('theme') === 'theme-dark') 
    {
        setTheme('theme-dark');
    } 
})();