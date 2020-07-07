window.onload = function () {
  // const click = document.getElementById("btnssa");
  const click = document.getElementsByClassName("btns");
  const dest = document.getElementById("coln");
  for (let i = 0; i < click.length; i++) {
    click[i].onclick = function (event) {
      event.preventDefault();
      dest.innerHTML = `  <div id ="ro"class="row" style="padding-left: 5px;padding-bottom: 6%;">
    <div class="col-sm-3" >
      <div class="" id="shad" >
        <div class="card-body" id="ell">
          <h3 class="title" style="font-size: 0.4cm;font-weight: 600;margin-left: 15%;margin-top: -4%;">Pvt. Ltd. Co. Registration</h3>
          <p style="font-size: x-small;margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
  <span style="font-size: small;">₹6999</span>
  <a href="2 page.html">  <button
          id="btnssb"
          class="btns"
          type="submit"
         style="float: right;border-color: #ff9100;"
        >
        Get Started
        </button> </a><br>
       <span style="font-size: 0.28cm;margin-top: -4%;">Professional fees</span>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="" id="shad" >
        <div class="card-body" id="elf">
          <h3 style="font-size: 0.4cm;font-weight: 600;margin-left: 15%;margin-top: -4%;">LLP Registration</h3>
         <p style="font-size: x-small;margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
         <span style="font-size: small;">₹4999</span><button
          id="btnssb"
          class="btns"
          type="submit"
         style="float: right;border-color: #ff9100;"
        >
        Get Started
        </button>
        <br>
        <span style="font-size: 0.28cm;margin-top: -4%;">Professional fees</span>
        </div>
      </div>
    </div>
    <div class="col-sm-3">
        <div class="" id="shad"  >
          <div class="card-body" id="elg">
          <h3 style="font-size: 0.4cm;font-weight: 600;margin-left: 15%;margin-top: -4%;">MSME Registrations</h3>
          <p style="font-size: x-small;margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
          <span style="font-size: small;">₹6999</span>
           <button
            id="btnssb"
            class="btns"
            type="submit"
           style="float: right;border-color: #ff9100;"
          >
          Get Started
          </button>
          <br>
          <span style="font-size: 0.28cm;margin-top: -4%;">Professional fees</span>
          </div>
        </div>
     
     `;
    };
  }
  // click.onclick = function (event) {
  //   event.preventDefault();
  //   dest.innerHTML = `  <div id ="ro"class="row" style="padding-left: 5px;padding-bottom: 6%;">
  //   <div class="col-sm-3" >
  //     <div class="" id="shad" >
  //       <div class="card-body" id="ell">
  //         <h3 class="title" style="font-size: 0.4cm;font-weight: 600;margin-left: 15%;margin-top: -4%;">Pvt. Ltd. Co. Registration</h3>
  //         <p style="font-size: x-small;margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
  // <span style="font-size: small;">₹6999</span>
  // <a href="2 page.html">  <button
  //         id="btnssb"
  //         class="btns"
  //         type="submit"
  //        style="float: right;border-color: #ff9100;"
  //       >
  //       Get Started
  //       </button> </a><br>
  //      <span style="font-size: 0.28cm;margin-top: -4%;">Professional fees</span>
  //       </div>
  //     </div>
  //   </div>
  //   <div class="col-sm-3">
  //     <div class="" id="shad" >
  //       <div class="card-body" id="elf">
  //         <h3 style="font-size: 0.4cm;font-weight: 600;margin-left: 15%;margin-top: -4%;">LLP Registration</h3>
  //        <p style="font-size: x-small;margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
  //        <span style="font-size: small;">₹4999</span><button
  //         id="btnssb"
  //         class="btns"
  //         type="submit"
  //        style="float: right;border-color: #ff9100;"
  //       >
  //       Get Started
  //       </button>
  //       <br>
  //       <span style="font-size: 0.28cm;margin-top: -4%;">Professional fees</span>
  //       </div>
  //     </div>
  //   </div>
  //   <div class="col-sm-3">
  //       <div class="" id="shad"  >
  //         <div class="card-body" id="elg">
  //         <h3 style="font-size: 0.4cm;font-weight: 600;margin-left: 15%;margin-top: -4%;">MSME Registrations</h3>
  //         <p style="font-size: x-small;margin-top: 5%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
  //         <span style="font-size: small;">₹6999</span>
  //          <button
  //           id="btnssb"
  //           class="btns"
  //           type="submit"
  //          style="float: right;border-color: #ff9100;"
  //         >
  //         Get Started
  //         </button>
  //         <br>
  //         <span style="font-size: 0.28cm;margin-top: -4%;">Professional fees</span>
  //         </div>
  //       </div>

  //    `;
  // };
};
