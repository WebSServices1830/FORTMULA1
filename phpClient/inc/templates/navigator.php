<?php
if (!defined("UBER")) exit;
$pages = array(
  "Inicio" => "me",
  "Calendario" => "calendario",
  "Escuderías" => "escuderias",
);

 ?><nav>
  <section class="container">
    <ul>
      <?php
      foreach ($pages as $page => $link)
      {
        echo "<li><a ";
        if (PAGE_ID == $link)
        {
          echo 'class="selected" ';
        }
        echo "href=\"/$link.php\">";
        echo $page;
        echo '</a></li>';
      }
       ?>
       <li class="rightside logout"><a href="/logout.php">Salir</a></li>
    </ul>
  </section>
</nav>
