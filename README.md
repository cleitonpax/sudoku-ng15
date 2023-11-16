# Solving the board: Enhancing Sudoku Game Performance with chatGPT + Python
My friend had developed a Sudoku game using Angular, but was sad about the loading time of the game board. He approached me and asked, "Garuso, can you create an API service to calculate the board faster?

"Sure," I replied, "I've been dying to try ChatGPT's to convert a function code from one language to another, and this seems like the perfect opportunity. But could you help us with this? I mean, it's not like you can solve all the problems, right?"

I asked ChatGPT, "Can you convert this function in Angular to Python?"

To which it replied, "This is very similar to a Sudoku game. Here is an example of how to create a Sudoku game in Python."

The first solution suggested by the AI worked, but the generated board was invalid. I decided to ask again with a new request, "Can you add a validation to the code to ensure that all generated games are valid?".

However, even after adding the validation, the game board was still taking a long time to respond. I asked ChatGPT, "Is there any way to improve the code's performance?"

It was recommended that I use a backtracking validation approach, and I followed the code with these improvements. While this solution was effective, it returned the same Sudoku board game every time.

After several improvements, I discovered an error in the code: the solution was right, but each new game only differed in difficulty level, while the board solution remained the same. "It's like déjà vu all over again".

I decided to use NumPy, a package with focus on multidimensional array processing, to improve the code. "Well, let's bring in the big guns.This code is about to get a serious upgrade."

Finally, after the last improvement with ChatGPT, we were able to solve all the problems. My friend was happy with the API that AI helped create, and the game is now loading much faster.

So, let's [play](https://gamming-sudoku-angular.web.app/game) a Sudoku?

Thanks Cleiton Schönardie for the challenge and the nice UI.

Try the [API](https://github.com/garusocruz/hangman-game/tree/main/app/domains/sudoku#readme) repository.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
