<template>
  <div class="flex flex-col p-0 sm:p-10 ">
    <div class="w-full max-w-5xl mx-auto">
      <div class="flex justify-between w-full mb-4">
        <button   class="sketch-btn red text-sm sm:text-2xl"
    @click="activeRole = 'admin'; showGallery('admin')"
    :style="activeRole === 'admin' ? activeStyle : {}"
  >Admin</button>
        <button
    class="sketch-btn blue text-sm sm:text-2xl"
    @click="activeRole = 'employee'; showGallery('employee')"
    :style="activeRole === 'employee' ? activeStyle : {}"
  >
    Employee
  </button>

  <button
    class="sketch-btn green text-sm sm:text-2xl"
    @click="activeRole = 'pm'; showGallery('pm')"
    :style="activeRole === 'pm' ? activeStyle : {}"
  >
    Project Manager
  </button>
      </div>

      <div class="flex justify-center items-center w-full  ">
        <div v-if="images.length" >
<img 
  :src="images[current]" 
  class="w-full aspect-[16/9] object-cover rounded-lg"
/>
          <div class=" mt-3 flex justify-center gap-2  ">


              <button @click="prev"  >
                            <i class="pi pi-chevron-left text-base sm:text-3xl" > </i>

              </button>
            <button @click="next"  >
              <i class="pi pi-chevron-right text-base sm:text-3xl" > </i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import project1 from "@/assets/1projectdesk.png";
import project2 from "@/assets/2projectdesk.png";
import project3 from "@/assets/3projectdesk.png";
import project4 from "@/assets/4projectdesk.png";
import project5 from "@/assets/5projectdesk.png";
import emp0 from "@/assets/1empdesk.png";
import emp1 from "@/assets/2empdesk.png";
import emp2 from "@/assets/3empdesk.png";
import emp3 from "@/assets/4empdesk.png";
import admin1 from "@/assets/1admindesk.png";
import admin2 from "@/assets/2admindesk.png";
import admin3 from "@/assets/3admindesk.png";
import admin4 from "@/assets/4admindesk.png";

export default {
  data() {
    return {
      current: 0,
      activeRole: 'admin',
          activeStyle: { background: "#e2e8f0", borderRadius: "15px" },
      images: 
        [admin1, admin2, admin3, admin4],
      
      galleries: {
        admin: [admin1, admin2, admin3, admin4],

        employee: [emp0, emp1, emp2, emp3],

    pm: [project1, project2, project3, project4, project5],
      },
    };
  },
  
  methods: {
    showGallery(role) {
      this.images = this.galleries[role];
      this.current = 0;
    },
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style>

.sketch-btn {
  font-weight: bold;
  font-family: "Comic Sans MS", cursive, sans-serif;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s;
}

.sketch-btn:hover {
  background: #f1f5f9;
  border-radius:15px ;
}

#gallery-img{
  width: 100%;
  height: 100%;
}




.controls button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}
</style>
