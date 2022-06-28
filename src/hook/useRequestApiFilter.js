import { useEffect } from 'react';

function useRequestApiFilter(url, typeFood, func, number) {
  useEffect(() => {
    const apiFood = async () => {
      try {
        const response = await fetch(url);
        const dataApi = await response.json();
        const filterFoods12 = dataApi[typeFood]
          .filter((food, index) => index < number);
        func([...filterFoods12]);
      } catch (error) {
        console.log(error);
      }
    };
    apiFood();
  }, []);
}

export default useRequestApiFilter;
