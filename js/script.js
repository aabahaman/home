var AppsScriptLink = "AKfycbwClrgQiW-LnbEZ5l7u6ZHAA3PPT-5Ix1h4ZlocnRvnGAqEeKGeUYqegsgzQ-pqZRwS";

function userVal() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    return new Promise((resolve, reject) => {
      $.getJSON("https://script.google.com/macros/s/" + AppsScriptLink + "/exec?page=userProfile&user=" + username + "&pw=" + password,
        function (data) {
          // console.log(data);
          resolve(data);
        }).fail(function(jqxhr, textStatus, error) {
          reject(error);
        });
    });
  }

function billingData() {
    return new Promise((resolve, reject) => {
      $.getJSON("https://script.google.com/macros/s/" + AppsScriptLink + "/exec?page=billingData",
        function (data) {
          // console.log(data);
          resolve(data);
        }).fail(function(jqxhr, textStatus, error) {
          reject(error);
        });
    });
  }

  