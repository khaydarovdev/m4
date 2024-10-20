<template>
	<div class="sec4_full">
		<section class="sec4">
			<div class="hnc">
				<h1>
					Полиграфические <br />
					услуги
				</h1>
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
			</div>
			<div class="cards">
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
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec4_full {
	width: 100%;
	height: 100vh;
	background-color: #3a3a3a;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
}
.sec4 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.sec4 h1 {
	font-size: 95px;
	color: white;
	font-weight: 100;
}
.ad-box {
	background-color: #f0f0f0;
	padding: 20px;
	text-align: center;
	border-radius: 10px;
	position: relative;
	overflow: hidden;
	height: 300px;
	width: 300px; /* Adjust height as needed */
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
.large-format-printing {
	background: url('../../assets/Group 1012.png') no-repeat center/cover;
}

.stickers {
	background: url('../../assets/Group 1013.png') no-repeat center/cover;
}
.hnc {
	display: flex;
	gap: 30px;
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
.cards {
	display: flex;
	gap: 20px;
}
</style>
