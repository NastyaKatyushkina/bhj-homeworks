let loader = document.getElementById('loader');
let items = document.getElementById('items');
let xhr = new XMLHttpRequest();
let result;
let json;
let valutes =[];

function addItem (code, value)
{
    items.insertAdjacentHTML("beforeend",
    `        <div class="item">
    <div class="item__code">
        ${code}
    </div>
    <div class="item__value">
    ${value}
    </div>
    <div class="item__currency">
        руб.
    </div>
</div>`);
}

xhr.open ('GET','https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function ()
    {
        if (xhr.readyState===4)
        {
           result = xhr.responseText;
            json = JSON.parse(result);
            valutes = json.response.Valute;
             for (let key in valutes) 
             {
                addItem(valutes[key].CharCode,valutes[key].Value);
             }
            loader.classList.remove('loader_active');
        }
    }