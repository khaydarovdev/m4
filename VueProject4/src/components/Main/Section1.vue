<template>
	<div class="sec1_full">
		<section class="sec1">
			<h1 class="sec1h1">
				Стань <br />
				заметнее
			</h1>
			<div class="abt">
				<h1 class="abth1">
					Добро пожаловать <br />
					в рекламную компанию М4!
				</h1>
				<h4>
					Мы более 10 лет занимаемся производством <br />
					наружной рекламы и полиграфии.
				</h4>
				<h4>Найдем подходящее решение для Вашего заказа!</h4>
				<h4>Оставьте заявку и мы свяжемся с Вами.</h4>
				<button class="abtbtn">Оставить Заявку</button>
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
	height: 68vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(../../assets/Rectangle100.png);
	background-size: contain;
	background-repeat: no-repeat;
}
.sec1 {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.sec1h1 {
	font-size: 95px;
	color: transparent; /* Make the inside of the text transparent */
	-webkit-text-stroke: 1px white;
	transition: all 0.4s;
}
.sec1h1:hover {
	color: white;
}
.abt {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
.abth1 {
	color: white;
}
.abt h4 {
	color: white;
	font-weight: 400;
}
.abtbtn {
	padding: 15px;
	background-color: #eba707;
	border-radius: 50px;
	color: white;
	border: none;
	font-size: 17px;
	transition: all 0.4s;
}
.abtbtn:hover {
	color: #eba707;
	background-color: white;
}
</style>
