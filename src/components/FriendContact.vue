<template>
<div>
        <li>
          <h2>{{name}}</h2>
          <button @click="toogleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if ="detailsAreVisible">
            <li><strong>Phone:</strong> {{phoneNumber}}</li>
            <li><strong>Email:</strong>{{email}}</li>
          </ul>
        </li> 
     </div>
</template>
<script>
export default {
    props:[
        'name',
        'phoneNumber',
        'email' //we could refer this with 'this' keyword.
    ],

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
        //   this.phoneNumber  
        }
  }
};
</script>
