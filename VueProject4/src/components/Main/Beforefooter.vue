<template>
	<div class="bef_full">
		<section class="bef">
			<div class="txt">
				<h1>Не нашли нужной позиции?</h1>
				<h3>Мы изготавливаем на заказ. Оставьте заявку и наш менеджер свяжется с Вами!</h3>
			</div>
			<button class="abtbtn">Оставить Заявку</button>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.bef_full {
	width: 100%;
	height: 30vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #606060;
}
.bef {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.bef h1 {
	font-size: 45px;
	color: white;
}
.bef h3 {
	color: white;
	font-weight: 400;
}
.txt {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.abtbtn {
	padding: 15px 60px;
	background-color: #eba707;
	border-radius: 50px;
	color: white;
	border: none;
	font-size: 20px;
	transition: all 0.4s;
	cursor: pointer;
}
.abtbtn:hover {
	color: #eba707;
	background-color: white;
}
</style>
