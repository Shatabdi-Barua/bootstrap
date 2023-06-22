//for theme color change
function changeTheme()
{
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    if(currentTheme == "light")
    {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    }
    if(currentTheme == "dark")
    {
        htmlElement.setAttribute('data-bs-theme', 'light');
    }
}