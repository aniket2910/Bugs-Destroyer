import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { dark, dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);

const ShowCode = () => {
  const codeString = `const ShowCode = () => {
    const codeString = "(num) => num + 1";
    return (
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    );
  };`;
  return (
    <SyntaxHighlighter language="javascript" style={dracula}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ShowCode;
