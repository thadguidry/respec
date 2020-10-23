> Implementing cross references and general improvements in ReSpec

## Personal Details

**Name:** Sudhanshu Vishnoi (alias: Sid Vishnoi)

**Email:** [sidvishnoi8@gmail.com](mailto:sidvishnoi8@gmail.com)

**IRC nick:** sid-vishnoi

**Telephone:** NOT_PUBLIC

**Other contact methods:**

- **Slack:** [sidvishnoi8@gmail.com](mailto:sidvishnoi8@gmail.com)
- **Twitter:** [https://twitter.com/sid_vishnoi](https://twitter.com/sid_vishnoi)

**Country of Residence:** India

**Timezone:** Asia/Kolkata (+0530)

**Primary Language:** English

## Project Proposal

This is a project to implement new features, fix some existing issues and improve maintainability of the ReSpec project. 

The main task I intend to work on is to implement a cross references feature. It includes creating a web service that integrates with ReSpec and expands the existing reference system to allow references across specifications. This task will require some investigation first as to how we can leverage the CSSWG’s [Shepherd API](https://api.csswg.org/shepherd/) and its database. The web service may also require creating a custom datastore that allows efficient search for multiple keywords. A historical desire for this feature may be seen in the [w3.org mailing list](http://lists.w3.org/Archives/Public/spec-prod/2012JulSep/thread.html#msg15).

There are some general improvements that I would like to work upon, like implementing automatic linking of pluralized words in the spec ([#1351](https://github.com/w3c/respec/issues/1351)) and auto-normalizing references.

I would also like to work on some of the issues that might come up during the summer.

## Schedule of Deliverables

During the community bonding period, I intend to work on some smaller tasks while getting familiar with the working of ReSpec. Also, I’ll get in touch with community members, specially with [Peter Linss](https://github.com/plinss), who might be helpful in integration with the Shepherd database.

During the coding period in May (around 6-10 days), I will work on issue [#1351](https://github.com/w3c/respec/issues/1351) (automatic pluralization).

I’ll spend first week of June to work on auto-normalization of references. 

I’ll use rest of the coding period in analysing and implementing the cross-references feature in ReSpec. I’m giving quite a time to this task as this is a new/complex feature that requires quite a lot of analysis. The implementation is also expected to be challenging. The analysis part would have already started in bonding period.

During the Phase-2 review, I will provide the analysis, requirements and general design for this task. The code will be fully implemented in, hopefully, 20 days, with multiple iterations to improve and test it. This is dependent on reviewer availability, etc.  

All new code that I write will be documented and tests will be written for the same. The workflow I will follow will be - analyse, implement, test and document. I’ll keep a few days of gap between tasks to handle any unprecedented schedule delays or other issues. The reports and codes will be submitted on time as and when required. 

**Availability**: I plan to give the project 30 hours per week, as stipulated by the GSoC rules. As my last semester in college will start in the beginning of July, I might have to cut short a few hours then. Also, I’ll have my college exams in mid May. I will work out scheduling with the project mentor when needed.

## Open Source Development Experience

In open source development, I’ve more experience in creating my own projects rather than contributing to existing projects. Although I’ve reported issues in several projects, like:

* [github.com/axiros/terminal_markdown_viewer/issues/39](https://github.com/axiros/terminal_markdown_viewer/issues/39) (Bug)

* [github.com/smashingmagazine/redesign/issues/183](https://github.com/smashingmagazine/redesign/issues/183) (Design Bug)

* [github.com/jprichardson/node-fs-extra/issues/456](https://github.com/jprichardson/node-fs-extra/issues/456) (Documentation)

I came across ReSpec through GSoC, and now I really like this project. I’m taking a lot of [interest](https://github.com/search?utf8=%E2%9C%93&q=author%3Asidvishnoi+repo%3Aw3c%2Frespec&type=Issues) in it and have been reading its code to come up with possible solutions to the present issues. I'm really excited to contribute to a widely used tool in the developer community and I would love to be able to say I worked on ReSpec.

## Work/Internship Experience

* I’ve developed a Chrome extension that won Facebook Developer Community Challenge. The extension is about merging Facebook developer circle groups’ feeds according to keywords of user’s interest. ([Devpost](https://devpost.com/software/fb-dev-interest), [Source Code](https://github.com/sidvishnoi/fb-dev-interest))

* I’ve recently developed (and deployed) a website for the technical fest of our college using modern web technology stack. ([Source](https://github.com/sidvishnoi/sankalan-2018), [Website](https://www.ducs.in/sankalan/)). A particular [piece of code](https://github.com/sidvishnoi/sankalan-2018/blob/master/src/js/canvas.js) I am really proud to show is for the canvas based background animation on the website.

* Apart from that, I’ve made a static website generator (SSG) that aims at reducing build time. It does so by building only what needs to be built, unlike other SSGs which build entire site from scratch. It only rebuilds updated files and takes into account the dependencies between different parts of a website. The software is functional and I’ve been using it on my [website](http://www.hoopsvilla.com/). I plan to release the project in open source after rewriting it to support better maintainability. The present source code is available on [Gitlab](https://gitlab.com/sidvishnoi/bleu).

* The source codes of all my other projects are available on my [Github](https://github.com/sidvishnoi)/[Gitlab](https://gitlab.com/users/sidvishnoi/projects) pages. 

The above tells that I’ve enough experience with javascript, browsers, back-end and the modern developer tools to take on the challenges that I will run into while contributing to ReSpec.

## Academic Experience

I’m pursuing my Masters in Computer Applications (MCA) degree at University of Delhi. Here, I've learned to analyse problems and not rush for the solution. My degree continuously keeps me in touch with core computer science subjects and helps in understanding the underlying concepts. So far, data structures & algorithms, networking, compiler design and software design are some of the subjects that I’ve studied whose knowledge will be useful in development of ReSpec. Given my experience with web technologies and the understanding of core concepts, I believe I am a suitable candidate for ReSpec.

## Why Me

I am a self-taught web developer. I learn quickly and like to learn a lot! I act professionally and take my work seriously. I'm good at working in a team. I have the necessary programming skills and I’m familiar with coding standards and developer tools. I’ve already started work upon some existing smaller issues to understand the working and usage of the project like highlighting variables in algorithms ([#1529](https://github.com/w3c/respec/issues/1529)), adding a dynamic caniuse integration ([#1238](https://github.com/w3c/respec/issues/1238)) and adding support for former editors ([#1097](https://github.com/w3c/respec/issues/1097)). I’ve made a static site generator using NodeJS, which I can relate to ReSpec, although they use different approaches to render HTML. I have experience with file manipulations in C++ which will be useful in creating an efficient datastore for the cross-reference web service, if required. I will not mind working in late night if timezones come up to be an issue.

## Why Mozilla

Mozilla is one of the most prominent advocates of open-source development. I really appreciate Mozilla’s commitment to the community and the work it has been doing to empower the people worldwide shape the modern Internet - an Internet that is open and accessible to all. I truly align with Mozilla's belief of promoting acts of human collaboration across an open platform that contributes to individual growth and the collective future. To me, open source is collaboration, innovation and the best way to learn how to code. Mozilla, with their programmes like Global Sprint and material like MDN web docs, exude these very values. As a self-taught developer, Mozilla has been a boon for me and I believe that it would continue to do so in GSoC as well.