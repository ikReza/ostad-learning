let list = document.getElementById("list");

const initApp = () => {
  products.map((item) => {
    let json = encodeURIComponent(JSON.stringify(item));

    list.innerHTML += `
      <div class="mx-auto max-w-2xl p-1 sm:px-4 sm:py-12">
        <div class="font-code shadow-2xl pb-2 px-2">
          <div class="relative overflow-hidden border border-black flex justify-center group">
            <img 
              src=${item.productImage} 
              alt=${item.name} 
              class="h-full w-full object-cover object-center group-hover:opacity-90 cursor-pointer 
                    group-hover:scale-110 transition-transform duration-3s hover:ease-in" 
            />
            <button onclick="ADD_ITEM('${json}')" 
                    class="bg-white w-10/12 absolute bottom-1/20 text-xs sm:text-sm py-1 font-bold tracking-wider border border-black opacity-90 sm:opacity-0 transition duration-500 group-hover:opacity-90 focus:bg-slate-800 focus:text-white">
                    ADD TO CART
            </button>
          </div>
          <div class="flex justify-between">
              <h3 class="text-xs sm:text-sm text-gray-700">${item.name}</h3>
              <p  class="text-xs sm:text-sm font-medium text-gray-900">
                ৳ ${item.price}
              </p>
          </div>      
        <div>
      </div>
      `;
  });
};

initApp();