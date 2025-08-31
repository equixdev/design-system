# Interactive Components

Since we are developing primarily for the web, it is worth starting with the implementation of all the interactive elements of html, considering the multifunctionality of `<input>`:

1. `<a>`
2. `<audio>`
3. `<button>`
4. `<details>`
5. img
6. `<select>`
7. `<textarea>`
8. `<video>`
9. `<input type="checkbox">`
10. `<input type="color">`
11. `<input type="date">`
12. `<input type="email">`
13. `<input type="file">`
14. `<input type="number">`
15. `<input type="password">`
16. `<input type="radio">`
17. `<input type="range">`
18. `<input type="reset">`
19. `<input type="search">`
20. `<input type="tel">`
21. `<input type="text">`
22. `<input type="time">`
23. `<input type="url">`
24. `<input type="submit">`
25. ~~`<input type="datetime-local">`~~
26. ~~`<input type="week">`~~
27. ~~`<input type="button">`~~
28. ~~`<input type="hidden">`~~
29. ~~`<input type="image">`~~
30. ~~`<input type="month">`~~

## Link

A component can have many interactive elements, often, to indicate interactivity it is enough to leave only one element colored, leaving the others black and white.

Don't make links consisting of 1-2 words like "click here"
Do meaningful long link labels
Because users want to clearly know where they will be taken if they click on link

Don't put links in the text
Do put a list of links from the page at the end so that the user goes to them after reading the page
Because user might be distracted from the main text and won't finish reading the page

## Button

### MD

![](../../res/button.jpg)

There is a digression to be made here. I think the hovered state is meaningless because on touch devices it happens at the same time as focused or pressed. Platform-unique states contradict versatility. The pressed state is also meaningless because it is often invisible (pressing a button changes the interface and the button itself disappears) and does not notify you if something happened after you pressed it. So does the disabled state. MD offers 5 states and 5 button styles (not counting icon versions). So many contradict simplicity, clarity and consistency. Besides, button with so big border radius and padding won’t fit everywhere and therefore contradicts versatility. And finally, font size of 14px contradicts accessibility.

### HIG

### FD

3 states - default, loading and focused, and 3 styles - primary, secondary, default - are enough.
Also, my approach to colors allows me not to create separate versions for the dark theme, as outline colors change globally. Usage rules are:
Buttons shouldn’t be rendered conditionally, instead, show them in disabled state to not contradict user control, clarity and simplicity principles. The only case button should be hidden completely is for a security sake.
Buttons after clicking on them must provide a loading indicator or change state if there are no visible and obvious changes in the view.
Primary button must be used once in a view to avoid confusing the user. If page offers no main Call To Action, it shouldn’t be used at all.
Secondary buttons can be used several at a time only in one container with a filled one, to offer alternative, but not main actions in a consistently-looking way. Apart from primary button secondary ones shouldn’t be used.
Default-styled buttons must be used in all other cases.
Primary and secondary buttons can’t be used without text label, default ones can be icon-only, but that’s strongly discouraged to not contradict clarity.

Left-align buttons



### FAB

![](../../res/fab.jpg)

### MD

You may have seen this thing before - it's called Floating Action Button. Its' version without the label will not be considered, because its hard to understand and therefore contradicts clarity. Both versions are redundant, because you can fix the position of the usual button at the bottom of the page or on the bottom action bar on the left, right or in the center, as advised by MD.

## Chip / toggle



## Text

1. Container should be outlined, not underlined nor filled with color
1. The size of the container should be proportional to the expected user input
1. Leading, trailing icon (voice, passwd)
1. Label, error, info, warn or success
1. Placeholder, input format, mask, prefix, postfix



## Search



## Number

## Color

## Date

## Time

## File

## Range

### Slider

MD offers plain sliders, but they are too small and in slider with steps steps themselves are barely noticeable, so I would change appearance.

HID offers more slick appearance and variant with icons on sides. This variant is somewhat easier to understand, but looks not quite consistant and is not that widespread - MD doesn’t offers that, so I would exclude such variant

### Stepper

## Checkbox

## Radio

## Switch

Switches are used for 2 purposes:

1. Toggle something on or off (e.g. option in settings)
2. Toggle between 2 states (e.g. light and dark theme)

This leads to some inconsistency, and in general, I see no use in switches, because in first case they can be replaced with single checkbox, because it comes from real-life paper documents and therefore much more comprehensible and simple, and in second case with segmented button, because it is extensible - e.g. imagine you added third colorscheme.

## Accordion

## References

https://developer.mozilla.org/en-US/docs/Web/HTML/Element
https://nngroup.com/articles/writing-links
https://nngroup.com/articles/accessible-design-for-users-with-disabilities
https://nngroup.com/articles/guidelines-for-visualizing-links
https://www.nngroup.com/articles/accordion-icons/?lm=sticky-headers&pt=article
https://www.nngroup.com/articles/toggle-switch-guidelines
https://www.nngroup.com/articles/listbox-dropdown
https://www.nngroup.com/articles/search-not-enough
https://uxdesign.cc/ux-for-search-101%EF%B8%8F-2ab4b2f2384d
https://uxplanet.org/the-anatomy-of-input-field-c3ef863e01d7
https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03
https://uxmovement.com/forms/why-you-shouldnt-use-solid-or-underlined-text-fields
https://www.nngroup.com/articles/state-switch-buttons
https://www.lukew.com/ff/entry.asp?571
https://uxdesign.cc/why-you-shouldnt-include-disabled-interaction-elements-in-your-design-system-76a2d4307faf
https://raylinaquino.com/ux-tips/ux-tips-09-more-minimalism-avoiding-borders-and-clear-color
https://www.nngroup.com/articles/clickable-elements/