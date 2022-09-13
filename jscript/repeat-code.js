var userDetail = [
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
    {img:"images/unsplash_MqT0asuoIcU.png",description:"Home made pizza",price:"₹190",rateIcon:"icons/star.svg",rating:"3.7", time: "50-79 min", cartIcon: "icons/plus.svg"},
  ]

document.getElementById('middle3').innerHTML = userDetail.map(user =>
    `<div class="block">
      <div class="details">
        <div>
          <img
            src="${user.img}"
            alt="pizza"
            class="img4"
          />
        </div>
        <div class="row">
          <p>${user.description}</p>
          <p>${user.price}</p>
        </div>
        <div class="row">
          <div class="rate">
            <div class="rating">
              <img src=${user.rateIcon} alt="star" />
              <p>${user.rating}</p>
            </div>
            <div class="time">
              <p>${user.time}</p>
            </div>
          </div>
          <div class="plus">
            <img src=${user.cartIcon} />
          </div>
        </div>
      </div>
    </div>`
).join('')