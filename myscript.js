

function generate(){
    let word = "";
    $.ajax({
        type: "GET",
        url: 'https://random-word-api.herokuapp.com/word',
        success: function(data){
            word = data[0];
            
        },
        async:false
    });

    return word;
}
if(document.getElementById('table_rows').innerText.length == 0){
    document.getElementById('word_table').style.display = 'none';
}
function generate_word(){

    
    if(document.getElementById('word_table').style.display == 'none')
    document.getElementById('word_table').style.display = '';
    

    let word = generate();
    let len = word.length;
    let rev = word.split("").reverse().join("");
    let arr = [word, len, rev];
    
    let index = document.getElementById('table_rows')

    let tr = document.createElement('tr');
    for(let i = 0; i<3; i++){
        let td = document.createElement('td');
        td.innerHTML = `${arr[i]}`;
        tr.appendChild(td);
        
    }
    let td = document.createElement('td');
    td.innerHTML = `<button class="btn btn-outline-danger">Delete</button>`;
    td.addEventListener('click', function(){
        let tr = td.parentElement;
        tr.parentElement.removeChild(tr);
    })
    tr.appendChild(td);

    index.appendChild(tr)
}

function search(x){
   let a = document.getElementById('table_rows');
   let b = a.getElementsByTagName('tr');
   for(let i = 0 ; i < b.length; i++){
       if(b[i].firstElementChild.innerText.includes(x.value)){
            b[i].style.display = ''
       }
       else{
           b[i].style.display = 'none';
       }
   }
}