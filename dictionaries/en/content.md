# Content

The interface may have nothing, but text, and therefore typography is paramount.

## Text

The main characteristic of any text is whether a human is able to read it, and studies show that a font size of less than 16px significantly narrows the range of those who are. Moreover, not every interface supports increasing font size. Therefore, **min font size is 16px**.

The readability of the text is also significantly affected by the weight of the font. Studies show that consended or thin typefaces are hard to read, especially in applications that may be used in distracting environments (such as GPS navigation). Therefore, **min font weight is 300**.

There can also be too much text on the screen. Studies show that lines of text longer than 80 characters (~640px) or shorter than 40 (~320px) characters are hard to read. Therefore, **max width is 80ch**.

When selecting fonts, you should rely not only on appearance, as studies show that certain typefaces are harder to read. Decorative fonts worsen accessibiity and should'nt be overused. Therefore, **body text should use only serif or sans-serif fontface**.

Even if UI is targeted on one-language audience it can be translated on other languages by users themselves or can become multilingual in the future. Therefore, **only multilingual typefaces should be used**.

Studies show that big amounts of text in all-caps are very hard to read, beacuse they don't have difference between letter heights, and such text also takes attention from surrounding text. **All-caps text should only be used for glanceable text, such as time or main app on-screen statistic, and not for other text**.

Same applies to all-lowercase text. **Only normal case should be used for any text that is meant to be read, not just be noticed**

Underlines provide a strong perceived affordance of clickability, users are likely to be confused and disappointed if underlined text doesn't have an actual affordance to match this perception. Therefore,
**underlined text should only be used for links**.


## Heading

To create a hierarchy in the text, one font size is not enough. It is adviced to use no more than 3 font sizes — small, medium, and large. Those provide enough variety to work with but still keep hierarchical relationships well defined and clear. I would rely on the standard font size and use one and a half or two times the size for titles and other information. Therefore, **heading font size is 32px and subheading font size is 24px**.

Multiple font-weight better communicates text importance rather than using only the font size. It's recommended to stick to two to three font weights instead of multiple sizes. Moreover, skipping a weight between body and heading fonts can help create a scannable and clear design. Therefore, **text font weight is 400/500 and headings font weight is 600/700**.

## Icon

Therefore, **icon container height and width is equal to line height; icon itself size is the same - 4 px**.

MD's approach is untenable because it offers 3 primary colors, not counting the background, foreground and error ones. At a minimum, it is necessary to reduce such diversity, so as not to contradict the simplicity and universality.

HID just provides an array of pretty colors, and basically uses the main brand or OS theme color all the time, as well as some red error color. But, including the high-contrast colorscheme, there are 4 sets of color, and that’s too much in my opinion. Why not we make all colors contrast enough to avoid creating high-contrast theme?

Цвет в дизайн-системе — важнейший инструмент. У каждого цвета свои функции. От них нельзя отступать, чтобы сохранить целостность сайта и помочь пользователям интуитивно определять, какие действия можно совершить с помощью того или иного компонента. Например, перейти по ссылке или исправить ошибку в форме. Цвет также помогает расставлять акценты, выделять важную информацию, обозначать активные и интерактивные элементы.


## Dark mode

## Elevation

MD offers elevation, a way to visually separate elements. HIG does not have this, and thus shows that elevation is not necessary for clear and beautiful interfaces. Therefore, I will not use it either, so as not to contradict simplicity. In addition, the elevation in the light theme is done by shadows, and in the dark theme by colors, which to me contradicts the consistency.

## References

https://w3.org/WAI/tutorials/page-structure/styling
https://nngroup.com/articles/glanceable-fonts
https://accessibility.digital.gov/visual-design/typography
https://practicaltypography.com/monospaced-fonts.html
https://nngroup.com/articles/pairing-typefaces
http://standart.gov.design/design/typography
https://www.nngroup.com/articles/visual-hierarchy-ux-definition
https://www.nngroup.com/articles/pairing-typefaces/
https://buninux.com/learn/typography-sizing
https://www.uxtoast.com/design-tips/5-tips-for-perfect-typography
http://standart.gov.design/design/color