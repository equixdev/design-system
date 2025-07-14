# Introduction

## Definition

_Design system_ is a complete set of standards intended to manage design at scale using reusable components and patterns.

_User experience (UX)_ encompasses all aspects of the end-user's interaction with the company, its services, and its products.

_Developer Experience (DX)_ is the equivalent of User Experience when the primary user of the product is a developer.

## Problem

For some reason, there is no design system that focuses primarily on UX rather than UI beauty. _EQUIX (EQually UI and UX)_ design system is created to solve this problem.

## Solution

EQUIX:

1. Cares about UX and DX and provides the most optimal solutions to typical tasks and their documentation, as well as carefully developed approaches based on researches and case studies;
2. Сovers all phases of development from visualization to deployment of the product;
3. Allows to create interfaces for all major platforms - Android, IOS, Windows, Linux, MacOS, IpadOS;
4. Includes template solutions for all major types of applications - Website (Landing), Online Store, News Portal (Blog), Admin (Database manager);
5. Uses latest technologies to ensure high speed, functionality and fault tolerance of applications;

## Existing solutions

Two most common design systems, _Google's Material Design (MD)_ and Apple's _Human Interface Guidelines (HIG)_, struggle with different problems for a while. MD is ugly to many of users, and, moveover, the direction of it's development contradicts to the UI/UX principles. HIG may look more attractive but contains even more inconsistency and bad decisions. The choice of other modern and freely distributed UI-kits is very narrow, and represented mainly by frameworks Bootstrap, Ant Design etc. Their main problem is that they are too stylized, not enough barebones, and therefore non-universal and difficult to develop something unique and nice-looking on their basis.

## Technical stack

EQUIX is based on:

1. [Material Design](https://material.io/) ideas, as the most widespread design system
2. [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines) ideas, for the same reason
3. [Tailwindcss (TW)](https://tailwindcss.com) values, reduced for simplicity and consistency, because this CSS utility framework allows to create interfaces the fastest way and has extremely well chosen defaults
4. [Bootstrap icons](https://https://icons.getbootstrap.com/), because they aren't as bold and somewhat cumbersome as MD icons, and more complete and consistent than other non-proprietary icon sets
5. [NN/Group](https://nngroup.com) and other studies and researches sources

## General principles

Принципы:

1. Потребности пользователей на первом месте
2. В основе всех решений лежат исследования
3. Обеспечение доступности сервисов для всех групп пользователей
4. Очевидность и ясность взаимодействия с сервисами
5. Постоянное развитие в связи с меняющимися потребностями пользователей
6. Мобильная версия важнее

7. **Visibility of system status**

   Indicate loading of every single action, use skeleton views for pages

8. **Clarity**

   Describe actions and consequences exhaustively using only the simplest words and icons

9. **User control**

   Provide navigation with the ability to move forward and backward on all pages and functionality with the ability to undo and redo all actions

10. **Consistency**

    Use the narrowest and most rigorous list of styles, approaches and components

11. **Error prevention**

    Warn the user and avoid allowing him to do anything by mistake, hide from views and mark destructive actions red

12. **Visibility of everything the user needs**

    Remember that out of sight means out of mind and show user all actions, navigation destinations and only necessary information

13. **Flexibility**

    Create as versatile yet customizable interfaces as possible

14. **Simplicity**

    Remember that less is more, avoid using shadows, unnecessary borders, colors

15. **Error correction**

    Offer users an ability to edit and undo everything

16. **Documentation**

    Provide easy access to detailed description and explanation, help and support everywhere

Moreover, development of cross-platform interfaces these days requires to place a great emphasis on

11. **Functionality**

    Consider design to be able to hold a very large number of actions and navigation

12. **Accessibility**

    - Always preserve color contrast ratio and font size
    - Write semantic HTML
    - Declare language of site
    - Leave meaningful links
    - Add placeholders and alt texts

Examples of following practices include targeting bottom of screen on mobile devices

## References

https://www.nngroup.com/articles/design-systems-101/
https://www.nngroup.com/articles/definition-user-experience/
https://gs.statcounter.com/os-market-share
https://www.reddit.com/r/GooglePixel/comments/qbmgd4/material_you_is_horrible/
https://www.brendanmcginley.com/2021/12/03/android-12s-material-you-is-terrible-you-know-it/
https://www.reddit.com/r/MacOS/comments/v7o87z/apple_should_read_its_own_guidelines/
https://www.fastcompany.com/3053406/how-apple-is-giving-design-a-bad-name
https://medium.com/swlh/what-is-dx-developer-experience-401a0e44a9d9#:~:text=Developer%20Experience%20is%20the%20equivalent,general%20tools%2C%20APIs%2C%20etc.
http://standart.gov.design/
https://www.nngroup.com/articles/ten-usability-heuristics
https://www.smashingmagazine.com/2019/08/bottom-navigation-pattern-mobile-web-pages
