function playAudio() {
    const audioElement = document.getElementById('bgm');
    audioElement.muted = false; // Unmute the audio
    audioElement.play(); // Play the audio
  
    // Global AudioContext variable
    let audioContext;
    let analyser;
    let dataArray;
    let ctx;
    let canvas;
    let canvasWidth;
    let canvasHeight;
  
    // Rest of your visualization code...
  
    // Function to initialize AudioContext and visualization
    function initAudioContext() {
      if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
      
        // Start the visualization
        canvas = document.createElement('canvas');
        canvasWidth = visualizer.clientWidth;
        canvasHeight = visualizer.clientHeight;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        ctx = canvas.getContext('2d');
        homepage.insertBefore(canvas, homepage.firstChild); // Insert canvas as the first child of visualizer
        renderFrame();
      }
  
      // Resume the AudioContext after user gesture
      if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
          console.log('Audio context resumed.');
        });
      }
    }

    // Function to render the visualization
    function renderFrame() {
      requestAnimationFrame(renderFrame);
  
      analyser.getByteFrequencyData(dataArray);
  
      ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear the canvas each frame
  
      const barWidth = (canvasWidth / dataArray.length) * 2.5;
      let x = 0;
  
      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = dataArray[i] * 1.5;
      
        const r = 255;
        const g = 255;
        const b = 255;
        const a = 0.9; // 90% transparency
      
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`; // Set the bars to 90% transparent white
        ctx.fillRect(x, canvasHeight - barHeight, barWidth, barHeight);
      
        x += barWidth + 1;
      }
    }

    // Call the function to initialize AudioContext and visualization when the first click occurs
    initAudioContext();
  }

  // Attach the click event listener to the document to start the audio and visualizer
  document.addEventListener('click', playAudio);