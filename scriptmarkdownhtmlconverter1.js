
const container = document.getElementById("container");
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

let convertMarkdown = () => {
  let input = markdownInput.value.trim();

  const formatInline = (text) => {
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
      return `<img alt="${alt}" src="${src}">`;
    });
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      return `<a href="${url}">${linkText}</a>`;
    });

    text = text.replace(/\*\*(.+?)\*\*|__(.+?)__/g, (match, a, b) => {
      return `<strong>${a || b}</strong>`;
    });
    text = text.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)|(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/g, (match, a, b) => {
      return `<em>${a || b}</em>`;
    });

    return text;
  };

  let lines = input.split(/\r?\n/);
  let output = [];

  let currentList = null;
  let listItems = [];

  const flushList = () => {
    if (listItems.length > 0) {
      output.push(`<${currentList}>${listItems.join("")}</${currentList}>`);
      listItems = [];
      currentList = null;
    }
  };

  lines.forEach(line => {
    line = line.trim();

    if (!line) {
      flushList();
      return;
    }

    let heading = line.match(/^(#{1,3})[ \t]+(.+)$/);
    let quote = line.match(/^>[ \t]+(.+)$/);
    let unordered = line.match(/^[-*+][ \t]+(.+)$/);
    let ordered = line.match(/^\d+\.[ \t]+(.+)$/);

    if (heading) {
      flushList();

      let level = heading[1].length;
      let text = formatInline(heading[2]);

      output.push(`<h${level}>${text}</h${level}>`);

    } else if (quote) {
      flushList();

      output.push(`<blockquote>${formatInline(quote[1])}</blockquote>`);

    } else if (unordered) {
      if (currentList !== "ul") {
        flushList();
        currentList = "ul";
      }

      listItems.push(`<li>${formatInline(unordered[1])}</li>`);

    } else if (ordered) {
      if (currentList !== "ol") {
        flushList();
        currentList = "ol";
      }

      listItems.push(`<li>${formatInline(ordered[1])}</li>`);

    } else {
      flushList();

      // Each ordinary line becomes its own paragraph
      output.push(`<p>${formatInline(line)}</p>`);
    }
  });

  flushList();

  return output.join("");
};

markdownInput.addEventListener("input", () => {
  const output = convertMarkdown();

  htmlOutput.textContent = output;
  preview.innerHTML = output;
});
