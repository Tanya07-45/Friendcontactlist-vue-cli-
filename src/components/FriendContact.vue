<template>
<div>
        <li>
          <h2>{{name}} {{isFavorite === '1'? '(Favorite)':''}}</h2>
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
    // props:['name','phoneNumber','email' ,'isFavorite' //we could refer this with 'this' keyword.
    // ],
    props:{
      name:{
        type: String,
       required:true,
      },
      phoneNumber:String,
      email:String ,
      isFavorite: { 
        type: String,
        required:false,
        default:'0',
        validator:function(value){
          return value ==='1' || value ==='0';
        }

      },
 },

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
