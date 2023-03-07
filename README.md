# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot


### Links

- Solution URL: [Solution URL](https://github.com/29nikita/advice-generator-app)
- Live Site URL: [Live Site URL](https://nikita-advice-generator-app.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Angular](https://angular.io) - JS library


### What I learned

I have learnt how to work with an external API by reading angular docs and API docs. How to make a request to external API server and get the response.

```html
<section class="main-div">
    <p class="advice-num">ADVICE #{{response.slip.id}}</p>
    <p class="advice" title="{{response.slip.advice}}">"{{response.slip.advice}}"</p>
</section>
```
```js
onClickRandomAdviceGenerator() {
    this.appService.getRandomAdvice().subscribe((data) => {
      this.response = data;
    })
}
```

### Continued development

I will continue to learn how to make a request and work with external APIs. Also, how to make your own API and how to work with that. This is still the concept that i'm not comfortable with.


## Author

- Website - [Advice Generator App](https://nikita-advice-generator-app.netlify.app/)
- Frontend Mentor - [@29Nikita](https://www.frontendmentor.io/profile/29Nikita)
