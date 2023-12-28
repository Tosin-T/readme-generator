// // what is your github username
// what is your email Adress
// project name 

// please write a short description of your project
// what kind of liscence should your project have
// what command should be used to instal dependencies 
// what does the user need to know about the repo

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {

        type: "input",
        name: "projectName",
        message: "what is you project name?"
        
        },
        {
        
            type: "input",
            name: "description",
            message: "whats  your project about?"
            
        },
        {
        
            type: "input",
            name: "installation",
            message: "whats needed to install your project?"
            
        },
        {
        
                type: "input",
                name: "contribution",
                message: "how can people contribute"
                
        },
        {
        type: "checkbox",
        name: "liscences",
        message: "do you have a liscence on your project?",
        choices: ["Academic Free License v3.0","Artistic license 2.0","MIT","Mozilla Public License 2.0","PostgreSQL License","Microsoft Public License",]
        },
        {
        
            type: "input",
            name: "contact",
            message: "write down your contact infomration ie email or number"
            
        },
];

inquirer.prompt(questions).then((answer)=>{
   const filename=`README.md`;
const readMeDetails=`
# ProjectName: \n${answer.projectName}
## Description : \n${answer.description}
## Instalation: \n${answer.installation}
## contribution: \n${answer.contribution}
## liscences: \n${answer.liscences}
## contact: \n${answer.contact}`

fs.writeFile(filename,readMeDetails, (err) =>
err ? console.log(err) : console.log('Success!')
    
    );





})



// liscences{
//     MIT: "MIT License Copyright \n (c) 2023 Tosin-T\n Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n
    
//     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//     SOFTWARE.
//     "
// }
// const songSnippet = `
//   <div class="song">
//   <h2> ${music.title}</h2
//     <p> ${music.artist}
//     <p> ${music.albumProperties}</p>
//   </div>
// `;

// array of questions for user

// function to write README file
// fs.writeFile(${projectName}.md, process.argv[2],(err) =>
// err? console.log(err): console.log("sucesss!")
// ) 


// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

// ref appending to html?
// music should be an object with title, artist, and album properties
// const music = {
//     title: "Pink Matter",
//     artist: "Frank Ocean",
//     albumProperties: "coool album"
//     // code here
//   };
  
//   // Write code between the <div> tags to output the data from the music object above.
//   // Use an h2 element for the title and a p element for artist and title
//   const songSnippet = `
//     <div class="song">
//     <h2> ${music.title}</h2
//       <p> ${music.artist}
//       <p> ${music.albumProperties}</p>
//     </div>
//   `;
  
//   const element = document.getElementById("music");
//   element.innerHTML = songSnippet;
  
  