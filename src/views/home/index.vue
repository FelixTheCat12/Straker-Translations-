<template>
  <div>
    <h2 class="containter text-center">
      Straker Translations Coding Exercise - Felix Niocena
    </h2>
    <br/>
    <div class="container">
      <div class="row">
        <!-- Using cards to display the user details -->
        <div
          class="card col-sm-6 col-md-4"
          v-for="user in users"
          :key="user.id"
          @click="handleUserClick(user)"
        >
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
            <br />
            <div class="card-text">
              <div>
                <span>Address: </span>
                <span>{{ formatAddress(user.address) }}</span>
              </div>

              <br />
              <div>
                <span>Phone: </span>
                <span>{{ user.phone }}</span>
              </div>

              <div>
                <span>Website: </span>
                <span>{{ user.website }}</span>
              </div>

              <div>
                <span>Company: </span>
                <span>{{ user.company.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <posts-modal
      v-if="selectedUser"
      :selected-user="selectedUser"
      @closeModal="removeSelectedUser" 
    ></posts-modal>
  </div>
</template>

<script>
import UserService from "@/services/users";
import PostsModal from "@/views/home/posts";

export default {
  data() {
    return {
      users: null,
      selectedUser: null
    };
  },

  mounted() {
    this.getUserList();
  },

  methods: {
    getUserList() {
      UserService.getUsers().then(response => {
        this.users = response.data;
      });
    },

    handleUserClick(user) {
      this.selectedUser = user;
    },

    //Formatting the address for automation
    formatAddress(address) {
      return `${address.suite} ${address.street}, ${address.city}, ${address.zipcode}`;
    },

    removeSelectedUser() {
      this.selectedUser = null;
    }
  },

  components: {
    // Passing posts-modal to html
    PostsModal    
  }
};
</script>
