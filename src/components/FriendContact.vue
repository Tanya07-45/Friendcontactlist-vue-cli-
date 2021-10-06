<template>
<div>
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toogleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if ="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
        </li> 
     </div>
</template>
<script>
export default {
  data(){
      return{
        detailsAreVisible: false,
        friend:{
            id: 'manual',
            name:'Manuel Lorenz',
            phone:'01234 5678 991',
            email:'manuel@localhost.com',

        },
      };
  },
  methods:{
       toogleDetails(){
          this.detailsAreVisible = !this.detailsAreVisible;  
        }
  }
};
</script>
