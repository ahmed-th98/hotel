<template>
  <div class="profile">
    <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <div class="container">
      <h2>Profile Details</h2>
      <p class="line"><img src="../assets/blogPhotos/title-icon-img.png" alt=""></p>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div class="admin-badge">
          <adminIcon class="icon" />
          <span>admin</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button @click="updateProfile">Save Changes</button>
      </div>
      <img src="../assets/Profile.png" alt="" class="img-fluid">
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import adminIcon from "../assets/Icons/user-crown-light.svg";
export default {
    name: "Profile",
    components:{ Modal, adminIcon },
    data() {
        return {
            modalMessage: "Changes were saved!",
            modalActive: null,
        };
    },
    methods:{
        updateProfile(){
            this.$store.dispatch("updateUserSettings");
            this.modalActive = !this.modalActive;
        },

        closeModal() {
            this.modalActive = !this.modalActive;
        },
    },

    computed: {
        firstName: {
            get() {
                return this.$store.state.profileFirstName;
            },
            set(payload) {
                this.$store.commit("changeFirstName", payload);
            },
        },
        lastName: {
            get() {
                return this.$store.state.profileLastName;
            },
            set(payload) {
                this.$store.commit("changeLastName", payload);
            },
        },
        username: {
            get() {
                return this.$store.state.profileUsername;
            },
            set(payload) {
                this.$store.commit("changeUsername", payload);
            },
        },
        email() {
            return this.$store.state.profileEmail;
        },
    },
}
</script>

<style lang="scss" scoped> 
.profile {
  .container {
    max-width: 1000px;
    padding: 60px 25px;
    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 400;
      font-size: 32px;
    }
    .line{
                padding: 0 10px;
                position: relative;
                display: table;
                margin: 0;
                width: auto;
                margin: 0 auto;
                margin-bottom: 15px;
                text-align: center;
                float: none;
                line-height: normal;
                &::before{
                    content: "";
                    position: absolute;
                    display: block;
                    left: 100%;
                    top: 50%;
                    width: 80px;
                    background-color: #b8a680;
                    z-index: 0;
                    height: 1px;
                    margin: 0 auto;
                }
                &::after{
                    right: 100%;
                    left: auto;
                    content: "";
                    background-color: #b8a680;
                    position: absolute;
                    display: block;
                    top: 50%;
                    width: 80px;
                    z-index: 0;
                    height: 1px;
                    margin: 0 auto;    
                }    
    }
    .profile-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;
      .initials {
        position: initial;
        width: 80px;
        height: 80px;
        font-size: 32px;
        background-color: #b8a680;
        color: #fff;
        display: flex;
        align-self: center;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      .admin-badge {
        display: flex;
        align-self: center;
        color: #fff;
        font-size: 14px;
        padding: 8px 24px;
        border-radius: 8px;
        background-color: #b8a680;
        margin: 16px 0;
        text-align: center;
        text-transform: capitalize;
        .icon {
          width: 14px;
          height: auto;
          margin-right: 8px;
        }
      }
      .input {
        margin: 16px 0;
        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        align-self: center;
        background-color: #b8a680;
        &:hover{
        background-color: rgba(48, 48, 48, 0.7);
        }
      }
    }
    .img-fluid{
      width: 100%;
      align-items: center;
      @media(min-width: 700px){
        height: 85vh;
      }
    }
  }
}
</style>