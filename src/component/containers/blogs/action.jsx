import SERVICES from "Config/services"
import fetch  from "Config/fetch"

export const getListArticle = () => new Promise((resolve, reject) => {
  const options = {
    method: 'GET',
    url: SERVICES.API_GET_LIST_ARTICLE,
  };

  fetch(options)
    .then(data => {
      resolve(data)
    });
});
