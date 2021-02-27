	if (e.target.files && e.target.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				console.log("loaded");
				let video = document.createElement("video");
				video.src = e.target.result;
				video.load();
				ref.current.prepend(video);
			};

			reader.readAsDataURL(e.target.files[0]);
		}
