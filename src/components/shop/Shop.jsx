import React from "react";
import "./Shop.css";
import CoffeeBag from "../../assets/images/Rectangle 2.svg";
import ShoppingBag from "../../assets/images/shopping-bag.svg";
import Rate from "../../assets/images/rate.svg";
import Machine from "../../assets/images/machine.svg";

const Shop = () => {
  return (
      <div className="container">
        <div className="shop-wrapper">
          <p className="product-title">Product</p>
          <h1>Coffee popular Product</h1>
          <div className="product-wrapper">
            <div className="card-wrapper">
              <div className="product-card">
                <div className="product-image">
                  <img src={CoffeeBag} alt="" />
                </div>
                <img className="product-rate" src={Rate} alt="rate.svg" />
                <div className="product-info">brazil coffee gred</div>
                <p className="product-price">
                  Price - <span>$340.00/</span> $350
                </p>
                <button className="product-btn">
                  <img src={ShoppingBag} alt="" />
                  Add to card
                </button>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="product-card">
                <div className="product-image">
                  <img src={CoffeeBag} alt="" />
                </div>
                <img className="product-rate" src={Rate} alt="rate.svg" />
                <div className="product-info">brazil coffee gred</div>
                <p className="product-price">
                  Price - <span>$340.00/</span> $340
                </p>
                <button className="product-btn">
                  <img src={ShoppingBag} alt="" />
                  Add to card
                </button>
              </div>
            </div>
            <div className="card-wrapper">
              <div className="product-card">
                <div className="product-image">
                  <img src={CoffeeBag} alt="CoffereBag.svg" />
                </div>
                <img className="product-rate" src={Rate} alt="rate.svg" />
                <div className="product-info">brazil coffee gred</div>
                <p className="product-price">
                  Price - <span>$330.00/</span> $340
                </p>
                <button className="product-btn">
                  <img src={ShoppingBag} alt="" />
                  Add to card
                </button>
              </div>
            </div>
          </div>
          <div className="btn-wwrapper">
          </div>
        </div>
        <div className="container">
          <div className="shop-machine-wrapper">
            <div className="machine-img">
              <img src={Machine} alt="machine.svg" />
            </div>
            <div className="machine-info">
              <h1 className="machine-title">Coffee machine, buy for home</h1>
              <p>
                mauris rhoncus in imperdiet placerat. vestibu emismd nisl
                suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
                nibhtincidunt. donec et nib maximus, est eu, mattis nuce.
                preasent ut quam quis quam venen atis fri ngilla. morbi
                vastibulum id tells mmodo mattis. aliauam erat volutpal.
              </p>
              <button className="machine-btn">Discover now</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Shop;
