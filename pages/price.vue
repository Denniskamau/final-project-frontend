<template>
<div>
   <Navbar />
   <div class="mula">
  <div class="pricing pricing--sonam">
	<div class="pricing__item">
		<h3 class="pricing__title">Startup</h3>
		<div class="pricing__price"><span class="pricing__currency">$</span>9.90</div>
		<p class="pricing__sentence">Small business solution</p>
		<ul class="pricing__feature-list">
			<li class="pricing__feature">Sentiment Analysis</li>
			<li class="pricing__feature">Key Phrase Extraction</li>
			<li class="pricing__feature">40MB of storage space</li>
		</ul>
		<button class="pricing__action">Choose plan</button>
	</div>
	<div class="pricing__item">
		<h3 class="pricing__title">Standard</h3>
		<div class="pricing__price"><span class="pricing__currency">$</span>29,90</div>
		<p class="pricing__sentence">Medium business solution</p>
		<ul class="pricing__feature-list">
			<li class="pricing__feature">Sentiment Analysis</li>
			<li class="pricing__feature">Key Phrase Extraction</li>
			<li class="pricing__feature">Language Detection</li>
			<li class="pricing__feature">Entity Extraction</li>
			<li class="pricing__feature">1GB of storage space</li>
		</ul>
		<button class="pricing__action">Choose plan</button>
	</div>
	<div class="pricing__item">
		<h3 class="pricing__title">Professional</h3>
		<div class="pricing__price"><span class="pricing__currency">$</span>59,90</div>
		<p class="pricing__sentence">Gigantic business solution</p>
		<ul class="pricing__feature-list">
			<li class="pricing__feature">Sentiment Analysis</li>
			<li class="pricing__feature">Key Phrase Extraction</li>
			<li class="pricing__feature">Language Detection</li>
			<li class="pricing__feature">Entity Extraction</li>
			<li class="pricing__feature">Terms Co-ocurrence</li>
			<li class="pricing__feature">Unlimited storage space</li>
		</ul>
		<button class="pricing__action">Choose plan</button>
	</div>
</div>
</div>
</div>
</template>

<script>
import Navbar from '~/components/Navbar';
export default {
name: 'price',
components: {
    Navbar,
  },
}
</script>

<style>
.mula {
  margin-top: 5%;
}
.pricing {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	margin: 0 auto 3em;
}

.pricing__item {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	text-align: center;
	flex: 0 1 330px;
}

.pricing__feature-list {
	text-align: left;
}

.pricing__action {
	color: inherit;
	border: none;
	background: none;
}

.pricing__action:focus {
	outline: none;
}
/* Sonam */
.pricing--sonam .pricing__item {
	margin: 1.5em;
	padding: 2em;
	cursor: default;
	border-radius: 10px;
	background: #009688;
	box-shadow: 0 5px 20px rgba(0,0,0,0.05), 0 15px 30px -10px rgba(0,0,0,0.3);
	transition: background 0.3s;
}

.pricing--sonam .pricing__item:hover {
	background: #141315;
}

.pricing--sonam .pricing__title {
	font-size: 2em;
	width: 100%;
	margin: 0 0 0.25em;
	padding: 0 0 0.5em;
	border-bottom: 3px solid rgb(27, 26, 28);
}

.pricing--sonam .pricing__price {
	color: #E06060;
	font-size: 1.75em;
	padding: 1em 0 0.75em;
}

.pricing--sonam .pricing__sentence {
	font-weight: bold;
}

.pricing--sonam .pricing__feature-list {
	margin: 0;
	padding: 1em 1.25em 2em;
}

.pricing--sonam .pricing__action {
	font-weight: bold;
	margin-top: auto;
	padding: 0.75em 2em;
	border-radius: 5px;
	background: #E06060;
	transition: background 0.3s;
}

.pricing--sonam .pricing__action:hover,
.pricing--sonam .pricing__action:focus {
	background: #BD3C3C;
}
</style>
