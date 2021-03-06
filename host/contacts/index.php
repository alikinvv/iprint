<?php
$title = "iPrint | Контакты";
$foo = include '../header.php';
?>
<!-- START CONTENT  -->

<!-- <svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-search"></use></svg> -->

<div class="rule">
    <section class="map top">
        <div class="container">
            <div class="title top">
                <h2><span class="blue">Контакты</span></h2>
            </div>

            <p>
                <a href="tel:+7(996)4722577">Телефон: +7 (996) 472-25-77</a><br>
                <a href="mailto:info@iprint30.ru">E-mail: info@iprint30.ru</a> <br>
                <span>Адрес: г.Астрахань, Смоляной переулок д.8</span> <br>
                <span>Мы находимся рядом с Астраханским Государственным Архитектурно-Строительным Университетом (АГАСУ)</span>
            </p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1376.33630218528!2d48.0552353655723!3d46.375883291208325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a905b1086ac0ad%3A0x7814f19d760ed095!2sIprint!5e0!3m2!1sru!2sru!4v1624301563382!5m2!1sru!2sru" width="100%" height="418" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </section>

    <section class="consultation">
        <div class="container">
            <h2>Нужна <span class="blue">консультация</span>?</h2>
            <p>Оставьте нам свои контактные  данные, опишите с чем вам нужно помочь и мы <br> свяжемся с вами в ближайшее время </p>

            <form action="" class="cons">
                <div class="flex">
                    <div>
                        <input type="text" name="name" placeholder="Ваше имя">
                        <input type="text" name="phone" id="phone-mask" placeholder="Номер телефона">
                        <input type="text" name="email" placeholder="E-mail">
    
                    </div>
                    <div>
    <textarea name="message" placeholder="Введите сообщение..."></textarea>
</div>
<input type="hidden" name="hide" value="cons">
                </div>
                <button type="submit" class="btn">оставить заявку</button>
            </form>
        </div>
    </section>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- END CONTENT  -->
<?php $foo = include '../footer.php'; ?>