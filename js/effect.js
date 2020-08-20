var i = 0;
function typeWriter(txtin) {
  var txt = txtin;
  if (i < txt.length) {
    document.getElementById("terminal-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50000);
  }
}
function Show(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
// <!-- <div
//         id="carouselExampleCaptions"
//         class="carousel slide"
//         data-ride="carousel"
//       >
//         <ol class="carousel-indicators">
//           <li
//             data-target="#carouselExampleCaptions"
//             data-slide-to="0"
//             class="active"
//           ></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
//           <li data-target="#carouselExampleCaptions" data-slide-to="10"></li>
//         </ol>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img
//               src="images/Portfolio/p-1.jpg"
//               class="d-block w-100"
//               alt="p-1"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>First slide label</h5>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/External C Programming Winner.jpg"
//               class="d-block w-100"
//               alt="External C Programming Winner"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/Python Certificate-001.jpg"
//               class="d-block w-100"
//               alt="Python Certificate"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/External Compitition Code War.jpg"
//               class="d-block w-100"
//               alt="External Compitition Code War"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/External C Programming-001.jpg"
//               class="d-block w-100"
//               alt="External C Programming"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/Certificate National Level HTML_CSS Quiz_-001.jpg"
//               class="d-block w-100"
//               alt="Certificate National Level HTML_CSS Quiz"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/Certificate PHP & MySQL.png"
//               class="d-block w-100"
//               alt="Certificate PHP & MySQL"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/Certificate Quiz on _Introduction to  C..._-001.jpg"
//               class="d-block w-100"
//               alt="Certificate Quiz on _Introduction to  C"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/Certificate National Level Programming ..._-001.jpg"
//               class="d-block w-100"
//               alt="Certificate National Level Programming"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/Certificate C++-001.jpg"
//               class="d-block w-100"
//               alt="Certificate C++"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img
//               src="images/Portfolio/Certificate C Programming Quiz_.jpg"
//               class="d-block w-100"
//               alt="Certificate C Programming Quiz"
//             />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//               </p>
//             </div>
//           </div>
//         </div>
//         <a
//           class="carousel-control-prev"
//           href="#carouselExampleCaptions"
//           role="button"
//           data-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Previous</span>
//         </a>
//         <a
//           class="carousel-control-next"
//           href="#carouselExampleCaptions"
//           role="button"
//           data-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Next</span>
//         </a>
//       </div> -->
//       <!--Carousel Wrapper-->
