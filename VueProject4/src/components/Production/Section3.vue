<template>
	<div class="sec3_full">
		<section class="sec3">
			<div class="hnc">
				<div class="ad-box neon">
					<i class="bx bxs-bulb"></i>
					<div class="ad-content">
						<h3>Гибкий неон</h3>
						<p>от 2 000 руб</p>
					</div>
				</div>
				<h1>
					Печать <br />
					широкоформатная, <br />
					интерьерная , УФ
				</h1>
			</div>
			<div class="cards">
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
	height: 100vh;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec3 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
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
.neon {
	background: url('../../assets/Group 1005.png') no-repeat center/cover;
}
.sec3 h1 {
	font-size: 95px;
	color: #b7b7b7;
	font-weight: 100;
	text-align: right;
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
.hnc {
	display: flex;
	gap: 100px;
	align-items: center;
	justify-content: space-between;
}
.cards {
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: space-between;
}
</style>
