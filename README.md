# Basic CSS Exercises
[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#results)


## Exercise: CSS Selectors 1

**Instructions**:
1. Select all h3 elements and change the elements' color to blue.
2. Select list items 3-5 in task 2 using classes. Change the elements' color to red.
3. Select the sibling of the first image using a combinator. Give the image a border.
4. Select the link ending in .com with an attribute selector. Give it a yellow background color.
5. Give "Task 5" (_this_) list item an id and change the color of the text.

![alt-text](/image/reference-image.png "Reference Image")

[//]: # (autograding info start)
## Results


### UIB image-content

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Index file should contain appropriate meta tags |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Index file Should contain a title tag that is not empty |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | All H3 elements should be set to the color blue |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Task5(this) item Should be assigned an 'Id' and its color should be changed |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | Images should be selected using a 'combinator' and given a border |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | The link ending with '.com' should be given a background-color of yellow |



[Results Details](https://github.com/DigitalCareerInstitute/UIB-content-select_the_image/actions)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/UIB-content-select_the_image/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)