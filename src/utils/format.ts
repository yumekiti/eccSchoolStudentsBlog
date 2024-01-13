export const getTitle = (path: string) => {
  const splitedPath = (path && path.split('/').slice(-1)) || [];
  const splitedUnderline =
    (splitedPath.length && splitedPath[0].split('_')) || [];
  const title = splitedUnderline.slice(1).join('_') || '';

  return title;
};

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
