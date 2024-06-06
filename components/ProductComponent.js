export const ProductComponent = (product) => {
  const { price, title, image } = product;
  return`
    <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg object-fill h-[500px] w-[500px]" src="${image}" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
            </a>
            <p class="mb-3 font-bold text-[20px] text-gray-700 dark:text-gray-400">$ ${price}</p>
        </div>
    </div>
    `;
};
