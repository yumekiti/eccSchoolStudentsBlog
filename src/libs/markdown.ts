export const extractHeadersFromMarkdown = (markdownText: string) => {
  const headers = [];
  const lines = markdownText.split('\n');
  let isInsideCodeBlock = false; // コードブロック内にいるかどうかのフラグ

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      // コードブロックの開始・終了を切り替え
      isInsideCodeBlock = !isInsideCodeBlock;
      continue; // コードブロックの行は見出しとして処理しない
    }

    const lineNumber = lines.indexOf(line) + 1;

    if (!isInsideCodeBlock) {
      const headingMatch = line.match(/^(#+)\s+(.*)/);
      if (headingMatch) {
        const headingLevel = headingMatch[1].length;
        const headingText = headingMatch[2].trim();
        headers.push({
          level: headingLevel,
          text: headingText,
          id: lineNumber,
        });
      }
    }
  }

  return headers;
};
