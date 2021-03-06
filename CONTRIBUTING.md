# Contributing to PatternFly Ng

We would love for you to contribute to PatternFly-ng and help make it even better than it is
today!  Below is information on how to get started as a contributor to PatternFly-ng.

 - [Code of Conduct](#coc)
 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Building the Code](#coding)
 - [Git Commit Guidelines](#commits)
 - [Becoming a Maintainer](#maintainer)

## <a name="coc"></a> Code of Conduct
An open community is important to us, please help us maintain that by following our [Code of Conduct][coc].

## <a name="question"></a> Do you have a question?
There are a few things that can be done to resolve any questions or problems you might have.
 - Search our [GitHub issues][github-issues]
 - Join our patternfly-ng channel on [Slack](http://slack.patternfly.org)
 - Join our mailing-list following the instructions on [patternfly.org](http://www.patternfly.org/community/)

## <a name="issue"></a> Found a bug or issue?
Please help us out if you find a bug by submitting an issue to our [GitHub Repository][github-issues].
We also welcome [PR's][github-pr] if you'd like to submit a fix.

## <a name="submit"></a> Submission guidelines
Any PatternFly-ng patterns submitted for contribution will be reviewed by designers on this repo associated with the PatternFly project to ensure that contributions match the PatternFly design standards for each component. This design review is used to make sure that it meets one of the following criteria:

- Matches the "gold standard" design specifications as designed by PatternFly
- Matches the design specifications provided for a certain project and has been made general enough to work for other projects
- Goes through a design review and subsequent matching design documentation issues are created for PatternFly to match this contributionv

The following should be included in all PR's:
 - A clear commit message describing what has been done
 - A reference to the [issue][github-issues] being addressed (whether it's a bug being fixed or a new component being added, a GitHub issue should be added to track it).
 - A unit test covering the included behavior
 - Documentation:
   - Add a new examples folder within the component folder if it doesn't already exist
   - Add an example component following the style of one of the existing components.  
   - Examples should include a working sample including the ability to toggle configuration values to demonstrate the full functionality of a component
   - Links to the example code and generated typedoc documenation should be included following the example below
 ``` html
 <div>
   <tabset>
     <tab heading="api">
       <iframe class="demoframe" src="docs/classes/listviewcomponent.html"></iframe>
     </tab>
     <tab heading="html">
       <include-content src="/src/app/list-view/examples/list-view-basic-example.component.html"></include-content>
     </tab>
     <tab heading="typescript">
       <include-content src="/src/app/list-view/examples/list-view-basic-example.component.ts"></include-content>
     </tab>
   </tabset>
 </div>
 ```

## <a name="rules"></a> Our coding guidelines
We follow the [Angular style guide](https://angular.io/guide/styleguide) for all Angular code.  Most general questions about how things should be named, where files should live and overall file structure can be answered by reviewing those guidelines.

PatternFly also has coding guidelines that we endeavour to follow that impact HTML and CSS.  These are found at [codeguide.patternfly.org](http://codeguide.patternfly.org/).

## <a name="coding"></a> Working with the code
PatternFly-ng uses npm, webpack and gulp.  With the exception of node.js, all dependencies should be present in the package.json file.

##### Setting up the environment for the first time:
 - Install Node.js - Find more information on [Node.js](https://nodejs.org/en/)  
   PatternFly-ng stays up to date with the Node LTS Release Schedule. We suggest the use of an actively supported version of Node/NPM, although prior versions of Node may work.

 - Clone patternfly-ng from github   
   git clone https://github.com/patternfly/patternfly-ng
   
 - Within the patternfly-ng directory, run:   
   npm install
   
##### The following commands will help you work with the code:  
 - npm run start:demo (runs a live demo on http://localhost:8001)
 - npm run build - run this before you submit a PR to make sure all tests pass
 - npm run test - run the karma tests
 - npm run reinstall - this clears your npm packages and installs them fresh

##### The following commands will help you run the demo via RawGit:
- If you are developing PatternFly-ng and would like to provide a link to the demo from your fork, TravisCI can be configured to create a copy of your branch with the dist files generated for you. No code changes are necessary to enable this, all that is needed is to login to [TravisCI](https://travis-ci.org/) and configure it to point at your PatternFly-ng fork. The first three steps at their [Getting Started page](https://docs.travis-ci.com/user/for-beginners) provide instructions on how to do this. However, we've also provided step-by-step instructions below.

1. Generate a Github personal access token
   * You can do this by going to your Github profile -> Settings -> **Personal access tokens**
   * Select the **"Generate New Token"** button
   * Description: "patternfly-ng"
   * Scopes: Check the **"public_repo"** option
   * Hit generate to generate the token
2. Enable Travis builds
   * Visit `https://travis-ci.org/<github username>/patternfly-ng`
   * Hit **"More options"** dropdown and select **"Settings"**
   * Under **General**, set "Build branch updates" and "Build pull request updates" to **ON**
   * Under **Environment Variables**, add a variable with name **AUTH_TOKEN** and value the token generated from Step 1.
   * Set Display value in build log to **OFF**
3. Push your feature branch to your fork
   * Now that Travis builds are enabled, you will automatically see a Travis build triggered in your Travis build history after each branch push.
   * If the build is successful, you will automatically see a `-dist` branch created in your fork. (i.e.: `branch-dist`) which contains all compiled assets
4. Copy your test page url to share in your pull request
   * Rawgit will now serve the test pages for your feature branch at the following url:
      * `https://rawgit.com/<github username>/patternfly-ng/<branch>-dist/dist-demo/`  

##### The following commands will help you test AOT compilation:
The demo app uses an AOT webpack plugin to test compilation, which is also run during Travis builds. However, if you still need to test manually, please follow these steps.

 - npm run build - build patternfly-ng   
   cp package.json dist

 - Follow the PatternFly-ng get started instructions to create an Angular-cli application   
   npm install &lt;path to patternfly-ng&gt;/dist   
   ng build --prod

## <a name="commits"></a> Git Commit Guidelines

PatternFly-ng uses a semantic release process to automate package publishing, based on the following commit message format.

Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject** ([full explanation](https://github.com/stevemao/conventional-changelog-angular/blob/master/convention.md)):

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

##### Patch Release

```
fix(pencil): stop graphite breaking when too much pressure applied
```

##### Feature Release

```
feat(pencil): add 'graphiteWidth' option
```

##### Breaking Release

```
perf(pencil): remove graphiteWidth option
```

## <a name="maintainer"></a> Becoming a Maintainer

The documentation for becoming a maintainer has been taken from [Foreman](https://theforeman.org/handbook.html#Becomingamaintainer) and adapted for the PatternFly project.

As a maintainer, it is your responsibility to help manage and maintain the health of the PatternFly project.  A PatternFly maintainer has commit permissions to one or more of the repositories under the [PatternFly organization](https://github.com/patternfly). To see a list of maintainers to the PatternFly project, view the [PatternFly GitHub Teams](https://github.com/orgs/patternfly/teams) page.

Maintainers are members of the PatternFly community who exhibit most of the following behaviors:

- Review and merge code and documentation.
- Help triaging bugs and testing pull requests.
- Make well formed pull requests.
- Have a sense of duty about the project.
- Play well with others, are respectful, show gratitude.

If you want to become a maintainer, we expect you to:

- Review and test pull requests submitted by others.
- Encourage and ensure design remains an integral part of the review process and pull in designers for review as needed (you can leverage [@patternfly/patternfly-ng-ux](https://github.com/orgs/patternfly/teams/patternfly-ng-ux) if there is no known associated designer).
- Maintain sustained activity versus sporadic.
- Support users and other developers on the PatternFly slack channels and mailing list.

Other things that are nice to do:

- Participate in (or even initiate) real-world events such as user/developer meetups, papers/talks at conferences, etc.

### How do I become a maintainer?

One person has to nominate you to the group of existing maintainers. The person who nominates you has to:

- Submit ten examples that prove this person behaves like a maintainer.
- Explain how the nominee is involved in the community and cares about the future of the project

This nomination is public and should be sent to the PatternFly mailing list. After the nomination is submitted, two other maintainers have to second the nomination. If no one objects in one week, the nomination is accepted.

Such objections may happen in public on the nomination e-mail thread. However, not everyone is comfortable giving objections publicly. Therefore, it is acceptable for other maintainers to raise their concerns with the sponsor and/or other maintainers privately if they wish to do so. The sponsor is expected to update the nomination e-mail thread to show that it is on hold pending private concerns.

Regardless, while objections are discussed either in private or public, the nomination is on hold until the objections are resolved or the nomination is rejected. In the event of a failed nomination, the sponsor (as part of the discussing group) will know the grounds for the rejection, and can pass along constructive feedback to the candidate. Care should be taken to do this sensitively.

### How do I lose maintainers status?

The maintainers team will be reevaluated periodically to ensure it remains up to date. If you are inactive in the community for six months, we will remove you from the maintainers list and revoke your permission, but we will make a mention of you on a list of previous maintainers. In the event that a maintainer continues to disregard good citizenship (or actively disrupts the project), we may need to revoke that person’s status.

The process for revoking someone's maintainer status is a discussion limited to the maintainer team given the sensitive nature of this conversation. The maintainer being discussed should be made aware of the reasons their membership is being discussed and why. It may be that this person simply does not have time and agrees to opt out of this role without any further discussion. If more is required, the process is similar to a nomination. A member should suggest the revocation with a good reason, two people second the motion, and a vote may be called if consensus cannot be reached. Someone from the maintainer team is required to follow up with the person being removed to update them and pass along constructive feedback. Again, care should be taken to do this sensitively.  

### Quick tips for new maintainers

- If something you merged broke something, it’s your responsibility to resolve or coordinate how to resolve the issue.
- Do not merge your own commits
- Do not merge commits blindly. If you do not fully understand a pull request, ask existing maintainers to take a look
- Do not merge if the build is failing. Wait until tests are green to merge.

[coc]: https://github.com/patternfly/patternfly/blob/master/CODE_OF_CONDUCT.md
[github]: https://github.com/patternfly/patternfly-ng/
[github-issues]: https://github.com/patternfly/patternfly-ng/issues
[github-pr]: https://github.com/patternfly/patternfly-ng/pulls
