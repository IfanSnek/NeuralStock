let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let manifest = JSON.parse(this.responseText);
		let html = "";

		for(let i = 0; i < manifest.images.length; i+=4){
			
			let image1 = manifest.images[i];
			let image2 = manifest.images[i + 1];
			let image3 = manifest.images[i + 2];
			let image4 = manifest.images[i + 3];

			let caption1 = manifest.captions[i];
			let caption2 = manifest.captions[i + 1];
			let caption3 = manifest.captions[i + 2];
			let caption4 = manifest.captions[i + 3];

			let template_row = `<div class=\"w3-row-padding\">\
						<div class=\"w3-col l3 m6 w3-margin-bottom\">\
						  <div class=\"w3-display-container\">\
							<div class=\"w3-display-topleft w3-black w3-padding\">${caption1}</div>\
							<img src=\"assets/${image1}.png\" alt=\"${caption1}\" style=\"width:100%\" onclick=\"window.open('assets/${image1}.png')\">\
						  </div>\
						</div>\
						<div class=\"w3-col l3 m6 w3-margin-bottom\">\
						  <div class=\"w3-display-container\">\
							<div class=\"w3-display-topleft w3-black w3-padding\">${caption2}</div>\
							<img src=\"assets/${image2}.png\" alt=\"${caption2}\" style=\"width:100%\" onclick=\"window.open(\'assets/${image2}.png')\">\
						  </div>\
						</div>\
						<div class=\"w3-col l3 m6 w3-margin-bottom\">\
						  <div class=\"w3-display-container\">\
							<div class=\"w3-display-topleft w3-black w3-padding\">${caption3}</div>\
							<img src=\"assets/${image3}.png\" alt=\"${caption3}\" style=\"width:100%\" onclick=\"window.open(\'assets/${image3}.png\')\">\
						  </div>\
						</div>\
						<div class=\"w3-col l3 m6 w3-margin-bottom\">\
						  <div class=\"w3-display-container\">\
							<div class=\"w3-display-topleft w3-black w3-padding\">${caption4}</div>\
							<img src=\"assets/${image4}.png\" alt=\"${caption4}\" style=\"width:100%\" onclick=\"window.open(\'assets/${image4}.png\')\">\
						  </div>\
						</div>\
					  </div>`;

			html += template_row;
		}
		document.getElementById("gallery").innerHTML = html;
	}

};
xhttp.open("GET", "./assets/manifest.json", true);
xhttp.send();

