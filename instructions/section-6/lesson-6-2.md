[< Back to Overview](../../README.md)

# Lesson 6.2: Working with Fetch API

This assignment will teach you the following:

- What is the Fetch API?
- Write a Basic Fetch Request
- Displaying the Content
- Create a Reusable Fetch Function
- Handling Errors
- Manage Multiple Requests with Promise.all
- Posting Data with fetch

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

    git checkout -b lesson-6-2

Now, open the project directory in your code editor and continue to the next section.

### Task List:

- [ ] Open your `index.js` file, starting below the code from the previous lesson
- [ ] Using the Fetch API, create a "GET" request to the same GitHub API url as before
  - [ ] hint: the `fetch` function
  - [ ] hint: "GET" is the default method for `fetch`
- [ ] Chain a `then` method to your `fetch` call and pass it a function that returns the response JSON data
- [ ] Chain another `then` method and pass it a function, inside of which you can paste the code from your previous "load" event listener function
- [ ] Delete the `XmlHttpRequest` code from the previous lesson, including the event listener
- [ ] Save and refresh your browser
  - You should see the same list of repositories displayed on your webpage

#### Stretch Goals

These tasks are **entirely optional**, but if you'd like a challenge then do your best to complete each item.

- [ ] (Optional) Chain a `catch()` function to your `fetch` call to handle errors from the server

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
