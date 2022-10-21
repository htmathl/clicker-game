let butao = document.getElementById('clicker');
let contador = document.getElementById('contador');
let mercado = document.getElementById('mercado');
let infos = document.getElementById('infos');
let statusContent = document.getElementById('status-content');
let docs = document.getElementById('docs');
let geraClick = document.getElementById('gera-click');

let btnUpgrade, btnsUpgrade = [];
let exists, clicks = [], SecupClicks = 0, SecAlmaTot = 0;

let intervalo_mortoVivo, intervalo_guerreiroMV, 
intervalo_aranha, intervalo_gargula, intervalo_chimera, 
intervalo_giganteFerro, intervalo_protetoresRainha, intervalo_filhasPerdicao, 
intervalo_reiDosMortosVivos, intervalo_caoGuardiaoTumulo, intervalo_reiCaido,
intervalo_ceifadorEscuridao, intervalo_guardiaFogo, intervalo_devoradorAlmas,
intervalo_primeiroMortoVivo;

let intervalos = { intervalo_mortoVivo, intervalo_guerreiroMV, 
intervalo_aranha, intervalo_gargula, intervalo_chimera, 
intervalo_giganteFerro, intervalo_protetoresRainha, intervalo_filhasPerdicao, 
intervalo_reiDosMortosVivos, intervalo_caoGuardiaoTumulo, intervalo_reiCaido,
intervalo_ceifadorEscuridao, intervalo_guardiaFogo, intervalo_devoradorAlmas,
intervalo_primeiroMortoVivo };

//canvas set
// let canvas = document.getElementById('checar-click');
// let width = butao.getAttribute('width');
// let height = butao.getAttribute('height');
// canvas.setAttribute('width', width.toString());
// canvas.setAttribute('height', height.toString());
// canvas.style.backgroundColor = 'white';

'use strict';
class gerarClick {
    #upClicks = 0;
    #almas = 0;
    #almasTotais = 0;
    constructor() {
        this.GetVariable = function () {
            return this.#upClicks;
        };
        this.SetVariable = function (upClicks) {
            this.#upClicks = upClicks;
        };
        this.GetVariableA = function () {
            return this.#almas;
        };
        this.SetVariableA = function (almas) {
            this.#almas += almas;
        };
        this.SetVariableAM = function(almas) {
            this.#almas -= almas;
        }
        this.GetVariableAT = function() {
            return this.#almasTotais;
        }
        this.SetVariableAT = function(almasTotais) {
            this.#almasTotais += almasTotais;
        }
    }
}

let instance = new gerarClick();

