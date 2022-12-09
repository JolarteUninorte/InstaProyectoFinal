const Index = () => {
    return (
     <main className="my-5">
        <div className="container-fluid ">
          <section className="text-center">
            <h4 className="mb-5"><strong>Nuestros servicios</strong></h4>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card shadow border-0">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="Naturaleza" className="img-fluid" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Programa la recogida de tus paquetes</h5>
                    <p className="card-text">
                      Establece la recogida de su paquete para su futuro envío.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow border-0">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/023.jpg" alt="Naturaleza" className="img-fluid" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de ordenes</h5>
                    <p className="card-text">
                      Podrá ver un historial de las recogidas de paquetes que haya programado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow border-0">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"  alt="Naturaleza" className="img-fluid" />
                    <a href="#!">
                      <div className="mask"></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Suscribete a la aplicación</h5>
                    <p className="card-text">
                      Al registrarse podrá comenzar a programar la recogida de sus paquetes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
}

export default Index