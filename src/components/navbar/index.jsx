import 'bootstrap/dist/css/bootstrap.min.css'
import CartWidget from '../cartwidget'


const NavbarComponent = () => {
    
  return (
    <>
    <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="index.html"><CartWidget/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="">Dormitorio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Baño</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Cocina</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Recomendaciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="" >Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </>
  );
}

export default NavbarComponent;