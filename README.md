# P465-565Group11
Repository for our tour management system

### Contributing Guideline

When you start working on a Task

Pick an issue assigned from the JIRA list. If the issue that you are going to work on does not exist in the list, Add it with a small description.
Checkout the repo.
For example:

```
git clone https://github.com/airavata-courses/CAPtivate.git
cd CAPtivate
```

Create a branch with the following naming convention depending on the type of your task

```
feature/<short-description>
fix/<short-description>
refactor/<short-description>
doc/<short-description>
```

For example :

```
git checkout -b feature/support-user-login
```

Make required changes in the code, do commits.
Push the new branch into remote.
For example :

```
git push origin feature/support-user-login
```

Create a Github pull request for the newly pushed branch with appropriate title and description and add label WIP.

When you finish the task make sure your change works and will not break master build. 

Remove the WIP label and assign a couple of team members to review the code. This can ensure good code quality. Reviewers will review the PR and add comments if changes are required. Repeat this till the PR is approved. The PR can be merged once it is approved and the task should be moved to done state.
