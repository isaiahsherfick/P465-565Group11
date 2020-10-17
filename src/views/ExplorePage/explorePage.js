import './explorePage.scss'
import './explorePage.html'


const data = '{ "city": "Atlanta", "images": ["https://cdn.vox-cdn.com/thumbor/ZNe62juISsae8VBCqirs1_ay65U=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/7317929/DSC_0033.JPG"] }';
const obj = JSON.parse(data);
console.log(obj.city, obj.images[0]);

let city = obj.city;
let images = obj.images;

document.getElementById("city").innerHTML = city;
document.getElementById("heroImage").src = images[0];
