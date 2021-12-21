<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>

    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never Miss A Post. Register For Your Free Account Today!</h2>
        <router-link class="router-button" to="#">
          REGISTER  <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title:"Arjan luxury hotels",
        blogPost: "Arjaan Luxury Hotels is a collection of the finest independent luxury hotels in Basra, Iraq. Find out more!",
        welcomeScreen: true,
        photo: "coding",
      },

      sampleBlogPost:[
        {
          title:"Arjan hotel",
          blogHTML:"a variety of state-of-the-art luxury venues; experienced event-planning and technical support teams – everything you need to host a superb, standout event in beautiful Basrais here, ready for you.",
          blogCoverPhoto:"beautiful-stories",
        },
        {
          title:"Arrive in Style",
          blogHTML:"Enjoy a comfortable transfer from the airport to your hotel before checking in to our luxury suite.",
          blogCoverPhoto:"designed-for-everyone",
        }
      ],
      
    }
  },
  computed:{
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards;
    },
    user(){
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss" scoped>

  .blog-card-wrap{

    h3{
      letter-spacing:1px;
      width:360px;
      text-align: center;
      font-weight: 400;
      font-size: 28px;
      margin:auto;
      margin-bottom:52px;
      white-space:nowrap;
      position: relative;
      &::before{
        background-color: #b8a680;
        content: '';
        display: block;
        height: 3px;
        width: 75px;
        margin-bottom: 5px;
      }
      &::after{
        background-color: #b8a680;
        content: '';
        display: block;
        position:absolute; right:0; 
        height: 3px;
        width: 75px;
        margin-top: 0.25em;
      }
    }

  }

  .updates {
    background-image: url("../assets/bg/bg1.jpg");
    background-size: cover;
    background-position: center;
  .container {
    background-color: #b8a680cc;
    max-width: 100%;
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 140px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 400;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}    

</style>