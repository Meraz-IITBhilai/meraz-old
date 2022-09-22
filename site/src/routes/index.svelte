<script>
	import Hero from './_Hero.svelte';
	import 'lite-youtube-embed/src/lite-yt-embed.css';
	import { onMount } from 'svelte';

	onMount(() => import('lite-youtube-embed/src/lite-yt-embed'));
</script>

<svelte:head>
	<title>Meraz '22</title>
</svelte:head>

<Hero />

<!-- <section>
	<div class="title">
		<h1>Pronites</h1>
		<div>
			<a class="more-link" href="events">More Events</a>
		</div>
	</div>

	<div class="images">
		<div class="pronite-image">
			<span>DJ Night</span>
		</div>
		<div class="pronite-image">
			<span>Aakash Gupta</span>
		</div>
		<div class="pronite-image">
			<span>Band Performance</span>
		</div>
	</div>
</section> -->
<section class="glimpses">
	<div class="title">
		<h1 style="font-weight: normal">Meraz'22 Teaser</h1>
	</div>
	<!-- <iframe
		src="https://www.youtube.com/embed/vrHzl-E-Pvs"
		title="Meraz'19 Trailer"
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/> -->
	<lite-youtube
		videoid="W0VIHUbZ680"
		style="background-image: url('https://i.ytimg.com/vi/W0VIHUbZ680/hqdefault.jpg');"
	>
		<button type="button" class="lty-playbtn">
			<span class="lyt-visually-hidden">Play: Meraz'22 Glimpses</span>
		</button>
	</lite-youtube>
</section>
<section class="glimpses">
	<div class="title">
		<h1 style="font-weight: normal">Meraz'19 Glimpses</h1>
	</div>
	<!-- <iframe
		src="https://www.youtube.com/embed/vrHzl-E-Pvs"
		title="Meraz'19 Trailer"
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/> -->
	<lite-youtube
		videoid="fjtuMhY1KK8"
		style="background-image: url('https://i.ytimg.com/vi/fjtuMhY1KK8/hqdefault.jpg');"
	>
		<button type="button" class="lty-playbtn">
			<span class="lyt-visually-hidden">Play: Meraz'19 Glimpses</span>
		</button>
	</lite-youtube>
</section>

<section class="glimpses">
	<div class="title">
		<h1 style="font-weight: normal">Meraz'18 Glimpses</h1>
	</div>
	<!-- <iframe
		src="https://www.youtube.com/embed/uOQbTb4-ejs"
		title="Meraz'18 Glimpses"
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/> -->
	<lite-youtube
		videoid="uOQbTb4-ejs"
		style="background-image: url('https://i.ytimg.com/vi/uOQbTb4-ejs/hqdefault.jpg');"
	>
		<button type="button" class="lty-playbtn">
			<span class="lyt-visually-hidden">Play: Meraz'18 Glimpses</span>
		</button>
	</lite-youtube>
</section>

<style lang="scss">
	section {
		height: 100vh;
		padding-top: 75px;
		scroll-snap-align: start;
		scroll-padding-top: 75px;
		margin: auto;
		display: flex;
		flex-direction: column;

		.title {
			text-align: center;
			color: transparent;
			font-family: 'Metal Mania';

			letter-spacing: 3px;

			font-size: 1.3rem;
			background-position: -5px;
			h1,
			a {
				background: -webkit-linear-gradient(gold, gold, red);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			h1 {
				font-size: 2rem;
			}

			display: flex;
			margin: 0px 30px;
			div {
				display: flex;
				flex-direction: row-reverse;
				align-items: center;
				flex-grow: 1;
			}
		}

		a.more-link {
			border: 0px solid red;
			border-bottom-width: 1px;
			border-image: linear-gradient(90deg, #ff2600, gold, gold, #ff2600) 1 round;
		}
		div.images {
			height: 100%;
			display: flex;
			div.pronite-image {
				flex: 1;
				background-position: center;
				background-size: cover;
				margin: 30px;
				border-radius: 60px 0px;
				box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
					0 2px 4px -1px rgba(0, 0, 0, 0.3);
				position: relative;
				border: 3px outset goldenrod;

				transition: 0.25s color ease-in-out;
				transition: 0.25s transform ease-in-out;
				&:hover {
					color: gold;
					transform: scale(1.03);
				}

				span {
					font-family: 'Metal Mania', cursive;
					text-shadow: 2px solid red;
					letter-spacing: 3px;
					// font-size: 1.2em;

					font-size: 1.7em;
					position: absolute;
					bottom: 20px;
					left: 10px;
					text-shadow: black 0px 0px 5px;
				}
			}
		}
	}
	.pronite-image {
		cursor: pointer;
	}

	.pronite-image:nth-child(1) {
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)),
			url('../../../assets/event-images/shamelessMani.jpg');
		background-position: top !important;
	}
	.pronite-image:nth-child(2) {
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.9)),
			url('../../../assets/event-images/akashGupta.jpg');
	}
	.pronite-image:nth-child(3) {
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
			url('../../../assets/event-images/alchemy.jpg');
	}

	lite-youtube {
		margin: 1% auto;
		width: 75vw;
		height: 80vh;
	}

	@media screen and (max-width: 1060px) {
		section > div.images {
			flex-direction: column;

			div.pronite-image {
				margin-top: 10px;
				margin-bottom: 10px;
			}
		}
		lite-youtube {
			height: 30vh;
			width: 90vw;
			margin-top: 5vh;
			margin-bottom: 0px;
		}
		.glimpses {
			height: 70vh;
		}
	}
</style>
