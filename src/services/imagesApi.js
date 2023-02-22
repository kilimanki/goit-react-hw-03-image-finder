import axios from 'axios';
export const imagesApi = ({ page, search }) => {
  return axios.get(
    'https://pixabay.com/api/?key=32990578-f3b3113eefa07098cb0f1ea38',
    {
      params: {
        q: search,
        page: page,
        per_page: 12,
        orientation: 'horizontal',
        image_type: 'photo',
      },
    }
  );
};
