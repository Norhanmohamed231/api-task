function getApi(){

    let http = new XMLHttpRequest();
    http.open('GET','https://forkify-api.herokuapp.com/api/search?q=pizza');
    http.onreadystatechange = function(){

        if(http.readyState===4 && http.status===200){

        let result = JSON.parse(http.responseText);

        document.querySelector('.product').innerHTML='';

        for(let i=0;i<result.recipes.length;i++){

            document.querySelector('.product').innerHTML +=`<div class="col-md-4 mb-4">
            
            <div class='card shadow-sm h-100'>
            <img class='card-img-top ' src='${result.recipes[i].image_url}'height='300px' alt='img not found'>
            <div class='card-body d-flex flex-column'>
            <h3 class="card-title">${result.recipes[i].title}</h3>
            <h5 class="card-text">${result.recipes[i].publisher}</h5>
            <p class="card-text ">rate:${result.recipes[i].social_rank}</p>
            <button class='btn btn-primary mt-auto'>Add to card</button>

            </div>
            </div>
            </div>`

        }

    }
        

    }
    
    http.send();

}

getApi()