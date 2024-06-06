export const CardComponent = (product) => {
  const {
    mainImage,
    name,
    price: { minPrice, maxPrice },
  } = product;
  return `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg object-cover w-[400px]" src="${
              mainImage ||
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">${
                  name || "No name"
                }</h5>
            </a>
            <p class="mb-3 font-bold text-[20px] text-gray-700 dark:text-gray-400">$ ${
              minPrice || "Out of stock"
            }</p>
        </div>
    </div>
    `;
};
