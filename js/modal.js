var modal = document.getElementById('myModal');


// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = Array.from(document.getElementsByClassName('myImg'));
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

images.forEach(function(image){
  image.onclick = function(){
      modal.style.display = "block";
      modalImg.className = "modal-content flyin";
      captionText.className = "flyin";
      span.className = "flyin close"
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }
});



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalImg.className = 'modal-content';
    captionText.className = '';
      span.className = "close"
    modal.style.display = "none";
}
