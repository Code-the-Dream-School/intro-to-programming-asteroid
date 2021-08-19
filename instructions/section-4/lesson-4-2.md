[< Back to Overview](../../README.md)

# Lesson 4.2: JavaScript and the DOM

This assignment will teach you the following:

- What is the DOM?
- Making Changes to the DOM

---

## Instructions

### Getting Started:

Merge your pull request from the previous lesson (if you haven't already):

[View tutorial](../common/how-to-merge.md)

Fetch the updated instructions from the base repository:

> Note: you may receive a conflict if you've made changes to the README or other instructions

![Fetch Upstream: Step 1](../assets/fetch-upstream/step-1.jpg)

Checkout your main branch and pull changes:

    git checkout main
    git pull

Create a new local branch to work on separate from the `main` branch:

    git checkout -b lesson-4-2

Now, open the project directory in your code editor and continue to the next section.

### Task List:

#### Create a JavaScript file

- [ ] Create a folder called `js/`
- [ ] Inside that folder, create a JavaScript file called `index.js`
- [ ] Open your `index.html` file
- [ ] Before the closing `</body>` tag, insert a `<script>` element with a `src` attribute that specifies the relative path to your JavaScript file (i.e. `js/index.js`)
- [ ] Save and open in your browser

#### Add Footer Element

- [ ] Open your `index.html` file
- [ ] Above the `<script>` element, add an empty `<footer>` element
- [ ] Save and refresh your browser

#### Insert Copyright Text in Footer

- [ ] Open your `index.js` file

- [ ] Create a new date object and store it in a variable named `today`
  - hint: `new Date()` constructor
- [ ] Retrieve the current year from your date object and store it in a variable named `thisYear`
  - hint: `getFullYear` method

- [ ] Using "DOM Selection", select the `<footer>` element from the DOM and store it in a variable named `footer`
  - hint: `querySelector` method
- [ ] Create a new paragraph (`p`) element and store it in a variable named `copyright`
  - hint: `createElement` method
- [ ] Set the inner HTML of your `copyright` element to display your name and the current year
  - hint: use `thisYear` variable from earlier
- [ ] Using "DOM Manipulation", append the `copyright` element to the footer
  - hint: `appendChild` method
- [ ] Save and refresh your browser
  - You should see the text "Your Name 2021" at the bottom of the page

#### Add Skills Section

- [ ] Open your `index.html` file
- [ ] Above the "Connect" section, add a new `<section>` element with an `id` attribute of value "skills"
- [ ] Inside the new section, add a `<h2>` element that says "Skills"
- [ ] After the `<h2>` element, add an empty unordered list (`<ul>`) element
- [ ] Save and refresh your browser
  - You should see the new "Skills" heading

#### Create List of Skills

- [ ] Open your `index.js` file
- [ ] List your technical skills by creating an Array of String values and store it in a variable named `skills`
- [ ] Using "DOM Selection", select the #skills section by id and store it in a variable named `skillsSection`
  - hint: `querySelector` or `getElementById` method
- [ ] Using "DOM Selection", query the `skillsSection` (instead of the entire `document`) to find the `<ul>` element and store it in a variable named `skillsList`
- [ ] Create a `for` loop to iterate over your `skills` Array, starting at index 0
- [ ] Inside the loop, create a new list item (`li`) element and store it in a variable named `skill`
  - hint: `createElement` method
- [ ] On the next line, set the inner text of your `skill` variable to the value of the current Array element
  - hint: access the Array element using bracket notation
- [ ] On the next line, append the `skill` element to the `skillsList` element
  - hint: `appendChild` method
- Save and refresh your browser
  - You should see your list of skills beneath the "Skills" heading

### Final Step:

Check the status of your local repository to double-check the changes you made:

    git status

Stage the file(s) that you edited:

    git add .

Check the status again and notice that the changes from before are now staged:

    git status

Create a commit for the changes you made and add a message describing the changes you made:

> Note: Replace `<message>` with your message

    git commit -m "<message>"

Push your commit to the remote repository (visible in GitHub):

    git push

Check the log to make sure your commit has been published:

    git log --oneline

Create a pull request and submit:

[View instructions](../common/how-to-pull-request.md)

---

Created by [Code the Dream](https://www.codethedream.org)
