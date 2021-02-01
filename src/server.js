
// const http = require('http');


// let app = http.createServer((req, res) => {
    
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     var  jsonresp = {'net': [
//         {'beginnercourse': 
//             {'content': 'xyz', 'duration': '3 months', 'fee':'1000' } 
//         },
//         {'Intermediatecourse': 
//             {'content': 'ABC', 'duration': '3 months', 'fee':'1000' } 
//         },
//         {'Advancecourse': 
//             {'content': 'DEF', 'duration': '3 months', 'fee':'1000' } 
//         }
//     ]
// }
    
//     res.end(JSON.stringify(jsonresp));
// });


// app.listen(3000, '127.0.0.1');
// console.log('Node server running on port 3000');



const express = require('express')
const contentmod = require('./contentmod')
console.log(contentmod)
const app = express()
const port = 3000

    var  jsonresp = {'net': [
        {'beginnercourse': 
            {'content': 'xyz', 'duration': '3 months', 'fee':'1000' } 
        },
        {'Intermediatecourse': 
            {'content': 'ABC', 'duration': '3 months', 'fee':'1000' } 
        },
        {'Advancecourse': 
            {'content': 'DEF', 'duration': '3 months', 'fee':'1000' } 
        }
    ]
}
    

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/courses/net', returnDotNetDetails)
function returnDotNetDetails(req, res){
    res.send(JSON.stringify(jsonresp));
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))