<?php
$title = "iPrint | Требования к макетам";
$foo = include '../header.php';
?>
<!-- START CONTENT  -->

<!-- <svg class="icon"><use xlink:href="img/symbol-defs.svg#icon-search"></use></svg> -->

<div class="rule">
    <section class="text top">
        <div class="container">
            <div class="title top">
                <h2>Требования к <span class="blue">макетам</span></h2>
            </div>

            <h4><span><span>Размер макета</span> <i></i></span></h4>

            <p>Макет должен быть сделан с припуском по 1 мм с каждой стороны. Значимая информация должна располагаться не ближе 3 мм (4 мм для цифровой печати) к краю макета, с учетом припуска. Все элементы «навылет» (фото или фоновый рисунок) должны занимать всю площадь макета. Файлы не должны содержать меток реза, крестов совмещения, шкал и каких-либо других элементов.</p>

            <p><strong>Для примера: <br>
                Дообрезной формат визитки: 52х92 мм, послеобрезной размер будет 50х90 мм; <br>
                Дообрезной формат листовки: 101х212 мм, послеобрезной размер будет 99х210 мм.</strong></p>

            <img src="../img/req.png" style="margin: 0 auto; display: block;" alt="">

            <p>Все важные элементы (логотипы, текст и пр.) должны находиться не ближе чем 3 мм от края обрезного формата. Файлы не должны содержать меток реза, крестов совмещения, шкал и каких-либо других элементов.</p>

            <h4><span><span>Общие требования к файлу</span> <i></i></span></h4>

            <p><strong>Все слои сведены <br>
                Не содержат альфа каналов <br>
                Не содержат ссылок на встроенные изображения (для формата CDR и EPS) <br>
                Цветовая модель — CMYK,</strong></p>

            <h4><span><span>Цветовой профиль — Coated FOGRA39.</span> <i></i></span></h4>

            <div class="flex">
                <div>
                    <h4><span><span>TIF – файл</span> <i></i></span></h4>
                    <p>Все слои объединены <br>
                        Не содержит альфа канала <br>
                        Не содержит сжатия <br>
                        Цветовая модель — CMYK</p>

                    <h4><span><span>PDF – файл</span> <i></i></span></h4>

                    <p>PDF версия не ниже 1.5 <br>
                        Не содержит прозрачности <br>
                        Все шрифты в кривых <br>
                        Не содержит меток, резов и других непечатаемых объектов <br>
                        Цветовая модель CMYK</p>
                </div>
                <div>
                    <h4><span><span>JPG – файл</span> <i></i></span></h4>

                    <p>Только стандартный формат. Не допустимо использование формата JPG 2000 или JPG stereo <br>
                        Сохранён с разрешением 300 dpi <br>
                        Не содержит сжатие</p>

                    <h4><span><span>EPS</span> <i style="width: 100%;"></i></span></h4>

                    <p>Не содержит эффекты <br>
                        Шрифты в кривых <br>
                        Не содержит ссылок на встроенные изображения <br>
                        Не содержит ole-объект <br>
                        Не содержит градиентной заливки <br>
                        Цветовая модель CMYK</p>
                </div>
            </div>

            <h4><span><span>CDR</span> <i style="width: 100%;"></i></span></h4>

            <p>Версия не выше 14 <br> <br>

                Не содержит эффекты <br>
                Шрифты в кривых <br>
                Не содержит ссылок на встроенные изображения <br>
                Не содержит PowerClip <br> <br>
                
                Не содержит ole-объект <br>
                Не содержит градиентной заливки <br>
                Цветовая модель CMYK <br>
                Запрещено задавать фон страницы через свойства документа (Options / Document / Background)</p>

            <h4><span><span>Не принимаются: GIF, BMP, PICT, DOC, XLS и др.</span> <i></i></span></h4>

            <h4><span><span>Разрешение</span> <i></i></span></h4>

            <p>Оптимальное разрешение для печати — 300 dpi</p>

            <h4><span><span>Цвет</span> <i style="width: 100%;"></i></span></h4>

            <p>CMYK или градации серого, 8 бит/канал <br>
                Минимальная красочность не меньше 15% <br>
                Максимальная красочность не больше 280% <br>
                Цветовой профиль не встраивать</p>

            <h4><span><span>Черный мелкий текст</span> <i></i></span></h4>

            <p>В одну краску: С=0, M=0, Y=0, K=100%</p>

            <h4><span><span>Размер векторных шрифтов</span> <i></i></span></h4>

            <p>Размер шрифта для печати на светлом фоне не меньше 5 пт. <br>
                Размер шрифта для печати на тёмном фоне не меньше 6 пт.</p>
            
            <h4><span><span>Размер растровых шрифтов</span> <i></i></span></h4>

            <p>Размер шрифта для печати на светлом фоне не меньше 6 пт. <br>
                Размер шрифта для печати на тёмном фоне не меньше 8 пт.</p>
        </div>
    </section>

    <section class="map">
        <div class="container">
            <div class="title top">
                <h2>Как <span class="blue">нас</span> найти</h2>
            </div>

            <p>Мы находимся по адресу: переулок Смоляной, д. 8. Рядом с Астраханским <br> Государственным Архитектурно-Строительным Университетом (АГАСУ)</p>

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