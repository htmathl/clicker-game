let butao = document.getElementById('clicker');
let contador = document.getElementById('contador');
let mercado = document.getElementById('mercado');
let infos = document.getElementById('infos');

let btnUpgrade, btnsUpgrade = [];
let exists;

let upgrades = [
    mortoVivo = {
        id: 'mortoVivo',
        nome: 'Morto Vivo',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 25,
        aumento: 10,
        bonus: 10,
        segundos: 1
    },
    guerreiroMV = {
        id: 'guerreiroMV',
        nome: 'Guerreiro Morto Vivo',
        info: 'Você ganhará 50 almas a cada 20s',
        custo: 30,
        aumento: 20,
        bonus: 50,
        segundos: 20
    },
    aranha = {
        id: 'aranha',
        nome: 'Aranha',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 10000,
        aumento: 15000,
        bonus: 100,
        segundos: 50,
    },
    gargula = {
        id: 'gargula',
        nome: 'Gárgula',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 30000,
        aumento: 40000,
        bonus: 250,
        segundos: 90
    },
    chimera = {
        id: 'chimera',
        nome: 'Chimera',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 75000,
        aumento: 80000,
        bonus: 500,
        segundos: 150
    },
    giganteFerro = {
        id: 'giganteFerro',
        nome: 'Gigante de Ferro',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 125000,
        aumento: 140000,
        bonus: 1000,
        segundos: 210
    },
    protetoresRainha = {
        id: 'protetoresRainha',
        nome: 'Protetores da Raínha',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 175000,
        aumento: 200000,
        bonus: 2000,
        segundos: 300
    },
    filhasPerdicao = {
        id: 'filhasPerdicao',
        nome: 'Filhas da Perdição',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 500000,
        aumento: 700000,
        bonus: 5000,
        segundos: 390
    },
    reiDosMortosVivos = {
        id: 'reiDosMortosVivos',
        nome: 'Rei dos Mortos Vivos',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 750000,
        aumento: 800000,
        bonus: 10000,
        segundos: 450
    },
    caoGuardiaoTumulo = {
        id: 'caoGuardiaoTumulo',
        nome: 'Cão Guardião do Túmulo',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 1000000000,
        aumento: 1000000000,
        bonus: 20000,
        segundos: 510
    },
    reiCaido = {
        id: 'reiCaido',
        nome: 'Rei Caído',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 10000000000,
        aumento: 1000000000,
        bonus: 50000,
        segundos: 600
    },
    ceifadorEscuridao = {
        id: 'ceifadorEscuridao',
        nome: 'Ceifador da Escuridão',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 500000000000,
        aumento: 1000000000,
        bonus: 10000000000,
        segundos: 720
    },
    guardiaFogo = {
        id: 'guardiaFogo',
        nome: 'Guardiã do Fogo',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 1000000000000,
        aumento: 1000000000,
        bonus: 50000000000,
        segundos: 780
    },
    devoradorAlmas = {
        id: 'devoradorAlmas',
        nome: 'Devorador de Almas',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 50000000000000,
        aumento: 1000000000,
        bonus: 100000000000,
        segundos: 900
    },
    primeiroMortoVivo = {
        id: 'primeiroMortoVivo',
        nome: 'Primeiro Morto Vivo',
        info: 'Você ganhará uma alma a cada segundo',
        custo: 1000000000000000,
        aumento: 1000000000,
        bonus: 9000000000000,
        segundos: 1200
    }
];

for (let i = 0; i < upgrades.length; i++) {
    btnUpgrade = document.createElement('button');
    btnsUpgrade.push(btnUpgrade);
    btnsUpgrade[i].setAttribute('class', 'upgrade');
    btnsUpgrade[i].setAttribute('id', upgrades[i].id);
}

butao.removeEventListener('click', contar);
butao.addEventListener('click', contar);

setInterval(() => {
    checar();
}, 100)

function contar() {
    contador.innerText = parseInt(contador.innerText) + 1;
}

function maior(custo, bonus, segundos) {
    if( parseInt(contador.innerText) >= custo ) {
        contador.innerText = parseInt(contador.innerText) - custo;
        setInterval(() => {
            contador.innerText = parseInt(contador.innerText) + bonus;
        }, (segundos*1000));
    }
}

function verificarMouse(m) {
    btnsUpgrade[m].addEventListener('mouseover', () => {
        infos.innerText = upgrades[m].info;
    });
    btnsUpgrade[m].addEventListener('mouseout', () => {
        infos.innerText = '';
    });
}

function checar() {
    for (let m = 0; m < upgrades.length; m++) {
        exists = document.getElementById(upgrades[m].id);
        btnsUpgrade[m].disabled = false;
        btnsUpgrade[m].classList.remove('upgrade-sn');
        btnsUpgrade[m].setAttribute('class', 'upgrade');
        if(parseInt(contador.innerText) >= upgrades[m].custo && !exists) {
            mercado.appendChild(btnsUpgrade[m]);
            btnsUpgrade[m].innerText = upgrades[m].nome;
            btnsUpgrade[m].addEventListener('click', () => {
                maior(upgrades[m].custo, upgrades[m].bonus, upgrades[m].segundos);
                upgrades[m].custo += upgrades[m].aumento;
            });
            verificarMouse(m);
        }
        if( parseInt(contador.innerText) < upgrades[m].custo && exists ) {
            btnsUpgrade[m].disabled = true;
            btnsUpgrade[m].classList.remove('upgrade');
            btnsUpgrade[m].setAttribute('class', 'upgrade-sn');
        }
    }
}