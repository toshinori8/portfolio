<script lang="ts">
   import { browser } from 'svelte-browser';
    
    
    let acces: boolean;
	let media = [];
	let mediaRecorder = null;

	//   onMount(() => {

	//   })

	async function startRecording() {
		if (browser) {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
				mediaRecorder = new MediaRecorder(stream);
				mediaRecorder.ondataavailable = (e) => media.push(e.data);
				mediaRecorder.onstop = function () {
					const audio = document.querySelector('audio');
					const blob = new Blob(media, { type: 'audio/ogg; codecs=opus' });
					media = [];
					audio.src = window.URL.createObjectURL(blob);
				};
			});
		}
	}

	function stopRecording() {
		mediaRecorder.stop();
	}
</script>








<section>
    <audio controls />
    <button on:click={startRecording}>Record</button>
    <button on:click={stopRecording}>Stop</button>
</section>