const lista = document.getElementById("lista-musicas");
const player = document.getElementById("iframe-player");
console.log(musicas.length);
musicas.forEach((musica) => {

    const p = document.createElement("p");

    p.textContent = musica.nome;

    p.style.cursor = "pointer";

    p.onclick = () => {
        player.src = musica.link;
        player.scrollIntoView({
            behavior: "smooth"
        });
    };

    lista.appendChild(p);

});