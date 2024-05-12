export const parseFile = <TFileModel>(file: File) => {
  return new Promise<TFileModel>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = function () {
      try {
        resolve(JSON.parse(fileReader.result as string));
      } catch {
        reject("Ошибка загрузки файла");
      }
    };

    fileReader.readAsText(file);
  });
};