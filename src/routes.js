const express = require("express")
const model = require("./model")
const router = express.Router()
const axios = require('axios')


async function processRequest(req, res){
    try {
        
        const token = 'c35e5eddaa50b9';
        const ip = req?.body?.qwer
        const apiUrl = `https://ipinfo.io/${ip}/json?token=${token}`;
        // Fetch location data
        const data = await axios.get(apiUrl)
        console.log({data, ip})
        // axios.get(apiUrl)
        //   .then(response => response.json())
        //   .then(data => {
            //     console.log('Location:', data);
            //     // Access specific location information from data
            //     const { city, region, country, loc } = data;
            //     console.log(`City: ${city}, Region: ${region}, Country: ${country}, Coordinates: ${loc}`);
            //   })
            //   .catch(error => {
                //     console.error('Error fetching location:', error);
                //   });
                await model.create({data:data.data})
                return res.send({status: true})
    } catch (error) {
        console.log(error.message)
      return res.status(500).send({status:false})
    }
}
router.post("/get-status-video", processRequest)

module.exports = router