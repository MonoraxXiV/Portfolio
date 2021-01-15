/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown3").classList.toggle("show");
    document.getElementById("myDropdownColab").classList.toggle("show");
    document.getElementById("myDropdownOther").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const toggle = document.getElementById('5');

toggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        toggleDarkMode()
    } else {
        toggleDarkMode()
    }
});
const html = document.getElementsByTagName('html')[0];

function toggleDarkMode() {
    if(html.classList.contains('dark')) {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
    }
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
} else {
    document.querySelector('html').classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

