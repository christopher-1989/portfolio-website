<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <!-- The following is required to give the browser information about how to control the page's dimensions and scaling -->
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Portfolio</title>
  <!-- The following link is required to use FontAwesome icons. Check to see link and access key still work. -->
  <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
      integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
      crossorigin="anonymous"
    />
  <!-- The following is the link to the homepage's CSS. Modify path accordingly -->
  <link rel="stylesheet" href="resources/css/styles.css">

</head>

<body>
  <nav class="navbar" id="navbar">
    <div class="nav-home-container" >
        <a class="home-button" href="index.html">Portfolio</a>
    </div>
    <div class="menu-icon" >
        <a class='nav-menu-button' id='nav-menu-button'>
            <i class='fas fa-bars' id="bars"></i>
        </a>
    </div>
    <div class="nav-menu" id="nav-menu">
        <div class="nav-item">
            <a class="nav-button" id="button-one" href="#about-me">About Me</a>
        </div>
        <div class="nav-item">
            <a class="nav-button" id="button-two" href="#skills">Skills</a>
        </div>
        <div class="nav-item" >
            <a class="nav-button" id="button-three" href="#projects">Projects</a>
        </div>
        <div class="nav-item">
            <a class="nav-button" href="contact.html">Contact</a>
        </div>
    </div>
  </nav>
  <main class="main-container">
    <section class="about-me">
        <h1 class="name">Christofer MacDonald</h1>
        <p id="quote"><em>
            "You don't know what you don't know"<br>- unknown
        </em></p>
        <div class="circular-portrait">
            <img src="resources/headshot.jpg" class="headshot" alt="headshot" />
        </div>
        <h2 class="section-heading" id="about-me">About Me</h2>
        <p class="first-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, tempora minus, sapiente maiores voluptatum non vel, corporis similique totam eveniet hic enim dolore quo qui quis eligendi. Similique, natus pariatur.</p>
        <p class="second-para" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, tempora minus, sapiente maiores voluptatum non vel, corporis similique totam eveniet hic enim dolore quo qui quis eligendi. Similique, natus pariatur.</p>
    </section>
    <section class="skills" id="skills">
        <h2 class="section-heading">Skills</h2>
        <div class="skill-set" >
            <i class="fab fa-github" alt="GitHub"></i>
            <i class="fab fa-js" alt="JavaScript"></i>
            <i class="fab fa-python" alt="Python"></i>
            <i class="fab fa-node" alt="Node.js"></i>
            <i class="fab fa-react" alt="React.js"></i>
            <i class="fab fa-angular" alt="Angular.js"></i>
            <i class="fab fa-vuejs" alt="Vue.js"></i>
        </div>
    </section>
    <section class="projects" id="projects">
        <h2>Projects</h2>
        <div class="project">
            <strong>Project 1</strong>
            <div class="image-container">
                <img src="resources/design-system.JPG" alt="Design system website" class="card-pic" />
            </div>
        </div>
        <div class="project">
            <strong>Project 2</strong>
            <div class="image-container">
                <img src="resources/design-system.JPG" alt="Design system website" class="card-pic" />
            </div>
        </div>
        <div class="project">
            <strong>Project 3</strong>
            <div class="image-container">
                <img src="resources/design-system.JPG" alt="Design system website" class="card-pic" />
            </div>
        </div>
        <div class="project">
            <strong>Project 4</strong>
            <div class="image-container">
                <img src="resources/design-system.JPG" alt="Design system website" class="card-pic" />
            </div>
        </div>
    </section>
    <footer>
        <a class="footer-button" href="contact.html"><strong>Contact</strong></a>
    </footer>
  </main>  
  <!-- The following script is the first JS file. Modify path accordingly -->
  <script src="resources/js/main.js"></script>
</body>
</html>
