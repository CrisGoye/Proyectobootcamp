 
 const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Freelancer.";
            }, 0);
            setTimeout(() => {
                text.textContent = "Developer.";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Programmer.";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);

        document.addEventListener('DOMContentLoaded', function () {
  const barras = document.querySelectorAll('.progreso .porcentaje');

  barras.forEach(function(barra) {
    const porcentaje = barra.parentElement.parentElement.getAttribute('data-percent');
    barra.style.width = porcentaje;
  });
});


   





