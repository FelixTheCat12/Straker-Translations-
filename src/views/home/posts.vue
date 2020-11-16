<template>
  <!-- Modal -->
  <div
    class="modal"
    :class="{ showPosts: canShowPosts }"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ selectedUser.name }}'s Posts</h5>
          
          <button type="button" class="close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
              </tr>
            </thead>
            <tbody>

                <!-- All Posts will be displayed in accordance to the post.id -->
              <tr v-for="post in posts" :key="post.id">
                <th scope="row">{{ post.title }}</th>
                <td>{{ post.body }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/users";

export default {
  data() {
    return {
      posts: null,
      postsLimit: 10,
      canShowPosts: true
    };
  },

  props: {
    selectedUser: {
      type: Object,
      required: true
    }
  },

  mounted() {
    this.getUserPosts();
  },

  methods: {
    getUserPosts() {
      UserService.getPosts().then(response => {
        const userId = this.selectedUser.id;
        const allPosts = response.data;

        //Displays all posts within 0 - 10
        this.posts = allPosts
          .filter(posts => {
            return posts.userId === userId;
          })
          .slice(0, this.postsLimit);
      });
    },

    //Since canShowPosts is set to true when the user clicks on the name. 
    //canShowPosts will always be set to false however, $emit will sending custom events between child components upwards to parent components
    closeModal() {
      this.canShowPosts = false;
      this.$emit("closeModal");
    }
  }
};
</script>
