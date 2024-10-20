<template>
	<div class="sec1_full">
		<section class="sec1">
			<h1>
				Производство <br />
				рекламы
			</h1>
			<div class="ad-box signboards">
				<i class="bx bxs-store"></i>
				<div class="ad-content">
					<h3>Вывески</h3>
					<p>от 5 000 руб</p>
				</div>
			</div>
			<div class="ad-box volume-letters">
				<i class="bx bx-font"></i>
				<div class="ad-content">
					<h3>Объёмные буквы</h3>
					<p>от 60 руб/см</p>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec1_full {
	width: 100%;
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #282828;
}
.sec1 {
	height: 100%;
	width: 1440px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.sec1 h1 {
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

/* Apply background images in CSS */
.signboards {
	background: url('../../assets/Group 1006.png') no-repeat center/cover;
}

.volume-letters {
	background: url('../../assets/Group 1007.png') no-repeat center/cover;
}
</style>
