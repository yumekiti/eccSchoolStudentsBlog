export const formatTableDate = (content: string) => {
  const contentArray = content.split('\n');
  const today = new Date();
  const day = today.getDate();

  let isFormat = false;
  let isStart = false;
  let isEnd = false;

  // date_ で始まっていたら、tabeleに入っている今日の日付をわかりやすく表示する
  const formattedContentArray = contentArray.map((line) => {
    const isDateHeading =
      line.startsWith('## date_') || line.startsWith('### date_');

    if (isDateHeading) {
      // 今年の日付の場合、isHeadingをtrueに設定
      const date = line.replace('date_', '').split(' ')[1];
      const isCurrentYear =
        date.split('年')[0] === today.getFullYear().toString();

      line = line.replace('date_', '');

      isFormat = isCurrentYear;
    } else if (line.startsWith('##') || line.startsWith('###')) {
      isFormat = false;
    }

    if (isFormat) {
      // 全く同じ日付の場合、今日の日付をわかりやすく表示する
      const splitedLine = line.split('|');
      const splitedDay = splitedLine.slice(1, -1);
      splitedDay.forEach((day, index) => {
        splitedDay[index] = day.trim();
      });
      splitedDay.forEach((item, index) => {
        if (item === '1') {
          isStart = true;
        }
        if (isStart && String(day) === item && !isEnd) {
          splitedDay[index] = `**${item}**`;
          isEnd = true;
        }
        line = line.replace(splitedLine[index + 1], splitedDay[index]);
      });
    }

    return line;
  });

  return formattedContentArray.join('\n');
};

export const formatTableTime = (content: string) => {
  const contentArray = content.split('\n');

  let isFormat = false;

  // time_ で始まっていたら、tabeleに入っている今日の日付をわかりやすく表示する
  const formattedContentArray = contentArray.map((line) => {
    const isTimeHeading =
      line.startsWith('## time_') || line.startsWith('### time_');

    if (isTimeHeading) {
      line = line.replace('time_', '');
      isFormat = true;
    } else if (line.startsWith('##') || line.startsWith('###')) {
      isFormat = false;
    }

    if (isFormat) {
      // :を含むか
      const isTime = line.indexOf(':') !== -1;

      if (isTime) {
        // 17:00 ~ 19:50 などの場合、今の時間の範囲をわかりやすく表示する
        const timeRange = line.split('~');
        const startTime = timeRange[0].replace(' ', '').replace('|', '').trim(); // 17:00
        const endTime = timeRange[1].replace(' ', '').replace('|', '').trim(); // 19:50

        const now = new Date();
        const nowTime = `${now.getHours()}:${now.getMinutes()}`;

        if (startTime <= nowTime && nowTime <= endTime) {
          line = line.replace(
            `${startTime} ~ ${endTime}`,
            `**${startTime} ~ ${endTime}**`,
          );
        }
      }
    }

    return line;
  });

  return formattedContentArray.join('\n');
};

export const formatVariable = (content: string) => {
  const contentArray = content.split('\n');
  const variables: { name: string; value: string }[] = [];

  let currentVariable: { name: string; value: string } | null = null;

  const formattedContentArray = contentArray.map((line) => {
    const isVariableHeading = line.startsWith('_');

    if (isVariableHeading) {
      // 変数のヘッダー行の処理
      const variableName = line.split('=')[0].replace('_', '');
      const isSingleQuotedValue = line.includes("'");

      if (isSingleQuotedValue) {
        // シングルクォートで括られた値の場合
        const variableValue = line.split("'")[1];
        variables.push({ name: variableName, value: variableValue });
      } else {
        // シングルクォートで括られていない場合
        currentVariable = { name: variableName, value: '' };
      }

      // 行を空にする
      line = '';
    } else if (currentVariable && line.startsWith('`')) {
      // バッククォートで括られた場合
      variables.push(currentVariable);
      currentVariable = null;

      // 行を空にする
      line = '';
    } else if (currentVariable) {
      // 変数の値を追加
      currentVariable.value += line + '\n';
      line = '';
    }

    // 全ての変数について置換を行う
    variables.forEach((variable) => {
      line = line.replace(`{{${variable.name}}}`, variable.value);
    });

    return line;
  });

  return formattedContentArray.join('\n');
};
