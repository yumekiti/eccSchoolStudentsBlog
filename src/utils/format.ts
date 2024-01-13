export const getTitle = (path: string) => {
  const splitedPath = (path && path.split('/').slice(-1)) || [];
  const splitedUnderline =
    (splitedPath.length && splitedPath[0].split('_')) || [];
  const title = splitedUnderline.slice(1).join('_') || '';

  return title;
};
