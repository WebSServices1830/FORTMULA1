<?php
define('PAGE_ID', "escuderias");
require_once "global.php";

$page_title = "Biblioteca - Escuderías";

include("inc/templates/subheader.php");

$escuderias = Fortmula::RetrieveScuderias();
?>
<body>
	<?php include("inc/templates/header.php"); ?>
	<?php include("inc/templates/navigator.php"); ?>

	<section class="main_wrapper">
		<section class="container">

			<section class="info_box">
				<div class="info_title blue">Escuderías</div>

				<div class="article_preview">
					<div class="info_text">
						<p>Calendario</p>

						<table>
							<tr>
								<td><img src="./web-gallery/assets/<?=$equipo["imagen"];?>" width="200"></td>
								<td>
									<strong>nombreEditado</strong>
									<br>
									Disponibles: 89
									<br>
									<?php if ($equipo["disponibles"] > 0) { ?>
									<a href="./escuderia.php?id=<?=$equipo["id"];?>">Ver</a>
									<?php } ?>
								</td>
							</tr>
						</table>


						<div class="clear"></div>
					</div>

						<br>
						<div class="clear"></div>

				</div>

			</section>

				</section>
	</section>
	<?php include("inc/templates/footer.php"); ?>
	<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
</body>
</html>
