export const UserComponent = (user) => {
  const { email, username } = user;
  return `
<div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">${
          username || "No name"
        }</h5>
    </a>
    <p class="mb-3 font-bold text-[20px] text-gray-700 dark:text-gray-400">$ ${
      email || "No email"
    }</p>
</div>
</div>
    `;
};