let upgrades = [
    mortoVivo = {
        id: 'mortoVivo',
        nome: 'Morto Vivo',
        info: '-Você ganhará uma alma a cada segundo \n -A cada 5 niveis upados você ganhará 10 almas por clique',
        quantos: 0,
        custo: 25,
        aumento: 1.5,
        bonus: 1,
        rendimento: 0,
        segundos: 1,
        status: function () {
            return `Quantidade: ${this.quantos}
                    Custo: ${this.custo} almas
                    Rendimento: ${this.rendimento}/s`;
        },
        upClick: function () {
            for(let i = 0; i <= this.quantos; i++) {
                if( i % 5 == 0 && i != 0 ) {
                    if( !clicks.includes(i) )
                        clicks.push(i);
                    instance.SetVariable((10 * clicks.length));
                    SecupClicks = (10 * clicks.length);
                }
            }
        }
    },
    guerreiroMV = {
        id: 'guerreiroMV',
        nome: 'Guerreiro Morto Vivo',
        info: 'Você ganhará 50 almas a cada 20s',
        quantos: 0,
        custo: 100,
        aumento: 1.5,
        bonus: 50,
        rendimento: 0,
        segundos: 20,
        status: function () {
            return `Quantidade: ${this.quantos}
                    Custo: ${this.custo} almas 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    aranha = {
        id: 'aranha',
        nome: 'Aranha',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 10000,
        aumento: 1.5,
        bonus: 100,
        rendimento: 0,
        segundos: 50,
        status: function () {
            return `Quantidade: ${this.quantos}
                    Custo: ${this.custo} almas
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    gargula = {
        id: 'gargula',
        nome: 'Gárgula',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 30000,
        aumento: 1.5,
        bonus: 250,
        rendimento: 0,
        segundos: 90,
        status: function () {
            return `Quantidade: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    chimera = {
        id: 'chimera',
        nome: 'Chimera',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 75000,
        aumento: 1.5,
        bonus: 500,
        rendimento: 0,
        segundos: 150,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    giganteFerro = {
        id: 'giganteFerro',
        nome: 'Gigante de Ferro',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 125000,
        aumento: 1.5,
        bonus: 1000,
        rendimento: 0,
        segundos: 210,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    protetoresRainha = {
        id: 'protetoresRainha',
        nome: 'Protetores da Raínha',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 175000,
        aumento: 1.5,
        bonus: 2000,
        rendimento: 0,
        segundos: 300,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    filhasPerdicao = {
        id: 'filhasPerdicao',
        nome: 'Filhas da Perdição',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 500000,
        aumento: 1.5,
        bonus: 5000,
        rendimento: 0,
        segundos: 390,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    reiDosMortosVivos = {
        id: 'reiDosMortosVivos',
        nome: 'Rei dos Mortos Vivos',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 750000,
        aumento: 1.5,
        bonus: 10000,
        rendimento: 0,
        segundos: 450,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    caoGuardiaoTumulo = {
        id: 'caoGuardiaoTumulo',
        nome: 'Cão Guardião do Túmulo',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 1000000000,
        aumento: 1.5,
        bonus: 20000,
        rendimento: 0,
        segundos: 510,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    reiCaido = {
        id: 'reiCaido',
        nome: 'Rei Caído',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 10000000000,
        aumento: 2,
        bonus: 50000,
        rendimento: 0,
        segundos: 600,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    ceifadorEscuridao = {
        id: 'ceifadorEscuridao',
        nome: 'Ceifador da Escuridão',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 500000000000,
        aumento: 2,
        bonus: 10000000000,
        rendimento: 0,
        segundos: 720,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    guardiaFogo = {
        id: 'guardiaFogo',
        nome: 'Guardiã do Fogo',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 1000000000000,
        aumento: 2,
        bonus: 50000000000,
        rendimento: 0,
        segundos: 780,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    devoradorAlmas = {
        id: 'devoradorAlmas',
        nome: 'Devorador de Almas',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 50000000000000,
        aumento: 2.5,
        bonus: 100000000000,
        rendimento: 0,
        segundos: 900,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    },
    primeiroMortoVivo = {
        id: 'primeiroMortoVivo',
        nome: 'Primeiro Morto Vivo',
        info: 'Você ganhará uma alma a cada segundo',
        quantos: 0,
        custo: 1000000000000000,
        aumento: 2.5,
        bonus: 9000000000000,
        rendimento: 0,
        segundos: 1200,
        status: function () {
            return `Mortos Vivos: ${this.quantos}
                    Custo: ${this.custo} 
                    Rendimento: ${this.rendimento}/${this.segundos}s`;
        }
    }
];

for (let i = 0; i < upgrades.length; i++) {
    btnUpgrade = document.createElement('button');
    btnsUpgrade.push(btnUpgrade);
    btnsUpgrade[i].setAttribute('class', 'upgrade-sn');
    btnsUpgrade[i].setAttribute('id', upgrades[i].id);
}

butao.removeEventListener('click', contar);
butao.addEventListener('click', contar);

let interval = setInterval(() => {
    checar();
}, 100);

function contar() {
    if( instance.GetVariable() == 0 ) {
        instance.SetVariableAT(1);
        instance.SetVariableA(1);
    }
    else {
        instance.SetVariableAT(instance.GetVariable());
        instance.SetVariableA(instance.GetVariable());
    }
    SecAlmaTot = instance.GetVariableAT();
    contador.innerText = instance.GetVariableA();
    docs.innerText = `${instance.GetVariableAT()} almas coletadas`
}

function maior(custo, bonus, segundos, quantos, id) {
    if( instance.GetVariableA() >= custo ) {
        instance.SetVariableAM(custo);
        contador.innerText = instance.GetVariableA();
        let rendt = parseFloat(geraClick.innerText.split(' ')[0]) + (bonus/segundos);
        rendt.toString().split('.').length > 1 ? rendt = rendt.toFixed(1) : rendt = Math.round(rendt);
        geraClick.innerText = `${rendt} A/s`;
        clearInterval(intervalos[`intervalo_${id}`]);
        intervalos[`intervalo_${id}`] = setInterval(() => {
            let rend = bonus*quantos;
            instance.SetVariableA(rend);
            instance.SetVariableAT(rend);
            SecAlmaTot = instance.GetVariableAT();
            contador.innerText = instance.GetVariableA();
            docs.innerText = `${instance.GetVariableAT()} almas coletadas`;
        }, (segundos*1000));
    }
}

var checarMaior = function(m) {
    upgrades.forEach(e => {
        if( e.nome == m.currentTarget.innerText ) {
            e.quantos ++;
            maior(e.custo, e.bonus, e.segundos, e.quantos, e.id);
            e.rendimento += e.bonus;
            e.custo += Math.round(e.aumento * e.custo);
            statusContent.innerText = e.status();
            e.upClick ? e.upClick() : false;
        }
    });  
}

function checar() {
    for (let m = 0; m < upgrades.length; m++) {
        exists = document.getElementById(upgrades[m].id);

        //adicionar ups
        if(instance.GetVariableAT() >= upgrades[m].custo && !exists) {
            mercado.appendChild(btnsUpgrade[m]);
            btnsUpgrade[m].innerText = upgrades[m].nome;
        }

        if( parseInt(contador.innerText) != instance.GetVariableA() || instance.GetVariable() != SecupClicks || instance.GetVariableAT() != SecAlmaTot ) {
            clearInterval(interval);
            window.location.reload();
        }

        //click ups
        if ( instance.GetVariableA() >= upgrades[m].custo && exists ) {
            btnsUpgrade[m].addEventListener('click', checarMaior);
            btnsUpgrade[m].classList.remove('upgrade-sn');
            btnsUpgrade[m].setAttribute('class', 'upgrade');
        }

        if( instance.GetVariableA() < upgrades[m].custo && exists ) {
            btnsUpgrade[m].removeEventListener('click', checarMaior);
            btnsUpgrade[m].classList.remove('upgrade');
            btnsUpgrade[m].setAttribute('class', 'upgrade-sn');
        }

        btnsUpgrade[m].addEventListener('mouseover', () => {
            infos.innerText = upgrades[m].info;
            statusContent.innerText = upgrades[m].status();
        });
        btnsUpgrade[m].addEventListener('mouseout', () => {
            infos.innerText = '';
            statusContent.innerText = '';
        });   
    }
}