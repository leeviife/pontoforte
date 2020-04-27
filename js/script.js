window.onload = function (e) {


    const sections = [{
            title: "Demonstrativo",
            image: ["assets/demo1.jpg", "assets/demo2.jpg", "assets/demo3.jpg", "assets/demo4.jpg", "assets/demo5.jpg"],
            description: "Acessar demonstrativo financeiro pessoal e dos funcionários do seu departamento.",
            url: "/demonstrativo",
            button: "Ir",
            class: "",
            target: "_blank"
        },
        {
            title: "Solicitação",
            image: ["assets/solicitar1.jpg", "assets/solicitar2.jpg", "assets/solicitar3.jpg", "assets/solicitar4.jpg", "assets/solicitar5.jpg"],
            description: "Solicitar horas extraordinárias ao departamento de recursos humanos  ",
            url: "/solicitacoes",
            button: "Ir",
            class: "",
            target: "_blank"
        },
        
    ];

    
    const intro = document.querySelector('.intro');


    // Add the Intro Sections
    sections.forEach(function (el) {
        const randomImage = Math.floor(Math.random() * el.image.length);
        const template = `
        <a class="introItem ${el.class}" href="${el.url}" target="${el.target}" >
            <figure class="introItem__image">
                    <img src="${el.image[randomImage]}" alt="">
            </figure>
            <div class="introItem__content">
                <h2 class="introItem__title">${el.title}</h2>
                <p class="introItem__text">${el.description}</p>
                <div class="introItem__button"><p>${el.button}</p><span></span></div>
            </div>
        </a>
        `;

        intro.insertAdjacentHTML("beforeend", template);

    })

    //Animate Intro Section on Hover
    const introItem = document.querySelectorAll('.introItem');
    introItem.forEach(function (el) {
        el.addEventListener("mouseover", animeIn);
        el.addEventListener("mouseleave", animeOut);
    })

    function animeIn(e) {
        introItem.forEach(function (el) {
            el.style.opacity = "0.5";
            el.style.transform = "scale(0.95)";
        });
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "scale(1)";
    };

    function animeOut() {
        introItem.forEach(function (el) {
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
        });

    };

    // Make the wrapper 100vh on mobile
    if (window.innerWidth <= 899) {
        document.querySelector('#wrapper').style.height = window.innerHeight + "px";
    }


};