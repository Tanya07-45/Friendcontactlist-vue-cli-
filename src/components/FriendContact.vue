<template>
<div>
        <li>
          <h2>{{name}} {{isFavorite ? '(Favorite)':''}}</h2>
          <button @click="toogleFavourite()">Toggle Favorite</button>
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
      id:{
        type:String,
        required:true,
      },
      name:{
        type: String,
       required:true,
      },
      phoneNumber:String,
      email:String ,
      isFavorite: { 
        type: Boolean,
        required:false,
        default:false,
        // validator:function(value){
        //   return value ==='1' || value ==='0';
        // }

      },
 },
emits:[],
  data(){
      return{
        detailsAreVisible: false,
       
      };
  },
  methods:{
       toogleDetails(){
          this.detailsAreVisible = !this.detailsAreVisible;
        //   this.phoneNumber  
        },
        //this will give you error because vue uses a concept unidirectional data flow.
        //simply means that data passed from app to friendContact should only be changed in app,not in friend contact.
        toogleFavourite(){
         this.$emit('toogle-favorite',this.id);
        },
  },
};
</script>
