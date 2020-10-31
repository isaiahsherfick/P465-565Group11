import { Restaurant } from '@material-ui/icons';
import Header2 from 'Header2';
import React, {useState} from 'react'
import './Explore.css'



const Explore = () => {

    
      const newData = { 
        
                "html_attributions":[
                   
                ],
                "next_page_token":"AcnaJv3wzCT_4SDys8EQGSw1bbbJSY6y36yr6JbIFQmno8Wv7kP2wxNhbvobB70a-beC2ysKUg_ZyaXd7uG4Vh7JX2ABCOHqGOOk6r93HDTKt84kBWWgL-NgRY3B8HIiofTZNlEwNn9GjM5NY5qrCxzYQ8Zsjml6o6sz8f7pzgH7SIVzy-o0YF2RGI1Xnnc6wuod0DmfTARUdDqHRjupm1siMils6jJ69esecW06Xp98ArV2iwxQgOaoMI0rD_bp004-y1mN7aU2mWGeNrZysj4YA6idkKuWZKe3ONejqLzAdPVahEJ7W3cA4vZzppO4gEpAkpXUsc2CRDdere3p0_tNWvUmplkJpe66-mv068gYeSIo0BrNSZLgPmNCqwNaECxRT9dgXwmeu-z7CTY0HK0eCtMOaoUHp0-W0sWwgA1G_XXIWviYuD5DkXvplDviztfNUA",
                "results":[
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.86626100000001,
                            "lng":-87.6169805
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8675688,
                               "lng":-87.61198644999999
                            },
                            "southwest":{
                               "lat":41.8642532,
                               "lng":-87.62091104999999
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
                      "name":"Field Museum",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJV0AwM30rDogR2sd-X0cgErU",
                      "plus_code":{
                         "compound_code":"V98M+G6 Chicago, IL, USA",
                         "global_code":"86HJV98M+G6"
                      },
                      "price_level":3,
                      "rating":4.7,
                      "reference":"ChIJV0AwM30rDogR2sd-X0cgErU",
                      "scope":"GOOGLE",
                      "types":[
                         "museum",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":15349,
                      "vicinity":"1400 South Lake Shore Drive, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8795845,
                            "lng":-87.62371329999999
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8815557802915,
                               "lng":-87.61938330000002
                            },
                            "southwest":{
                               "lat":41.8788578197085,
                               "lng":-87.6258977
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
                      "name":"The Art Institute of Chicago",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJlUbZ4qMsDogR3tCinMzzKUg",
                      "plus_code":{
                         "compound_code":"V9HG+RG Chicago, IL, USA",
                         "global_code":"86HJV9HG+RG"
                      },
                      "price_level":3,
                      "rating":4.8,
                      "reference":"ChIJlUbZ4qMsDogR3tCinMzzKUg",
                      "scope":"GOOGLE",
                      "types":[
                         "museum",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":23086,
                      "vicinity":"111 South Michigan Avenue, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8987699,
                            "lng":-87.6229168
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.9001681302915,
                               "lng":-87.6214897
                            },
                            "southwest":{
                               "lat":41.8974701697085,
                               "lng":-87.62488369999998
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
                      "name":"875 North Michigan Avenue",
                      "place_id":"ChIJNbKQElTTD4gR0JKC0nXHXWg",
                      "plus_code":{
                         "compound_code":"V9XG+GR Chicago, IL, USA",
                         "global_code":"86HJV9XG+GR"
                      },
                      "rating":4.6,
                      "reference":"ChIJNbKQElTTD4gR0JKC0nXHXWg",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "premise",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":14445,
                      "vicinity":"875 North Michigan Avenue, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8675726,
                            "lng":-87.614038
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8685195802915,
                               "lng":-87.61318966970849
                            },
                            "southwest":{
                               "lat":41.86582161970851,
                               "lng":-87.61588763029151
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Shedd Aquarium",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJ-XW3X2MrDogR3_tQ3-OdBTI",
                      "plus_code":{
                         "compound_code":"V99P+29 Chicago, IL, USA",
                         "global_code":"86HJV99P+29"
                      },
                      "price_level":3,
                      "rating":4.6,
                      "reference":"ChIJ-XW3X2MrDogR3_tQ3-OdBTI",
                      "scope":"GOOGLE",
                      "types":[
                         "aquarium",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":24883,
                      "vicinity":"1200 South Lake Shore Drive, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8788761,
                            "lng":-87.635915
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8802606302915,
                               "lng":-87.6342349197085
                            },
                            "southwest":{
                               "lat":41.8775626697085,
                               "lng":-87.63693288029151
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Skydeck Chicago",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJu_tp4r4sDogR_dRFCX8wCc8",
                      "plus_code":{
                         "compound_code":"V9H7+HJ Chicago, IL, USA",
                         "global_code":"86HJV9H7+HJ"
                      },
                      "rating":4.5,
                      "reference":"ChIJu_tp4r4sDogR_dRFCX8wCc8",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "museum",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":18511,
                      "vicinity":"233 South Wacker Drive, Chicago"
                   },
                   {
                      "business_status":"CLOSED_TEMPORARILY",
                      "geometry":{
                         "location":{
                            "lat":41.866333,
                            "lng":-87.6067829
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.86765313029149,
                               "lng":-87.60574636970848
                            },
                            "southwest":{
                               "lat":41.8649551697085,
                               "lng":-87.60844433029149
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
                      "name":"Adler Planetarium",
                      "permanently_closed":true,
                      "place_id":"ChIJtRSxt28rDogRpo4hEqqjIGk",
                      "plus_code":{
                         "compound_code":"V98V+G7 Chicago, IL, USA",
                         "global_code":"86HJV98V+G7"
                      },
                      "rating":4.3,
                      "reference":"ChIJtRSxt28rDogRpo4hEqqjIGk",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":1318,
                      "vicinity":"1300 South Lake Shore Drive, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.921102,
                            "lng":-87.6334742
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.92720335000001,
                               "lng":-87.62908445000001
                            },
                            "southwest":{
                               "lat":41.91538674999999,
                               "lng":-87.63799265
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Lincoln Park Zoo",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJB5o6CWvTD4gR25QC-QbMQAk",
                      "plus_code":{
                         "compound_code":"W9C8+CJ Chicago, IL, USA",
                         "global_code":"86HJW9C8+CJ"
                      },
                      "price_level":0,
                      "rating":4.6,
                      "reference":"ChIJB5o6CWvTD4gR25QC-QbMQAk",
                      "scope":"GOOGLE",
                      "types":[
                         "zoo",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":21765,
                      "vicinity":"2001 North Clark Street, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8826572,
                            "lng":-87.6233039
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8840155802915,
                               "lng":-87.6222134197085
                            },
                            "southwest":{
                               "lat":41.8813176197085,
                               "lng":-87.62491138029151
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Cloud Gate",
                      "opening_hours":{
                         "open_now":true
                      },
                      "place_id":"ChIJ9Sszh6YsDogRUUo6zu8_TQY",
                      "plus_code":{
                         "compound_code":"V9MG+3M Chicago, IL, USA",
                         "global_code":"86HJV9MG+3M"
                      },
                      "rating":4.8,
                      "reference":"ChIJ9Sszh6YsDogRUUo6zu8_TQY",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":13978,
                      "vicinity":"201 East Randolph Street, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8825524,
                            "lng":-87.62255139999999
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.88610295,
                               "lng":-87.61945715
                            },
                            "southwest":{
                               "lat":41.87909875000001,
                               "lng":-87.62560815
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
                      "name":"Millennium Park",
                      "place_id":"ChIJA5xPiqYsDogRBBCptdwsGEQ",
                      "plus_code":{
                         "compound_code":"V9MG+2X Chicago, IL, USA",
                         "global_code":"86HJV9MG+2X"
                      },
                      "price_level":0,
                      "rating":4.8,
                      "reference":"ChIJA5xPiqYsDogRBBCptdwsGEQ",
                      "scope":"GOOGLE",
                      "types":[
                         "park",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":56284,
                      "vicinity":"201 East Randolph Street, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.9484384,
                            "lng":-87.6553327
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.94991339999999,
                               "lng":-87.65315950000002
                            },
                            "southwest":{
                               "lat":41.94641380000002,
                               "lng":-87.65788549999998
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/stadium-71.png",
                      "name":"Wrigley Field",
                      "place_id":"ChIJId-a5bLTD4gRRtbdduE-6hw",
                      "plus_code":{
                         "compound_code":"W8XV+9V Chicago, IL, USA",
                         "global_code":"86HJW8XV+9V"
                      },
                      "rating":4.8,
                      "reference":"ChIJId-a5bLTD4gRRtbdduE-6hw",
                      "scope":"GOOGLE",
                      "types":[
                         "stadium",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":27849,
                      "vicinity":"1060 West Addison Street, Chicago"
                   },
                   {
                      "business_status":"CLOSED_TEMPORARILY",
                      "geometry":{
                         "location":{
                            "lat":41.8837536,
                            "lng":-87.6249515
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8852150802915,
                               "lng":-87.62360316970849
                            },
                            "southwest":{
                               "lat":41.8825171197085,
                               "lng":-87.6263011302915
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Chicago Cultural Center",
                      "permanently_closed":true,
                      "place_id":"ChIJHzRIuaUsDogRP_AJdMSgzjI",
                      "plus_code":{
                         "compound_code":"V9MG+G2 Chicago, IL, USA",
                         "global_code":"86HJV9MG+G2"
                      },
                      "price_level":0,
                      "rating":4.7,
                      "reference":"ChIJHzRIuaUsDogRP_AJdMSgzjI",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":4856,
                      "vicinity":"78 E Washington St, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8972278,
                            "lng":-87.62134239999999
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8985747302915,
                               "lng":-87.61938285000001
                            },
                            "southwest":{
                               "lat":41.8958767697085,
                               "lng":-87.62265024999998
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
                      "name":"Museum Of Contemporary Art Chicago",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJKXA7AlXTD4gRsvBFJ8wG9x4",
                      "plus_code":{
                         "compound_code":"V9WH+VF Chicago, IL, USA",
                         "global_code":"86HJV9WH+VF"
                      },
                      "rating":4.5,
                      "reference":"ChIJKXA7AlXTD4gRsvBFJ8wG9x4",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "museum",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":4006,
                      "vicinity":"220 East Chicago Avenue, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8332147,
                            "lng":-87.627275
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8345657802915,
                               "lng":-87.62592606970848
                            },
                            "southwest":{
                               "lat":41.83186781970851,
                               "lng":-87.6286240302915
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"S. R. Crown Hall (IIT College of Architecture)",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJz8uyCg0sDogRD7rGqlEJIXA",
                      "plus_code":{
                         "compound_code":"R9MF+73 Chicago, IL, USA",
                         "global_code":"86HJR9MF+73"
                      },
                      "rating":4.7,
                      "reference":"ChIJz8uyCg0sDogRD7rGqlEJIXA",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":204,
                      "vicinity":"3360 South State Street, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8940642,
                            "lng":-87.799692
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8955383302915,
                               "lng":-87.7982718697085
                            },
                            "southwest":{
                               "lat":41.8928403697085,
                               "lng":-87.8009698302915
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
                      "name":"Frank Lloyd Wright Home and Studio",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJ3-7n58s0DogRje0JbyVFEYA",
                      "plus_code":{
                         "compound_code":"V6V2+J4 Oak Park, IL, USA",
                         "global_code":"86HJV6V2+J4"
                      },
                      "rating":4.7,
                      "reference":"ChIJ3-7n58s0DogRje0JbyVFEYA",
                      "scope":"GOOGLE",
                      "types":[
                         "museum",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":1631,
                      "vicinity":"951 Chicago Avenue, Oak Park"
                   },
                   {
                      "business_status":"CLOSED_TEMPORARILY",
                      "geometry":{
                         "location":{
                            "lat":41.855979,
                            "lng":-87.67280099999999
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8572708302915,
                               "lng":-87.6714760697085
                            },
                            "southwest":{
                               "lat":41.8545728697085,
                               "lng":-87.67417403029151
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
                      "name":"National Museum of Mexican Art",
                      "permanently_closed":true,
                      "place_id":"ChIJsTi-rKAtDogRx9MnUyQcC7Q",
                      "plus_code":{
                         "compound_code":"V84G+9V Chicago, IL, USA",
                         "global_code":"86HJV84G+9V"
                      },
                      "rating":4.7,
                      "reference":"ChIJsTi-rKAtDogRx9MnUyQcC7Q",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "museum",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":1884,
                      "vicinity":"1852 West 19th Street, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8491286,
                            "lng":-87.73979899999999
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8505177302915,
                               "lng":-87.73862986970849
                            },
                            "southwest":{
                               "lat":41.8478197697085,
                               "lng":-87.7413278302915
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Hawthorne Works",
                      "place_id":"ChIJ78OEwK0zDogRtFcHEyNdTKU",
                      "plus_code":{
                         "compound_code":"R7X6+M3 Cicero, IL, USA",
                         "global_code":"86HJR7X6+M3"
                      },
                      "rating":4.1,
                      "reference":"ChIJ78OEwK0zDogRtFcHEyNdTKU",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":2356,
                      "vicinity":"Cicero"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8309913,
                            "lng":-87.6185994
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.8323845802915,
                               "lng":-87.61725196970849
                            },
                            "southwest":{
                               "lat":41.8296866197085,
                               "lng":-87.6199499302915
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Sunset Cafe",
                      "place_id":"ChIJ06x8-PUrDogR3mhL5yfznhc",
                      "plus_code":{
                         "compound_code":"R9JJ+9H Chicago, IL, USA",
                         "global_code":"86HJR9JJ+9H"
                      },
                      "rating":4.7,
                      "reference":"ChIJ06x8-PUrDogR3mhL5yfznhc",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":7,
                      "vicinity":"East 35th Street, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8328916,
                            "lng":-87.8357137
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.83966990000001,
                               "lng":-87.8302816
                            },
                            "southwest":{
                               "lat":41.82758829999998,
                               "lng":-87.8375244
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                      "name":"Brookfield Zoo",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJL-_gtOk1DogRlc9I1l-jYBs",
                      "plus_code":{
                         "compound_code":"R5M7+5P Brookfield, IL, USA",
                         "global_code":"86HJR5M7+5P"
                      },
                      "rating":4.6,
                      "reference":"ChIJL-_gtOk1DogRlc9I1l-jYBs",
                      "scope":"GOOGLE",
                      "types":[
                         "zoo",
                         "aquarium",
                         "tourist_attraction",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":16842,
                      "vicinity":"8400 West 31st Street, Brookfield"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.8721722,
                            "lng":-87.61875049999999
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.89947590000001,
                               "lng":-87.60691589999999
                            },
                            "southwest":{
                               "lat":41.8533071,
                               "lng":-87.6298259
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
                      "name":"Grant Park",
                      "opening_hours":{
                         "open_now":true
                      },
                      "place_id":"ChIJhU2sZqAsDogRtIzPkFS5qj0",
                      "plus_code":{
                         "compound_code":"V9CJ+VF Chicago, IL, USA",
                         "global_code":"86HJV9CJ+VF"
                      },
                      "rating":4.7,
                      "reference":"ChIJhU2sZqAsDogRtIzPkFS5qj0",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "park",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":16209,
                      "vicinity":"337 East Randolph Street, Chicago"
                   },
                   {
                      "business_status":"OPERATIONAL",
                      "geometry":{
                         "location":{
                            "lat":41.9117293,
                            "lng":-87.63167120000001
                         },
                         "viewport":{
                            "northeast":{
                               "lat":41.9130353802915,
                               "lng":-87.6304492197085
                            },
                            "southwest":{
                               "lat":41.9103374197085,
                               "lng":-87.6331471802915
                            }
                         }
                      },
                      "icon":"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
                      "name":"Chicago History Museum",
                      "opening_hours":{
                         "open_now":false
                      },
                      "place_id":"ChIJbfsYvUPTD4gR0Xktc9scc08",
                      "plus_code":{
                         "compound_code":"W969+M8 Chicago, IL, USA",
                         "global_code":"86HJW969+M8"
                      },
                      "rating":4.6,
                      "reference":"ChIJbfsYvUPTD4gR0Xktc9scc08",
                      "scope":"GOOGLE",
                      "types":[
                         "tourist_attraction",
                         "museum",
                         "point_of_interest",
                         "establishment"
                      ],
                      "user_ratings_total":2039,
                      "vicinity":"1601 North Clark Street, Chicago"
                   }
                ],
                "status":"OK"
             }

             const [myData, setMyData] = useState(newData)

             let placeId = "" 
             const addJson = (myData) => {
                 placeId = myData.place_id;
                fetch("www.fscerbook.com", {
                    method: "POST",
                    headers:{
                        "Content-type": "application/json"
                    },
                    body:{
                        name:  JSON.stringify(myData.name),
                        userId: JSON.stringify("1")
                    }
                })
                .then(res => res.json())
                .then(() => alert("Added successfully to Itinerary"))
                .then(() => console.log())
                .catch(err => console.log(err, "Unable to Post!"))
                }

             

             var apiKey = "AIzaSyCqflolF2b4aNNcyQs0XdbcoAFwtby7Muw";      
             var str1 = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeId}&key=${apiKey}`;
                
  
        
             
             
             const renderData = 
                 myData.results.map(result => (
                     
                     <div style={{background: "lightBlue"}} > 
                         <p>{result.name} </p>
                         <p>{result.rating}</p>
                         <p>{result.vicinity}</p>
                         <p onClick={() => addJson(result)}> <a href={"#"}>Add to Itinerary</a> </p>
        
                         {/* <img src={str1} /> */}
                         </div>
                 ))
             
            

            

   
    return (
        
       <div style={{marginTop:"20%"}}> 
           {renderData}
           hello
       </div>
    )
}

export default Explore
