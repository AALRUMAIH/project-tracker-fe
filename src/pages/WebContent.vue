<template>
  <div class="flex flex-col p-10">
    <div class="w-full max-w-5xl mx-auto 
 ">
      <div class="flex justify-between w-full mb-4">
        <button   class="sketch-btn red"
    @click="activeRole = 'admin'; showGallery('admin')"
    :style="activeRole === 'admin' ? activeStyle : {}"
  >Admin</button>
  
        <button
    class="sketch-btn blue"
    @click="activeRole = 'employee'; showGallery('employee')"
    :style="activeRole === 'employee' ? activeStyle : {}"
  >
    Employee
  </button>

  <button
    class="sketch-btn green"
    @click="activeRole = 'pm'; showGallery('pm')"
    :style="activeRole === 'pm' ? activeStyle : {}"
  >
    Project Manager
  </button>
      </div>

      <div class="flex justify-center items-center w-full">
        <div v-if="images.length" >
          <img :src="images[current]" class="gallery-img w-full rounded-lg" />
          <div class=" mt-3 flex justify-center">
            <button @click="prev">
            <i class="pi pi-chevron-left" style="font-size: 1.5rem"> </i>

            </button>
            <button @click="next">
            <i class="pi pi-chevron-right" style="font-size: 1.5rem"> </i>

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import project1 from "@/assets/1project.png";
import project2 from "@/assets/2project.png";
import project3 from "@/assets/3project.png";
import project4 from "@/assets/4project.png";
import project5 from "@/assets/5project.png";
import emp0 from "@/assets/0emp.png";
import emp1 from "@/assets/1emp.png";
import emp2 from "@/assets/2emp.png";
import emp3 from "@/assets/3emp.png";
import AdminLogin from "@/assets/AdminLoginWeb.png";
import AdminDashboard from "@/assets/AdminDashboardWeb.png";
import AdminProjects from "@/assets/AdminProjectsWeb.png";
import AdminProjectDetails from "@/assets/AdminProjectDetailsWeb.png";
import AdminProjectDetails2 from "@/assets/AdminProjectDetailsWeb2.png";
import AdminUsersDashboard from "@/assets/AdminUserDashboardWeb.png";
import AdminAddUser from "@/assets/AdminAddUserWeb.png";


export default {
  data() {
    return {
      activeRole: 'admin',
          activeStyle: { background: "#e2e8f0", borderRadius: "15px" }, 

      current: 0,
      images: 
        [AdminLogin,AdminDashboard, AdminProjects, AdminProjectDetails, AdminProjectDetails2, AdminUsersDashboard,AdminAddUser],
      
      galleries: {
        admin: [AdminLogin,AdminDashboard, AdminProjects, AdminProjectDetails, AdminProjectDetails2, AdminUsersDashboard,AdminAddUser],

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

.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 50%;

}



.controls button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background: #e2e8f0;
  cursor: pointer;
  border-radius: 8px;
}
</style>
