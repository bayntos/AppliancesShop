let wrapper = document.querySelector("#wrapper")

if (localStorage.getItem("page") == null) {
    localStorage.setItem("page", "about")
} else if (localStorage.getItem("page") === "about") {
    About()
} else if (localStorage.getItem("page") === "contact") {
    Contact()
}


function Contact() {
    let newHTML = `<div class="intro">
    <div class="container">
        <div class="intro-inner">
        <h1 class="intro-title">Свяжитесь с нами по любому вопросу!</h1>

        <a class="btn" href="#form">Приступить!</a>
    </div>
</div>
</div>

<section class="section" id="section">

    <div class="container">

        <div class="form" id="form">
            <h2>Contact Us</h2>
            
              <div class="form-block">
                <div class="inp-lab">
                    <label for="email">Ваш Email</label>
                    <input type="email" id="email" placeholder="Введите email">
                </div>
                <div class="inp-lab">
                    <label for="name">Ваше имя</label>
                    <input type="text" id="name" placeholder="Введите имя">
                </div>
              </div>

              <div class="form-block">
                <div class="inp-lab">
                    <label for="surn">Ваша Фамилия</label>
                    <input type="surn" id="email" placeholder="Введите фамилию">
                </div>
                <div class="inp-lab">
                    <label for="age">Ваш Возраст</label>
                    <input type="text" id="age" placeholder="Введите возраст">
                </div>
              </div>
              
              <div class="form-block">
                <label for="textarea">Напишите нам послание!</label>
                <textarea id="textarea" placeholder="Ваше сообщение..."></textarea>
              </div>
              <div class="form-submit">
                <button type="submit" onclick="SubmitForm()">Отправить</button>
              </div>
              
              
              
                <div id="myModal" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                  <p>Ваше сообщение отправлено! ✅</p>
                </div>
              
              
            </div>



        </div>

    </div>
</section>
`;

    wrapper.innerHTML = newHTML;
}



    wrapper.innerHTML = newHTML;
    




function Shop() {
    let newHTML = `<div class="intro">
    <div class="container">
        <h1 class="intro-title">Наши Товары</h1>
        <a class="btn" href="#section">Смотреть -></a>
    </div>
</div>

<section class="section" id="section">

<div class="card-layout">
    
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/dishwasher.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Посудомоечная машина</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

    <!--  -->
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/electric-stove.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Електрическая плита</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

    <!--  -->
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/iron.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Утюг</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

    <!--  -->
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/multi-cooker.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Мультиварка</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

    <!--  -->
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/printer.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Принтер</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

    <!--  -->
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/television.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Телевизор</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

    <!--  -->
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/vacuum-cleaner.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Пылесос</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

    <!--  -->
    <div class="card">
        <div class="img-block">
            <img src="./img/shop/washing-machine.png" alt="*IMAGE*" class="card-img">
        </div>
        <div class="content-block">
            <h5 class="card-title">Стиральная машина</h5>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>                    
        </div>
        <div class="btns-block">
            <button class="cart">В корзину</button>
            <button class="show">Смотреть</button>
        </div>
    </div>

</div>

</section>`;
    wrapper.innerHTML = newHTML;
}












function SubmitForm() {
    var modal = document.getElementById("myModal");

    modal.style.display = "block";
}


window.onclick = function(event) {
    var modal = document.getElementById("myModal");

  if (event.target == modal) {
    modal.style.display = "none";
  }
}



