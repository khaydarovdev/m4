<template>
	<Section1 />
	<Section2 />
 <Section3/>
 <Beforefooter/>
</template>
<script>
import Beforefooter from '../components/Main/Beforefooter.vue';
import Section1 from '../components/Main/Section1.vue';
import Section2 from '../components/Main/Section2.vue';
import Section3 from '../components/Main/Section3.vue';
export default {
	components: {
		Section1,
		Section2,
  Section3,
  Beforefooter,
	},
};
</script>
<style scoped>
</style>
