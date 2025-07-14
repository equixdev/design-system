# Grouping

## Structure

**Layout** - whole page container that holds views, panels, etc

- **Bar** - small vertical or horizontal and sometimes fixed container of contents and controls placed near the edge of the view
- **View** - container with bars, controls and contents
  - **Box** - interactive or non-interactive element consisting of content, i.e. button, input etc
    - **Content** - simple element such as text, icon, image

**Navigation** - all what the user can do to move through different sections of the app without modifying any data

**Action** - all what the user can do, which is not navigation and which is represented by the content in the control

HIG divides elements into 3 clear categories - controls, bars, views, and I will stick to this terminology and expand it. By controls I mean buttons, input boxes and any other interactive components consisting of simple elements. Bars - panels, menus, and other components that are limited in size and consist of uniform controls. Views - pages or their fragments, unlimited in size and consisting of bars and controls.

## Sizing and spacing

Design systems for some reason usually give no recommendations about spacing elements.
Spacing should be based on the size of the elements. According to researches, minimum tap target is around 42px; MD advices 48px, HID - 44px. To preserve versatility, I’ll reduce this number, since 48px tap target is great on mobile but often way too much for desktop mouse cursor. There are rules:
Any clickable element should be minimum 40x40px, than assumes 24x24px content (width may vary significantly) with 8px padding
Any small inner content such as icon or text should be 16px away from edge of screen, so
Such content or it’s parent container should have 8px padding
Any Bar or View touching edge of screen must have 8px padding
Each children container can have padding and gap of same or lesser size;
Any component or container touching the parent view’s padding from the edge of the screen should have 8px padding to preserve 16px distance of content (text, icon etc) from edge of the screen.

# Layout

Система колонок адаптируется под 4 типа устройств: десктоп, планшет, смартфон и смартфон с маленьким экраном. Для каждого устройства выбран свой диапазон ширины экрана, в рамках которого сетка имеет заданные параметры: количество колонок, их ширину, расстояния между колонками и ширину поля. При переходе границы диапазона ширин (что чаще всего означает смену устройства), эти параметры изменяются.
При изменении ширины экрана в рамках одного диапазона, сначала увеличивается ширина колонок, а поля и отступы остаются фиксированными. Когда колонки достигают максимальной ширины для данного диапазона, начинают увеличиваться поля, а контент центрируется.
Каждый компонент занимает целое число колонок, а отступы между компонентами такие же, как между колонками. При изменении количества колонок макет также перестраивается.
Блоки могут занимать разное количество колонок, в зависимости от условий конкретной страницы. Некоторые колонки могут оставаться пустыми.
Горизонтальные линейки, идущие через каждые 4px от правого до левого края, одинаковые на всех устройствах и размерах экрана.
Базовые линии задают минимальный шаг в системе, которому кратны все остальные размеры. Благодаря этому все компоненты занимают целое число линий, их удобно выравнивать. Создавая новые компоненты или добавляя на страницу фотографии, важно следить, чтобы их высота также была кратной 4px.
Базовые линии и колонки не связаны, благодаря чему при увеличении ширины экрана компоненты не увеличиваются пропорционально, значительно увеличивая длину страницы, а растягиваются по ширине.
Горизонтальные линейки, идущие через каждые 4px от правого до левого края, одинаковые на всех устройствах и размерах экрана.
Базовые линии задают минимальный шаг в системе, которому кратны все остальные размеры. Благодаря этому все компоненты занимают целое число линий, их удобно выравнивать. Создавая новые компоненты или добавляя на страницу фотографии, важно следить, чтобы их высота также была кратной 4px.
Базовые линии и колонки не связаны, благодаря чему при увеличении ширины экрана компоненты не увеличиваются пропорционально, значительно увеличивая длину страницы, а растягиваются по ширине.
Визуальная компенсация
Не стоит во всём полагаться на сетку. Математически точно расставленные элементы могут смотреться неровно, поэтому некоторые компоненты необходимо визуально компенсировать.

Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
Always place content within columns, not gutters.

## References

https://baymard.com/blog/line-length-readability
http://standart.gov.design/design/layout
https://www.nngroup.com/articles/using-grids-in-interface-designs/
https://uxmovement.com/mobile/optimal-size-and-spacing-for-mobile-buttons/
