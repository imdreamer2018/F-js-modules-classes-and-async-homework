export const getPoetry = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json;charset=UTF-8",
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
  };
  return fetch("https://v1.jinrishici.com/all.json", requestOptions).then(
    (response) => {
      return response.json().then((data) => {
        if (!response.ok) {
          const error = response.statusText;
          return Promise.reject(error);
        }
        const result = [];
        result.push(data.origin);
        result.push(data.author);
        result.push(data.content);
        return result;
      });
    }
  );
};
