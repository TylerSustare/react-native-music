const axios = require('axios');

axios.get('http://sustare2017-animals.s3-website-us-west-2.amazonaws.com/')
  .then(response => {
    console.log(response);
  });

