<template>
  <div class="blog-wrapper no-user" :class="{'no-user' : !user}">
      <div class="blog-cotent">
          <div>
              <h2 v-if="post.welcomeScreen"> {{ post.title }} </h2>
              <h2 v-else> {{ post.title }} </h2>
              <p class="line"><img src="../assets/blogPhotos/title-icon-img.png" alt=""></p>
              <p v-if="post.welcomeScreen"> {{ post.blogPost }} </p>
              <p class="content-preview" v-else> {{ post.blogHTML }} </p>

              <router-link class="link link-light" v-if="post.welcomeScreen" v-show="!user" :to="{ name: 'Login' }">
                  Login / Register <Arrow class="arrow arrow-light" />
              </router-link>
              <router-link class="link" v-else to="#">
                  View The Post <Arrow class="arrow" />
              </router-link>
          </div>
      </div>

      <div class="blog-photo">
              <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="">
              <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="">
      </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
    name:"blogPost",
    components:{ Arrow },
    props:["post"],
    computed:{
    user(){
      return this.$store.state.user;
        }
    },
}
</script>

<style lang="scss" scoped>
  .blog-wrapper{
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media (min-width: 700px){
      min-height: 650px;
      max-height: 650px;
      flex-direction: row;
    }
    @media (min-width: 1300px){
        align-items: center;
    }

    .blog-cotent{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;
        @media (min-width: 700px){
            order: 1;
        }
        @media (min-width: 800px){
            flex: 3;
        }

        div {
            max-width: 375px;
            padding: 72px 24px;
            @media (min-width: 700px){
                padding: 0 24px;
            }

            h2{
                color: #b8a680;
                font-size: 32px;
                font-weight: 300;
                text-transform: uppercase;
                margin-bottom: 14px;
                text-align: center;
                @media (min-width: 700px){
                    font-size: 40px;
                }
            }

            p{
                font-size: 15px;
                font-weight: 300;
                line-height: 1.7;
            }

            .line{
                padding: 0 10px;
                position: relative;
                display: table;
                margin: 0;
                width: auto;
                margin: 0 auto;
                margin-bottom: 5px;
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
            .content-preview{
                font-weight: 500;
                font-size: 13px;
                max-height: 24px;
                width: 330px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .link{
                display: inline-flex;
                align-items: center;
                margin-top: 32px;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;
                transition: .5s ease-in all;

                &:hover{
                    border-bottom-color: #303030;
                }
            }
            .link-light {
                &:hover{
                    border-bottom-color: #fff;
                }
            }
        }
    }

    .blog-photo{
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        
        @media (min-width: 700px){
            order: 2;
            margin-top: 100px;
        }

        @media (min-width: 700px){
            flex: 4;
        }

        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &:nth-child(even){
        .blog-cotent{
            order: 2;
        }

        .blog-photo{
            order: 1;
        }
    }
  }

  .no-user{
      &:first-child{
          background-color: #303030;
          color: #fff;
          align-items: normal;
      }
      
      &:first-child .blog-photo{
          margin-top: 0;
      }
  }
</style>