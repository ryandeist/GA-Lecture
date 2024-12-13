# Intro to React - Virtual DOM

## Virtual Document Object Model (Virtual DOM)
When state is changed, what is shown to the user also changes. React handles these UI updates through a mechanism call the ***virtual DOM***.

The internal mechanics of the virtual DOM won't typically be relevant to you as a developer, but understanding the basics of this fature can provide helpful context in understanding why React works the way it does. 

The virtual DOM starts as essentially a copy of the actual DOM. When updates are made to the state, any necessary UI changes are reflected in a brand new version of the virtual DOM.

The two versions of the virtual DOM are then compared. The differences between them are calculated - this is called ***reconciliation***. The result of this reconciliation is called ***diff***.

The actual DOM is then updated (or re-rendered) based on the calculated diff.

![visual example of diff](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-react/virtual-dom/assets/virtual-dom.png)

This matters for two reasons:
* It means we don't have to worry about how to transition our application from one state to another, significantly reducing the amound and complexity of code we have to write ourselves. 
* While this may seem complex and time-consuming, it is vastly more efficient that interacting directly with the actual DOM. 