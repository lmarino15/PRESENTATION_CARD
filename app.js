let traducir = true;

function cambiarIdioma() {
    const h4 = document.getElementById('H4');
    const p = document.getElementById('P');
    if (traducir) {
        h4.innerHTML = "Developer Junior";
        p.innerHTML = "This is my cover letter where you can find icons redirecting to my GitHub portfolio. Possesses knowledge of HTML, CSS, JavaScript and Csharp.";
        traducir = false;
    } else {
        h4.innerHTML = "Programador Junior";
        p.innerHTML = "Esta es mi carta de presentación donde podrás encontrar iconos redireccionando a mi portafolio de GitHub. Posee conocimiento de HTML, CSS, JavaScript y Csharp.";
        traducir = true;
    }
}