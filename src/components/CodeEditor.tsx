// src/components/CodeEditor.tsx

import React, { useState, useEffect, ChangeEvent } from "react";
import { Language, Highlight, themes } from "prism-react-renderer";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const [language, setLanguage] = useState<Language>("javascript");
  const [theme, setTheme] = useState(themes.github);

  useEffect(() => {
    const textarea = document.getElementById(
      "code-textarea"
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = "0px";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }, [code]);

  const handleCodeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    switch (selectedTheme) {
      case "github":
        setTheme(themes.github);
        break;
      case "dracula":
        setTheme(themes.dracula);
        break;
      case "vsDark":
        setTheme(themes.vsDark);
        break;
      case "duotoneDark":
        setTheme(themes.duotoneDark);
        break;
      case "duotoneLight":
        setTheme(themes.duotoneLight);
        break;
      case "nightOwl":
        setTheme(themes.nightOwl);
        break;
      case "shadesOfPurple":
        setTheme(themes.shadesOfPurple);
        break;
      case "ultramin":
        setTheme(themes.ultramin);
        break;
      default:
        setTheme(themes.github);
    }
  };

  return (
    <div className="container">
      <div className="controls">
        <label>
          Language:
          <select value={language} onChange={handleLanguageChange}>
            <option value="javascript">JavaScript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="php">PHP</option>
            <option value="ruby">Ruby</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
          </select>
        </label>
        <label>
          Theme:
          <select onChange={handleThemeChange}>
            <option value="github">GitHub</option>
            <option value="dracula">Dracula</option>
            <option value="vsDark">VS Dark</option>
            <option value="duotoneDark">Duotone Dark</option>
            <option value="duotoneLight">Duotone Light</option>
            <option value="nightOwl">Night Owl</option>
            <option value="shadesOfPurple">Shades of Purple</option>
            <option value="ultramin">Ultramin</option>
          </select>
        </label>
      </div>
      <div className="code-editor">
        <div className="editor">
          <textarea
            id="code-textarea"
            value={code}
            onChange={handleCodeChange}
            spellCheck={false}
            // style={{ width: "100%", height: "100px", resize: "none" }}
          />
        </div>
        <div className="highlight">
          <Highlight theme={theme} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={{
                  ...style,
                  height: "103%",
                  marginTop: "1px",
                }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
