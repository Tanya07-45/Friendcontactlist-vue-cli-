//here we importing package from vue packages so if we importing pckg we have to write only packg name but
// if we importi file then we have to write path
import { createApp } from 'vue'; //we ue this method to combine different javascript files
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
const app = createApp(App);


app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.mount('#app');
