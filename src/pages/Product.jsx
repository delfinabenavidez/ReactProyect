import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);
  const [productosSimilares, setProductosSimilares] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [cargando2] = useState(false);

  const dispatch = useDispatch();

  const agregarAlCarrito = (producto) => {
    dispatch(addCart(producto));
  };

  useEffect(() => {
    const obtenerProducto = async () => {
      setCargando(true);

      try {
        const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const datos = await respuesta.json();

        // Cambiar los nombres de las propiedades al español
        const productoTraducido = {
          ...datos,
          categoria: datos.category,
          titulo: datos.title,
          descripcion: datos.description,
        };

        setProducto(productoTraducido);

        const respuesta2 = await fetch(`https://fakestoreapi.com/products/category/${datos.category}`);
        const datos2 = await respuesta2.json();

        // Cambiar los nombres de las propiedades de productos similares al español
        const productosSimilaresTraducidos = datos2.map((item) => ({
          ...item,
          titulo: item.title,
          // Puedes cambiar más nombres de propiedades según sea necesario
        }));

        setProductosSimilares(productosSimilaresTraducidos);
      } catch (error) {
        // Manejar errores
      } finally {
        setCargando(false);
      }
    };

    obtenerProducto();
  }, [id]);

  const Cargando = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const MostrarProducto = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={producto.image}
                alt={producto.titulo}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{producto.categoria}</h4>
              <h1 className="display-5">{producto.titulo}</h1>
              <p className="lead">
                {producto.rating && producto.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${producto.price}</h3>
              <p className="lead">{producto.descripcion}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => agregarAlCarrito(producto)}
              >
                Añadir al Carrito
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Ir al Carrito
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Cargando2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const MostrarProductosSimilares = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {productosSimilares.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.titulo.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Comprar Ahora
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => agregarAlCarrito(item)}
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{cargando ? <Cargando /> : <MostrarProducto />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className=""> Puede que también te interese...</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {cargando2 ? <Cargando2 /> : <MostrarProductosSimilares />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
