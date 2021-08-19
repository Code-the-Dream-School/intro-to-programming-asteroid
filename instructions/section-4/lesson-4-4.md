[< Back to Overview](../../README.md)

# Lesson 4.4: CSS Basics

This assignment will teach you the following:

- Getting Started With CSS
- Basic Selectors
- Understanding Values and Units
- Fundamental Concepts

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

    git checkout -b lesson-4-4

Now, open the project directory in your code editor and continue to the next section.

### Task List:

#### Create and Load Stylesheet

- [ ] Create a folder called `css/`
- [ ] Inside that folder, create a Cascading Style Sheets (CSS) file called `index.css`
- [ ] Open your `index.html` file
- [ ] Before the closing `</head>` tag, insert a `<link>` element with a `rel` attribute of "stylesheet" and an `href` attribute that specifies the relative path to your CSS file (i.e. `css/index.css`)
- [ ] Save and open in your browser

#### Write CSS

For this assignment, there are some general requirements but the design is up to you! This is your chance to be creative and transform your webpage into a reflection of who you are.

- [ ] Change the background color of the page body
- [ ] Change the default text color
- [ ] Customize the font family
  - (Optional) Load in a font family from [Google Fonts](https://fonts.google.com/)
- [ ] Add spacing (padding/margin) between sections
- [ ] Change the font size, weight, and color of all headings
- [ ] Transform the "Experience" list items into styled blocks
- [ ] Transform the "Skills" list items into styled blocks
- [ ] Style the "Leave a Message" form elements
  - Change font size and color of labels
  - Change font size, padding, border, etc. of inputs and textarea
  - Add spacing (padding/margin) between form fields
  - Change padding, background color, border, etc. of submit button
- [ ] Transform the "Messages" list items into styled blocks and customize the button(s)
- [ ] Change the spacing and background color of the footer
- [ ] Use Media Queries to make sure the webpage is responsive for all device sizes (mobile, tablet, desktop, etc.)

This is the basic rubric, but we encourage you to think beyond this list and come up with your own ideas to make your webpage unique!

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
