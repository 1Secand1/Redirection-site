/**
 * Show the tab content with the specified ID and hide all othertabs.
 * @param {string} tabId - The ID of the tab to activate.
 * @param {string} tabsWrapClass - The class of the tab wrapper elements.
 */
function activateTabs(tabId, tabsWrapClass) {
  const tabWrappers = document.querySelectorAll("." + tabsWrapClass);

  // Check if there are any elements with the specified class
  if (!tabWrappers.length) {
    console.error("No elements found with class " + tabsWrapClass);
    return;
  }

  // Loop through all tab wrappers
  tabWrappers.forEach((wrapper) => {
    const isTargetTab = wrapper.id === tabId;

    // Hide all tab wrappers except the target one
    wrapper.style.display = isTargetTab ? "block" : "none";
  });
}

// function MenuHandler(classMenu) {
//   const menu = document.querySelector("." + classMenu);

//   function toggleElementVisibility(element, isVisible) {
//     const displayValue = isVisible ? "block" : "none";
//     element.style.display = displayValue;
//   }
//   return {
//     openTheMenu() {
//       toggleElementVisibility(menu, true);
//     },
//     closeMenu() {
//       toggleElementVisibility(menu, false);
//     },
//   };
// }

function MenuHandler(classMenu) {
  const menu = document.querySelector("." + classMenu);

  return {
    addClass(className) {
      menu.classList.add(className);
    },
    removeClass(className) {
      menu.classList.remove(className);
    },
  };
}
