[< Back to Overview](../../README.md)

# Lesson 3.1: How the Web Works

This assignment will teach you the following:

- How the Web Works
- URLs
- Domain Names
- IP addresses
- The Domain Name System
- HTTP and HTTPS

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

    git checkout -b lesson-3-1

Now, open the project directory in your code editor and continue to the next section.

### Task List:

- [ ] Open your `index.html` file

- [ ] Add the phrase "About"
- [ ] Below that, write a paragraph about yourself
- [ ] Add the phrase "Experience"
- [ ] Below that, write a list of places you've worked or projects you've worked on
- [ ] Add the phrase "Connect"
- [ ] Below that, paste links to your email, GitHub, social media, etc.

- [ ] Copy the file path to your `index.html` file
- [ ] Paste the path in your web browser and you should see all the text you just wrote

Next week we will learn how to structure this content!

### Final Step:

Check the status of your local repository to double-check the changes you made:

    git status

Stage the file(s) that you edited:

    git add .

Check the status again and notice that the changes from before are now staged:

    git status

Create a commit for the changes you made and add a message describing the changes you made:

> Note: Replace `<message>` with your message (example - "added info in index.html file")

    git commit -m "<message>"

Push your commit to the remote repository (visible in GitHub):

    git push

Check the log to make sure your commit has been published:

    git log --oneline

Create a pull request and submit:

[View instructions](../common/how-to-pull-request.md)

---

Created by [Code the Dream](https://www.codethedream.org)
