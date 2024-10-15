<template>
	<div class="sec2_full">
		<section class="sec2">
			<h1>
				ПОЧЕМУ ВЫБИРАЮТ <br />
				ИМЕННО НАС?
			</h1>
			<div class="ics">
				<div class="txtnic">
					<div class="ic">
						<i class="bx bx-target-lock"></i>
					</div>
					<h3>
						Решение <br />
						любой задачи
					</h3>
				</div>
				<div class="txtnic">
					<div class="ic">
						<i class="bx bxs-diamond"></i>
					</div>
					<h3>
						Только проверенные <br />
						материалы
					</h3>
				</div>
				<div class="txtnic">
					<div class="ic">
						<i class="bx bxs-time"></i>
					</div>
					<h3>
						Скорость <br />
						исполения
					</h3>
				</div>
				<div class="txtnic">
					<div class="ic">
						<i class="bx bxs-bulb"></i>
					</div>
					<h3>
						Нестандартные <br />
						решения
					</h3>
				</div>
				<div class="txtnic">
					<div class="ic">
						<i class="bx bxs-sun"></i>
					</div>
					<h3>
						Современное <br />
						производство
					</h3>
				</div>
				<div class="txtnic">
					<div class="ic">
						<i class="bx bxs-like"></i>
					</div>
					<h3>
						Гарантия <br />
						качества
					</h3>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec2_full {
	width: 100%;
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #323232;
}
.sec2 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
}
.sec2 h1 {
	font-size: 45px;
	color: white;
	text-align: center;
}
.ics {
	display: flex;
	gap: 60px;
}
.ic {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	background-color: white;
	border-radius: 50px;
	font-size: 36px;
	color: #eba707;
	transition: all 0.4s;
}

.ic:hover {
	background-color: #eba707;
	color: white;
}
.txtnic {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	justify-content: space-around;
}
.txtnic h3 {
	color: white;
	text-align: center;
	font-weight: 400;
}
</style>
