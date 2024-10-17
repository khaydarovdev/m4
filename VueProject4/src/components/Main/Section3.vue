<template>
	<div class="sec3_full">
		<section class="sec3">
			<h1>Мы предлагаем</h1>
			<div class="ad-grid">
				<!-- Signboards -->
				<div class="ad-box signboards">
					<i class="bx bxs-store"></i>
					<div class="ad-content">
						<h3>Вывески</h3>
						<p>от 5 000 руб</p>
					</div>
				</div>

				<!-- Volume letters -->
				<div class="ad-box volume-letters">
					<i class="bx bx-font"></i>
					<div class="ad-content">
						<h3>Объёмные буквы</h3>
						<p>от 60 руб/см</p>
					</div>
				</div>

				<!-- Flexible neon -->
				<div class="ad-box neon">
					<i class="bx bxs-bulb"></i>
					<div class="ad-content">
						<h3>Гибкий неон</h3>
						<p>от 2 000 руб</p>
					</div>
				</div>

				<!-- Ad coordination -->
				<div class="ad-box ad-coordination">
					<i class="bx bx-file"></i>
					<div class="ad-content">
						<h3>Согласование рекламы</h3>
						<p>от 1 000 руб</p>
					</div>
				</div>

				<!-- Transport branding -->
				<div class="ad-box transport-branding">
					<i class="bx bxs-car"></i>
					<div class="ad-content">
						<h3>Брендирование транспорта</h3>
						<p>от 1 500 руб</p>
					</div>
				</div>

				<!-- Stands -->
				<div class="ad-box stands">
					<i class="bx bx-map"></i>
					<div class="ad-content">
						<h3>Стенды</h3>
						<p>от 1 000 руб</p>
					</div>
				</div>

				<!-- UV Printing -->
				<div class="ad-box uv-printing">
					<i class="bx bxs-printer"></i>
					<div class="ad-content">
						<h3>УФ печать</h3>
						<p>от 500 руб</p>
					</div>
				</div>

				<!-- Large format printing -->
				<div class="ad-box large-format-printing">
					<i class="bx bx-image"></i>
					<div class="ad-content">
						<h3>Широкоформатная печать</h3>
						<p>от 300 руб</p>
					</div>
				</div>

				<!-- Stickers -->
				<div class="ad-box stickers">
					<i class="bx bx-sticker"></i>
					<div class="ad-content">
						<h3>Наклейки</h3>
						<p>от 10 руб/шт</p>
					</div>
				</div>

				<!-- Plates -->
				<div class="ad-box plates">
					<i class="bx bx-plate"></i>
					<div class="ad-content">
						<h3>Таблички</h3>
						<p>от 100 руб</p>
					</div>
				</div>

				<!-- Milling -->
				<div class="ad-box milling">
					<i class="bx bxs-cog"></i>
					<div class="ad-content">
						<h3>Фрезеровка</h3>
						<p>от 30 руб</p>
					</div>
				</div>

				<!-- Panel brackets -->
				<div class="ad-box panel-brackets">
					<i class="bx bxs-box"></i>
					<div class="ad-content">
						<h3>Панель-кронштейны</h3>
						<p>от 8 000 руб</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec3_full {
	width: 100%;
	height: 150vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.sec3 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.sec3 h1 {
	font-size: 45px;
	color: #7a7a7a;
}
.ad-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20px;
}

.ad-box {
	background-color: #f0f0f0;
	padding: 20px;
	text-align: center;
	border-radius: 10px;
	position: relative;
	overflow: hidden;
	height: 250px; /* Adjust height as needed */
}

.ad-content {
	margin-top: 10px;
	z-index: 1;
	position: relative;
}
.ad-content h3 {
	color: white;
}
.ad-content p {
	color: white;
}

.ad-box i {
	font-size: 40px;
	color: white;
	z-index: 1;
}

/* Apply background images in CSS */
.signboards {
	background: url('../../assets/Group 1006.png') no-repeat center/cover;
}

.volume-letters {
	background: url('../../assets/Group 1007.png') no-repeat center/cover;
}

.neon {
	background: url('../../assets/Group 1005.png') no-repeat center/cover;
}

.ad-coordination {
	background: url('../../assets/Group 1008.png') no-repeat center/cover;
}

.transport-branding {
	background: url('../../assets/Group 1009.png') no-repeat center/cover;
}

.stands {
	background: url('../../assets/Group 1010.png') no-repeat center/cover;
}

.uv-printing {
	background: url('../../assets/Group 1011.png') no-repeat center/cover;
}

.large-format-printing {
	background: url('../../assets/Group 1012.png') no-repeat center/cover;
}

.stickers {
	background: url('../../assets/Group 1013.png') no-repeat center/cover;
}

.plates {
	background: url('../../assets/Group 1014.png') no-repeat center/cover;
}

.milling {
	background: url('../../assets/Group 1015.png') no-repeat center/cover;
}

.panel-brackets {
	background: url('../../assets/Group 1016.png') no-repeat center/cover;
}
</style>
