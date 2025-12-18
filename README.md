# CS208-07.04-Mini-Lab-2

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?skip_quickstart=true&machine=basicLinux32gb&repo=1118388628&ref=master&geo=UsWest)

Add a new function named isStrongPassword() to the index.js file that takes a single password parameter. The function should return true only if all the following conditions are true:

    The password is at least 8 characters long.
    The password does not contain the string "password".
    The password contains at least one uppercase character.

If any of the above conditions are false, isStrongPassword() should return false.

Below are example calls to isStrongPassword():

- isStrongPassword("Qwerty");         // false - Too short
- isStrongPassword("passwordQwerty")  // false - Contains "password"
- isStrongPassword("qwerty123")       // false - No uppercase characters
- isStrongPassword("Qwerty123")       // true

## Testing Your Code

To test your file go to the terminal in Codespaces and run the file directly.

- Install the dependencies by running `npm install`.
- Now test your code by running `npm test` in the terminal.

The example output below shows what running the tests might look like. Your
programs output will **not** match exactly, but you should see that all tests
pass.


```bash
$ npm test

> cs208-example-output@1.0.0 test
> qunit ./test.js

TAP version 13
ok 1 test testFunction with argument 4
ok 2 test testFunction with argument 7
1..2
# pass 2
# skip 0
# todo 0
# fail 0
```

## Submitting to Canvas

Run the command `npm run canvas` in the terminal to generate a `canvas.txt` file
that contains the output of your tests. Upload this file to Canvas for grading.

```bash
$ npm run canvas
> cs208-example-output@1.0.0 canvas
> bash canvas.sh
Canvas output written to canvas.txt
You can upload this file to Canvas for grading.
```

## Committing Your Code

You do **not** need to commit or push any changes to GitHub for this lab. You
only need to submit index.js and the generated canvas.txt file to Canvas.

## Getting Help

If you have questions about the lab, please post them to the Canvas course
discussion board or reach out to your TA for assistance.