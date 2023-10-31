var ct = 1;
var bt_add = document.getElementById('bt-add');

function createInputs(){
    ct++;
    if(ct<=10){
        document.getElementById("box").insertAdjacentHTML('beforeend', '<div class="caixa" id="caixa'+ct+'"><div class="alin"><label class="legenda" for="'+ct+'_it">Item:</label><input class="unidade" type="text" autocomplete="off" name="'+ct+'°item" id="'+ct+'_it" placeholder="Nome do Item"><label class="legenda" for="'+ct+'_it_Qt">Quantidade:</label><input class="quantidade" type="number" autocomplete="off" name="'+ct+'°item-Qt" id="'+ct+'_it_Qt" placeholder="Somente numeros"><button class="menos" type="button" id="'+ct+'" onclick="removerlinha('+ct+')">X</button></div></div>');
    }else{
        ct = 10
        bt_add.classList.add('limite')
        bt_add.textContent = 'limite máximo'
    }
}


function removerlinha(del){
    bt_add.textContent ="+"
    document.getElementById('caixa' + del).remove();
    if(ct == 10){
        bt_add.classList.remove('limite')
    }
    ct -= 1
}


function NewPedido(){
    const modal = document.getElementById('Bkflutuante')
    modal.classList.add('ativo')

    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'Bkflutuante'){
            modal.classList.remove('ativo')
        }if(e.target.id == 'cancelar'){
            modal.classList.remove('ativo')

            const div = document.getElementById("box");

            for(let i=0; i<=5; i++){
                for (child of div.children){
                    child.remove();
                }
            }

            bt_add.textContent ="+"
            bt_add.classList.remove('limite')
            ct = 1
        }
    })
}

function buscaAv(botao) {
    window.location = 'index.php?search='+botao;
}

function delet(aa){
    window.location = 'index.php'+aa;
}




function  NewItem(){
    const modal = document.getElementById('Bkflutuante')
    modal.classList.add('ativo')

    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'cancelar' || e.target.id == 'Bkflutuante'){
            modal.classList.remove('ativo')
            for (let i = 1; i <= 10; i++) {
                removerlinha(i)
              }
        }
    })
}



