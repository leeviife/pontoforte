window.onload = function (e) {


    const sections = [{
        title: "Demonstrativo",
        image: ["assets/demo1.jpg", "assets/demo2.jpg", "assets/demo3.jpg", "assets/demo4.jpg", "assets/demo5.jpg"],
        description: "Acessar demonstrativo financeiro dos funcionários do seu departamento.",
        url: "/demonstrativo",
        button: "Ir",
        class: "",
        target: "_blank"
    },
    {
        title: "Solicitação",
        image: ["assets/solicitar1.jpg", "assets/solicitar2.jpg", "assets/solicitar3.jpg", "assets/solicitar4.jpg", "assets/solicitar5.jpg"],
        description: "Solicitar horas extraordinárias ao departamento de recursos humanos",
        url: "/solicitacoes",
        button: "Ir",
        class: "",
        target: "_blank"
    },
    {
        title: "Revisão",
        image: ["assets/revisar1.jpg", "assets/revisar2.jpg", "assets/revisar3.jpg", "assets/revisar4.png"],
        description: "Solicitar uma revisão do demonstrativo.",
        url: "/revisao",
        button: "Ir",
        class: "rev_gra",
        target: "_blank"
    },
    {
        title: "Gráficos",
        image: ["assets/grafico1.jpg", "assets/grafico2.jpg", "assets/grafico3.jpg", "assets/grafico4.jpg"],
        description: "Visualizar os gráficos dos demonstrativos dos funcionários.",
        url: "/grafico",
        button: "Visualizar",
        class: "rev_gra",
        target: "_blank"
    },


    ];


    const intro = document.querySelector('.intro');
    const intro2 = document.querySelector('.intro2');

    // Add the Intro Sections
    sections.forEach(function (el) {
        const randomImage = Math.floor(Math.random() * el.image.length);
        let introItem = "introItem"
        let template = `
        <a class="${introItem}" href="${el.url}" target="${el.target}" >
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

        if (el.class == "rev_gra") {
            intro2.insertAdjacentHTML("beforeend", template);
        } else {
            intro.insertAdjacentHTML("beforeend", template);
        }




    })

    //Animate Intro Section on Hover
    const introItem = document.querySelectorAll('.introItem');
    introItem.forEach(function (el) {
        el.addEventListener("mouseover", animeIn);
        el.addEventListener("mouseleave", animeOut);
    })

    function animeIn(e) {
        introItem.forEach(function (el) {
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
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