# A Simple Code Quiz

## Description
- Created a quiz that will present user with new question after they answer the prior question, user will be given a score with 
- Built it so user is a ble to have password produced based on their desired perferences
- Allows users clicks and prompt entries to return a desired password?
- Lenared the use of certain functions: e.g. concat, join, prompt, in this setting.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
If the user has access to the URL, simply open the URL link. The link to the deployed page is attached below:
https://mjlindskog.github.io/timed_code_quiz/

## Usage
Once the user has access to the URL they simply need to to click the "Start Quiz" button to begin the process. Then the user will be presented with one question at time. The quiz content is about various code criteria. Basic knowledge around HTML, CSS, and Javascript should allow the user to breeze through the quiz. Upon completion a score will be generated and saved to local storage.
    ```md
    ![GIF showing start screen and first question](/assets/img/A_Code_Quiz_by_Mark.gif)
    ```

## Credits
https://github.com/jamierachael - She structured her documents similar to mine, utilizing Javascript to create HTML elements, massive credit goes Jamie in help resolve issues I was facing with comparing slected answers, ending the quiz, and the idea of doing a separte html and js file for the highscores section
-credit to OSU Bootcamp activities for aid with time intervals and JSON/ local storage prperties
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference - MDN was the mostly helpful source in actually providing clarity to the various functions. properties,  and declarations i needed assistance with
https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide - helped wiht the README guidelines

## License
MIT License

Copyright (c) [2021] [Mark_Lindskog]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features
-Start button will begin process of presenting user with questions one at atime
-Each time a an answer is selected the user will be presented with a new question
-At the end the user will be presented with a score which is based on the remaining amount of time, time is subtracted by 10 seconds for each incorrect answer. If user fails to complete the quiz in 60 seconds they will be pesented with a score of 0.
