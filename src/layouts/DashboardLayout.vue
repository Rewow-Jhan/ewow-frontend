<template>
  <div class="side-bar flex flex-col justify-center">
    <div class="side-bar-header flex justify-evenly items-center">
      <img src="../assets/images/Rewow-logo-white.png" alt="Logo" class="w-1/2" />
    </div>

    <div>
      <ul class="menu menu-xl rounded-box w-full pt-6">
        <li class="my-2 pl-4 flex">
          <a class="text-lg py-3">
            <img :src="petIcon" class="object-contain mr-6" alt="Pet Icon" width="32" height="32" />
            Historia
          </a>
        </li>
        <li class="my-2 pl-4 flex">
          <a class="text-lg py-3">
            <img :src="citeIcon" class="object-contain mr-6" alt="Cite Icon" width="32" height="32" />
            Citas
          </a>
        </li>
        <li class="my-2 pl-4 flex">
          <a class="text-lg py-3">
            <img :src="shopIcon" class="object-contain mr-6" alt="Shop Icon" width="32" height="32" />
            Tienda
          </a>
        </li>
      </ul>
    </div>

    <div class="mt-auto">
      <button class="btn btn-ghost btn-block btn-xl">
        <span class="text-lg text-secondary">Cerrar sesión</span>
      </button>
    </div>
  </div>
</template>

<script>
import petIcon from "@/assets/icons/pet.svg"
import citeIcon from "@/assets/icons/cite.svg"
import shopIcon from "@/assets/icons/shop.svg"
export default {
  name: 'DeashboardLayout',
  data() {
    return {
      petIcon,
      citeIcon,
      shopIcon
    }
  },
}
</script>

<style>
.side-bar {
  margin: 0;
  padding: 0;
  width: 280px;
  background-color: white;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.side-bar-header {
  height: 160px;
  width: 100%;
  background-color: var(--color-primary);
}
</style>