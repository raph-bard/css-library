// design-system

const toggleButton = document.getElementById("toggleButton");
const header = document.querySelector("header");

toggleButton.addEventListener("click", function () {
  header.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const navList = document.querySelector("header nav ul");
  sections.forEach(function (section) {
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.querySelector("h2").textContent;

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = sectionTitle;
    link.setAttribute("href", `#${sectionId}`);

    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("code");

  codeBlocks.forEach(function (code) {
    const codeContent = code.textContent.trim();

    const codeBlock = document.createElement("div");
    codeBlock.classList.add("code-block");

    const pre = document.createElement("pre");
    const codeElement = document.createElement("code");
    codeElement.textContent = codeContent;

    pre.appendChild(codeElement);
    codeBlock.appendChild(pre);

    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");
    copyButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" fill="#fff"/></svg>';
    copyButton.onclick = function () {
      copyCode(codeContent, copiedText);
    };

    codeBlock.appendChild(copyButton);

    const copiedText = document.createElement("span");
    copiedText.classList.add("copied-text");
    copiedText.textContent = "Copied!";
    codeBlock.appendChild(copiedText);

    code.parentNode.replaceChild(codeBlock, code);
  });
});

function copyCode(codeContent, copiedText) {
  const tempTextarea = document.createElement("textarea");
  tempTextarea.value = codeContent;
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextarea);

  copiedText.style.display = "inline-block";
  setTimeout(function () {
    copiedText.style.display = "none";
  }, 3000);
}

