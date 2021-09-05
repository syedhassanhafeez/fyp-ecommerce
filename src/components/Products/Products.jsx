import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'font-awesome/css/font-awesome.min.css';
import Product from './Product/Product';
import useStyles from './styles';
import HeaderCarousel from '../../HeaderCarousel';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main >
      <div className={classes.toolbar} />
      <HeaderCarousel />
      <div className="mainCard">
        <div className="card1">
          <div><i className="fa fa-truck" aria-hidden="true"></i></div>
          <div>
            <h3>Free Shipping</h3>
          </div>
        </div>
        <div className="card2">
          <div><i className="fa fa-headphones" aria-hidden="true"></i></div>
          <div>
            <h3>24/7 Support</h3>
          </div>
        </div>
        <div className="card3">
          <div><i className="fa fa-thumbs-up" aria-hidden="true"></i></div>
          <div>
            <h3>Best Quality</h3>
          </div>
        </div>
      </div>
      <div className="heading">

        <h1>Products</h1>

      </div>
      <div className={classes.content}>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div class="footer">
        <div>
          <h4>Copyright <i className="fa fa-copyright" aria-hidden="true"></i> 2021 iVolve Technologies Pvt. Ltd.
          </h4>
        </div>
      </div>
      {/* <div class="bottom">
        <div style={{ color: "white", marginLeft: "40%", fontWeight: "bolder" }}>
          <p>Useful Links<span style={{ marginLeft: "20%" }}>Connect With Us</span></p>
        </div>

        <div className="link1" style={{ marginLeft: "60%" }}>
          <a href="https://www.facebook.com/"><img src="images/facebooklogo.png" alt="facebook" style="width: 25px;"></a>
          <a href="https://www.twitter.com/"><img src="images/twit.png" alt="twitter" style="width: 30px;" id="one"></a>
          <a href="https://www.instagram.com/"><img src="images/insta.png" alt="instagram" style="width: 27px;" id="two"></a>
          <a href="https://www.youtube.com/"><img src="images/yout.png" alt="youtube" style="width: 35px;height: 30px;"
            id="three"></a>
          <a href="https://www.whatsapp.com/"><img src="images/whats.png" alt="whatsapp" style="width: 25px; height: 25px;"
            id="four"></a>
        </div>

        <div style={{ fontWeight: "lighter", marginLeft: "5%", color: "gray" }}>
          <p>Head Office,</p>
          <p>A-25, Bahadurabad Chowrangi Karachi, Pakistan</p>
          <br>
            <p><img src="images/phone.png" alt="phone" width="15px">&nbsp; &nbsp; UAN: 111-729-526 (+0092-213) 4130786-90</p><br>
              <p><img src="images/phone.png" alt="phone" width="15px">&nbsp; &nbsp; CELL: 92-311-1729526</p><br>
                <p><img src="images/phone.png" alt="phone" width="15px">&nbsp; &nbsp; USA NO +1(716)941 7792</p><br>
                  <p><img src="images/phone.png" alt="phone" width="15px">&nbsp; &nbsp; UK NO (+44)115 970 6256</p><br>
                    <p><img src="images/mail.png" alt="phone" width="15px">&nbsp; &nbsp; info @saylaniwelfare.com</p>
                  </div>
                </div>
                <div style={{ backgroundColor: "blue" }}>
                  <p style={{ marginLeft: "8", fontSize: "14px", color: "white", padding: "15px" }}>Copyright © 2021 iVolveTech.</p>
                </div> */}



    </main>
  );
};

export default Products;

