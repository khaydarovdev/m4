<template>
	<div class="nav_full">
		<nav>
			<RouterLink to="/">
				<img src="../src/assets/logo.png" alt="" />
			</RouterLink>
			<ul>
				<router-link to="/">
					<li>Главная</li>
				</router-link>
				<router-link :to="{ name: 'service' }">
					<li>Услуги</li>
				</router-link>
				<router-link :to="{ name: 'portfolio' }">
					<li>Портфолио</li>
				</router-link>
				<router-link :to="{ name: 'contact' }">
					<li>Контакты</li>
				</router-link>
				<router-link :to="{ name: 'info' }">
					<li>Информация</li>
				</router-link>
			</ul>
		</nav>
	</div>
	<router-view></router-view>
</template>
<script>
export default {};
</script>
<style scoped>
.nav_full {
	height: 150px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
}
nav {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
nav ul {
	display: flex;
	list-style: none;
	gap: 25px;
}
nav ul li {
	color: #eba707;
	font-size: 20px;
	transition: all 0.4s;
}
nav ul li:hover {
	color: white;
	text-decoration: underline #eba707;
}
</style>
